import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'login',  loadChildren: () => import(`./login/login.module`).then(m => m.LoginModule) },
  {path: 'medicine',  loadChildren: () => import(`./medicine/medicine.module`).then(m => m.MedicineModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
