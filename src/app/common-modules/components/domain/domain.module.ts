import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { DomainComponent } from './domain.component';

const routes: Routes = [
  {
    path:'',
    component:DomainComponent
  }
];
@NgModule({
  declarations: [DomainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DomainModule { }
