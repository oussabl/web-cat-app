import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import {ProductsComponent} from "./components/products/products.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  {
    path : "products", component :ProductsComponent
  },
  {
    path : "", component :HomeComponent
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    declarations: [
        NavBarComponent
    ],
    exports: [RouterModule, NavBarComponent]
})
export class AppRoutingModule { }
