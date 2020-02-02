import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatModule } from '../_app/mat.module';
import { DecoratorRoutingModule } from './decorator-routing.module';
import { DecoratorComponent } from './decorator.component';

@NgModule({
  declarations: [DecoratorComponent],
  imports: [CommonModule, DecoratorRoutingModule, MatModule],
})
export class DecoratorModule {}
