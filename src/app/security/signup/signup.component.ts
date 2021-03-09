import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss', '../security.component.scss']
})
export class SignupComponent implements OnInit {
  firstname : string = "Souleman";
  lastname : string = "DEMBELE";
  email : string = "dsouleman@gmail.com";
  number : string = "778580717";
  constructor() { }

  ngOnInit(): void {
    this.email = "dsouleman@gmail.com";
  }

}
