import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActiveChild } from '../guards/can-active-child';
import { CanDeActive } from '../guards/can-deactivate';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { SharedComponent } from './shared.component';

const routes: Routes = [
  {
    path: "",
    component: SharedComponent,
    canActivateChild:[CanActiveChild],
    children: [
      {
        path: "", redirectTo: "first", pathMatch: "full"
      },
      {
        path: "first", component: FirstComponent,
        canDeactivate:[CanDeActive]
      },
      {
        path: "second", component: SecondComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
