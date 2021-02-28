import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Medicine } from 'src/app/shared/medicine.model';
import { MedicineService } from 'src/app/shared/medicine.service';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {

  buyProduct!:FormGroup;
  medicine!:Medicine;
  medicines!:Medicine[];
  id !: number;
  constructor(
    public service:MedicineService,
    private _activatedroute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.buyProduct = new FormGroup({
      medicineId : new FormControl(),
      medicineName : new FormControl(),
      quantity : new FormControl(),
      diseaseId : new FormControl()
    });
    this._activatedroute.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    })
  }
  onSubmit(){
    console.log(this.buyProduct);
    console.log(this.buyProduct.controls.medicineId.value);
    this.service.medicine.medicineId = this.id;
    this.service.medicine.medicineName = "p";
    this.service.medicine.quantity = this.buyProduct.controls.quantity.value;
    this.service.medicine.diseaseId = 1;
    this.updateQuantity(this.service.medicine);
  }

  updateQuantity(medicine:Medicine){
    this.service.updateQuantity(medicine).subscribe(res=>{
      this.buyProduct.reset();
    },err=>{console.log(err);
    });
  }
}
