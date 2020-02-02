import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatModule } from '../_app/mat.module';
import { MixinRoutingModule } from './mixin-routing.module';
import { MixinComponent } from './mixin.component';

@NgModule({
  declarations: [MixinComponent],
  imports: [CommonModule, MixinRoutingModule, MatModule],
})
export class MixinModule {}
