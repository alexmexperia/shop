import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent implements OnInit {
  form!: FormGroup
  submited: boolean = false


  constructor(
    public auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
     })
  }
  

  
  submit() { 
    if ( this.form.invalid) {
      return;
    }

    this.submited = true

    const user = {
      email: this.form.value.email,
      password: this.form.value.password,
      returnSecureToken: true
    }

    this.auth.login(user).subscribe( res => {
      this.form.reset
      this.router.navigate(['/admin','dashboard'])
      this.submited = false
    }, ()=>{
      this.submited = false
    })
    
  }


}




