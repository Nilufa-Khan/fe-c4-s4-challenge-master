import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder,  Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'] 
})
export class RegistrationComponent implements OnInit {

  constructor(private fb:FormBuilder,private _snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  registrationForm = this.fb.group({
    firstName: ['',Validators.required],
    lastName: ['',[Validators.required,Validators.minLength(2)]],
    email: ['',[Validators.required,Validators.email]],
    password: ['',[Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
    confirmPassword: ['',[Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
    age: ['',[Validators.required,Validators.min(18)]],
    phoneNumber: ['',[Validators.required,Validators.pattern(/^[789]\d{9,9}$/)]],
    address : this.fb.group({
      street: ['',Validators.required],
      city: ['',Validators.required],
      state: ['',Validators.required],
      zipCode: ['',[Validators.required,Validators.pattern(/^\d{5}$/)]]
    })
  },{validators: [this.mustMatchValidator] });

  get firstName() { return this.registrationForm.get("firstName") }
  get lastName() { return this.registrationForm.get("lastName") }
  get email() { return this.registrationForm.get("email") }
  get password() { return this.registrationForm.get("password") }
  get confirmPassword() { return this.registrationForm.get("confirmPassword") }
  get age() { return this.registrationForm.get("age") }
  get phoneNumber() { return this.registrationForm.get("phoneNumber") }
  

  get street() { return this.registrationForm.get("address")?.get("street") }
  get city() { return this.registrationForm.get("address")?.get("city") }
  get state() { return this.registrationForm.get("address")?.get("state") }
  get zipCode() { return this.registrationForm.get("address")?.get("zipCode") }

  checkIfGuestEmailsAreValid(c: AbstractControl) {
    if (c.value !== '') {
      const emailString = c.value;
      
      const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      const anyInvalidEmail = emailString.every((e: string) => e.match(emailRegex) !== null);
      if (!anyInvalidEmail) {
        return { checkIfGuestEmailsAreValid: true }
      }
    }
    return null;
  }

  mustMatchValidator(fg: AbstractControl) {
    const passwordValue = fg.get("password")?.value;
    const confirmPasswordValue = fg.get("confirmPassword")?.value;
    if (!passwordValue || !confirmPasswordValue) {
      return null;
    }
    if (passwordValue != confirmPasswordValue) {
        return { mustMatch: false }
    }
    return null;
  }

  onSubmit(){
    
    this._snackBar.open('Congrats, you have submitted the form!!', 'success', {​
      duration: 5000,​
       panelClass: ['mat-toolbar', 'mat-primary']​
     }) 
  }
}
