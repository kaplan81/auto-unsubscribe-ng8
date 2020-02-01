import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { Breakpoint } from './breakpoint.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  static mdMaxQuery = `(max-width: ${Breakpoint.MD - 1}px)`;
  @ViewChild(MatSidenav, { static: false }) sidenav: MatSidenav;
  mobileQuery$: Observable<BreakpointState> = this.breakpointObserver.observe(
    AppComponent.mdMaxQuery,
  );
  title = 'Auto Unsubscribe Angular 8';

  constructor(private breakpointObserver: BreakpointObserver) {}
}
