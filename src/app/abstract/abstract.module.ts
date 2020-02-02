import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatModule } from '../_app/mat.module';
import { AbstractRoutingModule } from './abstract-routing.module';
import { AbstractComponent } from './abstract.component';

@NgModule({
  declarations: [AbstractComponent],
  imports: [CommonModule, AbstractRoutingModule, MatModule],
})
export class AbstractModule {}
