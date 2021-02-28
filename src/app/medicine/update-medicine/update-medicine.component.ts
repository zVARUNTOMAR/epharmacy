import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Medicine } from 'src/app/shared/medicine.model';
import { MedicineService } from 'src/app/shared/medicine.service';

@Component({
  selector: 'app-update-medicine',
  templateUrl: './update-medicine.component.html',
  styleUrls: ['./update-medicine.component.css']
})
export class UpdateMedicineComponent implements OnInit {

  medicineDetails!:FormGroup;
  medicine!:Medicine;

  constructor(public service : MedicineService) { }

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
    this.service.medicine.medicineId = this.medicineDetails.controls.medicineId.value;
    this.service.medicine.medicineName = this.medicineDetails.controls.medicineName.value;
    this.service.medicine.quantity = this.medicineDetails.controls.quantity.value;
    this.service.medicine.diseaseId = this.medicineDetails.controls.diseaseId.value;
    this.updateMedicine(this.service.medicine);
  }

  updateMedicine(medicine:Medicine){
    this.service.updateMedicine(medicine).subscribe(res=>{
      this.medicineDetails.reset();
    },err=>{console.log(err);
    });
  }
}
