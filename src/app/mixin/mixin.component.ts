import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { subscribedContainerMixin } from '../_app/mixins/subscribed-container.mixin';

@Component({
  selector: 'app-mixin',
  templateUrl: './mixin.component.html',
  styleUrls: ['./mixin.component.scss'],
})
export class MixinComponent extends subscribedContainerMixin() implements OnInit {
  observable$: Observable<number> = interval(1000);
  subscription$$: Subscription;

  ngOnInit(): void {
    this.subscription$$ = this.observable$
      .pipe(tap(console.log), takeUntil(this.destroyed$))
      .subscribe();
  }
}
