import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

// WARNING: THIS DOES NOT WORK ON ANGULAR 9 WITH IVY.
export function ondestroy(): MethodDecorator {
  /**
   * This cannot be a symbol becase we need to access it
   * in the component as `takeUntil((this as any).destroyed$)`.
   * Otherwise we would have to export the symbol itslef
   * and import it in the component class.
   */
  const destroyed$ = 'destroyed$';

  return (target: Component & OnDestroy, propertyKey: string, descriptor: PropertyDescriptor) => {
    Object.defineProperty(target, destroyed$, {
      // tslint:disable-next-line: rxjs-finnish
      value: new Subject<void>(),
      // This will prevent us from creating a new destroyed$ property in the component.
      // It will throw an error if we try to do that.
      writable: false,
      enumerable: true,
      configurable: true,
    });

    // We need to store the oririnal `ngOnDestroy`.
    const originalDescriptor = descriptor.value;

    // This cannot be an arrow function
    // So that we get the correct context of `this`.
    descriptor.value = function() {
      target[destroyed$].next();
      /**
       * Do not do this -> target[destroyed$].complete();
       * It is not necessary:
       * https://stackoverflow.com/questions/44289859/do-i-need-to-complete-a-subject-for-it-to-be-garbage-collected
       * Also it will make trouble on entry components
       * called by the Angular router since it re-uses
       * the same instance of the component and subjects are not reusable:
       * https://angular.io/guide/router#observable-parammap-and-component-reuse
       * https://medium.com/@benlesh/on-the-subject-of-subjects-in-rxjs-2b08b7198b93#dc02
       * And normally you would pass the method arguments to the function:
       * ```ts
       * original.apply(this, arguments);
       * ```
       * But ngOnDestroy() does not take any arguments.
       */
      originalDescriptor.apply(this);
    };
  };
}
