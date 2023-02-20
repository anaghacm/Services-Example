import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registrationForm!:FormGroup

  constructor(private fb:FormBuilder, private ds:DataServiceService, private router:Router) { }

  ngOnInit(): void {
    this.registrationForm=this.fb.group({
      username:['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      password: ['', [Validators.required]]
    })
  }

  register(){
    if(this.registrationForm.valid){
      let username=this.registrationForm.value.username;
      let email= this.registrationForm.value.email;
      let password= this.registrationForm.value.password;
      this.ds.setData(username, email, password);
      this.router.navigateByUrl('dashboard');
    }
  }
}
