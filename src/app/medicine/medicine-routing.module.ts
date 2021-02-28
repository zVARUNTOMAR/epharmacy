import { NgModule } from '@angular/core';
import {AppRoutingModule} from '../app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { BuyMedicineComponent } from './buy-medicine/buy-medicine.component';
import {MedicineListComponent} from './medicine-list/medicine-list.component';
import { MedicineOptionsComponent } from './medicine-options/medicine-options.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SearchMedicinesComponent } from './search-medicines/search-medicines.component';
import {UpdateMedicineComponent} from './update-medicine/update-medicine.component';
import { BuyProductComponent } from './buy-product/buy-product.component';

const routes: Routes = [
  {path:"corona/updatemedicine",component: UpdateMedicineComponent},
  {path:'corona/searchmedicines',component:SearchMedicinesComponent},
  {path:'notfound',component:PagenotfoundComponent},
  {path:'',component:MedicineListComponent},
  {path:'corona',component:MedicineOptionsComponent},
  {path:'corona/addmedicine',component:AddMedicineComponent},
  {path:'corona/buymedicine',component:BuyMedicineComponent},
  {path:'corona/buyproduct/:id',component:BuyProductComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MedicineRoutingModule { }