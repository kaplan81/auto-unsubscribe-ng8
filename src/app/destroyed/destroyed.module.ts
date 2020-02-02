import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatModule } from '../_app/mat.module';
import { DestroyedRoutingModule } from './destroyed-routing.module';
import { DestroyedComponent } from './destroyed.component';

@NgModule({
  declarations: [DestroyedComponent],
  imports: [CommonModule, DestroyedRoutingModule, MatModule],
})
export class DestroyedModule {}
