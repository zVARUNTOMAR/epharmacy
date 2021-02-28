import { Injectable } from '@angular/core';
import {Medicine} from './medicine.model';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  medicine:Medicine = new Medicine();

  medicines! : Medicine[];
  searchMedicines!:Medicine[];
  
  constructor(private http:HttpClient) { }

  readonly Url = "https://localhost:44317/api/pharmacy/";

  addMedicine(medicine:Medicine){
      alert("New Medicine Added Successfully");
      return this.http.post(this.Url+'AddMedicines',medicine);
  }

  showMedicines(){
    this.http.get(this.Url+'showmedicines')
    .toPromise().then(res=>this.medicines = res as Medicine[]);
    // console.log(this.medicines);
  }

  searchMedicinesRecord(str :string){
    this.http.get(this.Url+'searchmedicines/'+str)
    .toPromise().then(res=>this.searchMedicines = res as Medicine[]);
    console.log(this.searchMedicines);
  }

  updateMedicine(medicine:Medicine){
    alert("Medicine Updated Successfully");
    console.log(this.medicine);
    return this.http.put(this.Url+'updateMedicines/'+this.medicine.medicineId,medicine);
}

  updateQuantity(medicine : Medicine){
    // alert("New Medicine Added Successfully");
    console.log(this.medicine);
    alert("Transaction Successfull");
    return this.http.put(this.Url+'updateMedicines/'+this.medicine.medicineId,this.medicine);
  }
}
