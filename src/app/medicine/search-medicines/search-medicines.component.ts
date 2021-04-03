import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Event } from '@angular/router';
import { MedicineService } from 'src/app/shared/medicine.service';

@Component({
  selector: 'app-search-medicines',
  templateUrl: './search-medicines.component.html',
  styleUrls: ['./search-medicines.component.css']
})
export class SearchMedicinesComponent implements OnInit {

  searchDetails!:FormGroup;
  
  constructor(public service:MedicineService) { }

  ngOnInit(): void {
    this.searchDetails = new FormGroup({
      search : new FormControl()
    });
  }

  onSubmit(){
    console.log(this.searchDetails.controls.search.value);
    this.service.searchMedicinesRecord(this.searchDetails.controls.search.value);
  }
}
