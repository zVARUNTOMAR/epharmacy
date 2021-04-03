import { Component, OnInit } from '@angular/core';
import { Medicine } from 'src/app/shared/medicine.model';
import { MedicineService } from 'src/app/shared/medicine.service';

@Component({
  selector: 'app-buy-medicine',
  templateUrl: './buy-medicine.component.html',
  styleUrls: ['./buy-medicine.component.css']
})
export class BuyMedicineComponent implements OnInit {

  constructor(public service:MedicineService) { }

  ngOnInit(): void {
    this.service.showMedicines();
  }
}
