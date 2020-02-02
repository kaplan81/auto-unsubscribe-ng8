import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

export abstract class SubscribedContainer implements OnDestroy {
  destroyed$ = new Subject<void>();
  ngOnDestroy(): void {
    this.destroyed$.next();
  }
}
