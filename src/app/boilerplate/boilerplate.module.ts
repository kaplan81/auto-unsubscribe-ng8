import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatModule } from '../_app/mat.module';
import { BoilerplateRoutingModule } from './boilerplate-routing.module';
import { BoilerplateComponent } from './boilerplate.component';

@NgModule({
  declarations: [BoilerplateComponent],
  imports: [CommonModule, BoilerplateRoutingModule, MatModule],
})
export class BoilerplateModule {}
