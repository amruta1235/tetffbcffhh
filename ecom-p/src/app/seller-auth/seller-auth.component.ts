import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
   title = 'Form Control';
loginForm= new FormGroup({
  user: new FormControl(''),
  password: new FormControl(''),
  email:new FormControl(''),
})
  loginUser()
  {
    console.warn(this.loginForm.value);
  }
  
}
