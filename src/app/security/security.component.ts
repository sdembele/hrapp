import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})


export class SecurityComponent implements OnInit {

  login : string;
  password : string;

  //data = User;

  constructor() { }

  ngOnInit(): void {
    this.login = "Souleman";
    this.password = "123456";
  }

  loginClick()
  {
    console.log('Connecté');
  }

}
