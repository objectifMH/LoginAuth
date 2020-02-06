import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) { }





  ngOnInit() {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required, Validators.minLength(3)]],
      mdp: ['', [Validators.required, Validators.minLength(5)]]

    })
  }


  onClick() {
    console.log(this.loginForm.value);
    //console.log("mdp :" + this.loginForm.get('mdp').value);
  }

  // convenience getter for easy access to form fields
  get f() {
    //console.log(this.loginForm.controls);
    return this.loginForm.controls;
  }
}
