import { Inject, Injectable } from '@angular/core';
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DevToolsOrientation } from './devtools.model';
import { WINDOW } from './window.service';

@Injectable({
  providedIn: 'root',
})
export class DevToolsService {
  static threshold = 160;
  checkOnDevTools$ = interval(500).pipe(tap(() => this.setDevTools()));
  private heightThreshold =
    this.window.outerHeight - this.window.innerHeight > DevToolsService.threshold;
  private isOpen = false;
  private orientation: DevToolsOrientation;
  private widthThreshold =
    this.window.outerWidth - this.window.innerWidth > DevToolsService.threshold;

  constructor(@Inject(WINDOW) private window: any) {
    this.orientation = this.widthThreshold ? 'vertical' : 'horizontal';
  }

  private emitDevToolsChange(isOpen: boolean, orientation: DevToolsOrientation): void {
    this.window.dispatchEvent(
      new CustomEvent('devtoolschange', {
        detail: {
          isOpen,
          orientation,
        },
      }),
    );
  }

  private setDevTools(): void {
    this.window.devtools = { isOpen: this.isOpen, orientation: this.orientation };
    if (
      !(this.heightThreshold && this.widthThreshold) &&
      ((this.window.Firebug &&
        this.window.Firebug.chrome &&
        this.window.Firebug.chrome.isInitialized) ||
        this.widthThreshold ||
        this.heightThreshold)
    ) {
      if (!this.window.devtools.isOpen || this.window.devtools.orientation !== this.orientation) {
        this.emitDevToolsChange(true, this.orientation);
      }
      this.window.devtools.isOpen = true;
      this.window.devtools.orientation = this.orientation;
    } else {
      if (this.window.devtools.isOpen) {
        this.emitDevToolsChange(false, undefined);
      }
      this.window.devtools.isOpen = false;
      this.window.devtools.orientation = undefined;
    }
  }
}
