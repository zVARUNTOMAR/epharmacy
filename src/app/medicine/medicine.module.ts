import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicineRoutingModule } from './medicine-routing.module';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatButtonModule} from '@angular/material/button';
import { MedicineOptionsComponent } from './medicine-options/medicine-options.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BuyMedicineComponent } from './buy-medicine/buy-medicine.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SearchMedicinesComponent } from './search-medicines/search-medicines.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { BuyProductComponent } from './buy-product/buy-product.component';

@NgModule({
  declarations: [MedicineListComponent, HeaderComponent, FooterComponent, MedicineOptionsComponent, AddMedicineComponent, BuyMedicineComponent, PagenotfoundComponent, SearchMedicinesComponent, UpdateMedicineComponent, BuyProductComponent],
  imports: [
    CommonModule,
    MedicineRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class MedicineModule { }
