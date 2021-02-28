import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  loginDetails! : FormGroup;
  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
    this.loginDetails = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  onSubmit(){
    const emailStored = "admin@ex.com";
    const passwordStored = "a";

    if(emailStored===this.loginDetails.controls.email.value && passwordStored===this.loginDetails.controls.password.value){
      this.router.navigate(['/medicine']);
    }
    else{
      const element: HTMLElement = document.getElementById('error-message') as HTMLElement
      element.innerHTML = 'Invalid username and PAssword';
    }
  }
}
