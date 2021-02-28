import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {MedicineService} from '../../shared/medicine.service';
import {Medicine} from '../../shared/medicine.model';
import {ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})
export class AddMedicineComponent implements OnInit {

  medicineDetails!:FormGroup;
  medicine!:Medicine;
  constructor(public service:MedicineService) { }

  ngOnInit(): void {
    this.medicineDetails = new FormGroup({
      medicineId: new FormControl(),
      medicineName : new FormControl(),
      quantity : new FormControl(),
      diseaseId : new FormControl()
    });
  }

  onSubmit(){
    console.log(this.medicineDetails);
    this.service.medicine.medicineId = 0;
    this.service.medicine.medicineName = this.medicineDetails.controls.medicineName.value;
    this.service.medicine.quantity = this.medicineDetails.controls.quantity.value;
    this.service.medicine.diseaseId = this.medicineDetails.controls.diseaseId.value;
    this.addMedicine(this.service.medicine);
  }


  addMedicine(medicine:Medicine){
    this.service.addMedicine(medicine).subscribe(res=>{
      this.medicineDetails.reset();
    },err=>{console.log(err);
    });
  }
}
