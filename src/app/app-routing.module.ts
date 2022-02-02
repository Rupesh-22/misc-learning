import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ErrorComponent } from './common/error/error.component';
import { EmutedComponent } from './encaptulation/emuted/emuted.component';
import { NoneComponent } from './encaptulation/none/none.component';
import { CanActive } from './guards/can-activate';
import { CanDeActive } from './guards/can-deactivate';
import { CanLoadChild } from './guards/can-load';
import { Resolver } from './guards/resolve';

const routes: Routes = [
  {
    path: "",
    component: AppComponent
  },
  {
    path: "none",
    component: NoneComponent,
    canDeactivate: [CanDeActive]
  },
  {
    path: "emuted",
    component: EmutedComponent,
    canDeactivate: [CanDeActive],
    resolve: {
      data: Resolver
    }
  },
  {
    path: "shared",
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    loadChildren: () => import("./shared/shared.module").then(m => m.SharedModule),
    canLoad: [CanLoadChild]
  },
  {
    path: "**",
    component: ErrorComponent,
    canActivate: [CanActive]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
