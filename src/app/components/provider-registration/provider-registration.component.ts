import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-provider-registration',
  templateUrl: './provider-registration.component.html',
  styleUrls: ['./provider-registration.component.scss']
})
export class ProviderRegistrationComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  providerregForm: FormGroup = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required],[Validators.email]],
    dob: ['', [Validators.required]],
    role: ['', [Validators.required]]
  })

  get f() { return this.providerregForm.controls; }

  
  onSubmit(){
    
  }

}
