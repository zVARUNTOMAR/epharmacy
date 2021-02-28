import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginUserComponent } from './login-user/login-user.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import {MedicineModule} from '../medicine/medicine.module';
import { Medicine } from '../shared/medicine.model';

// import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms'; 

@NgModule({
  declarations: [LoginUserComponent, UpdateProfileComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MedicineModule
  ]
})
export class LoginModule { }
