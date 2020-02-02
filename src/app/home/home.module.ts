import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatModule } from '../_app/mat.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, MatModule],
})
export class HomeModule {}
