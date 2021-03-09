import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../security.component.scss'],
  encapsulation: ViewEncapsulation.None
})


export class LoginComponent implements OnInit {

  login : string;
  password : string;

  //data = User;

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.login = "Souleman";
    this.password = "123456";
  }

  loginClick()
  {
    console.log('Connecté');
    this.router.navigate(['/employe/list']);
  }

}
