import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { SubscribedContainer } from '../_app/abstracts/subscribed-container.abstract';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./abstract.component.scss'],
  templateUrl: './abstract.component.html',
})
export class AbstractComponent extends SubscribedContainer implements OnInit {
  observable$: Observable<number> = interval(1000);
  subscription$$: Subscription;

  ngOnInit(): void {
    this.subscription$$ = this.observable$
      .pipe(tap(console.log), takeUntil(this.destroyed$))
      .subscribe();
  }
}