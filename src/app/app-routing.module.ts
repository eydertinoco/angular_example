import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./module/home/home.component";

const routes: Routes = [];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(
    [
      {
        path: '',
        component: HomeComponent
      },
    ]
  )],
  exports: [RouterModule],
})
export class AppRoutingModule { }
