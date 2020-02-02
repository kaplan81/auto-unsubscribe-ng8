import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { EventManager } from '@angular/platform-browser';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Breakpoint } from './breakpoint.enum';
import { DevToolsChange } from './devtools.model';
import { DevToolsService } from './devtools.service';
import { WINDOW } from './window.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  static mdMaxQuery = `(max-width: ${Breakpoint.MD - 1}px)`;
  @ViewChild(MatSidenav, { static: false }) sidenav: MatSidenav;
  devtoolsChecked$ = new Subject<void>();
  mobileQuery$: Observable<BreakpointState> = this.breakpointObserver.observe(
    AppComponent.mdMaxQuery,
  );
  title = 'Auto Unsubscribe Angular 8';

  constructor(
    private breakpointObserver: BreakpointObserver,
    private devToolsService: DevToolsService,
    private eventManager: EventManager,
    @Inject(WINDOW) private window: any,
  ) {
    this.devToolsService.checkOnDevTools$.pipe(takeUntil(this.devtoolsChecked$)).subscribe();
  }

  ngOnInit(): void {
    this.eventManager.addGlobalEventListener('window', 'devtoolschange', (e: DevToolsChange) => {
      const isOpen: boolean = e.detail.isOpen;
      if (isOpen === true) {
        this.devtoolsChecked$.next();
        console.log('console is open');
      }
    });
  }
}
