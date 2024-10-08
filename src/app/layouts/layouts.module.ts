import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
//import { SharedModule } from '../shared/shared.module';
import { DashboardModule } from '../features/dashboard/dashboard.module';
@NgModule({

  imports: [
    CommonModule,
    RouterModule,
    //SharedModule,
    DashboardModule
  ],

})
export class LayoutsModule { }
