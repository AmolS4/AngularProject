import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import {UserService} from '../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import {AuthenticationService} from '../../services/AuthService'
  
import {UserService} from '../../services/user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide: boolean = false;
  loading = false;
    submitted = false;

  constructor(private fb: FormBuilder,
    private authServ : AuthenticationService,
     private service : UserService,
     private router : Router,
     private route : ActivatedRoute) {
  }
 

  ngOnInit() {
  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  get f() { return this.loginForm.controls; }

  onSubmit() {
     // this.submitted = true;
   // debugger;
      // reset alerts on submit
     // this.alertService.clear();
     debugger;
     console.log("Inside the On submit");
      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }
      console.log(this.loginForm.value);
      this.loading = true;
      this.authServ.login(this.f.email.value, this.f.password.value)
          .subscribe(data=>{
             // localStorage.setItem('isLoggedin', 'true');
                console.log(data);
                this.router.navigate(['layout/dashboard']);
              },
              error => {
                console.log(error);
                 // this.alertService.error(error);
                 this.router.navigate(['']);
                 // this.loading = false;
              });
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
}

}
