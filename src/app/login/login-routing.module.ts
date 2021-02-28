import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginUserComponent} from './login-user/login-user.component';
import {MedicineModule} from '../medicine/medicine.module';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

const routes: Routes = [
  {path: '', component: LoginUserComponent},
  {path:'updateprofile',component: UpdateProfileComponent},
  {
    path: 'medicine',  loadChildren: () => import(`../medicine/medicine.module`).then(m => m.MedicineModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
