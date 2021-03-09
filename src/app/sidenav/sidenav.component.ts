import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  menu = [{name:"Employe", icon:"supervised_user_circle", lien:"employe/list"}, 
          {name:"Évaluation", icon:"note_alt", lien:"employe/list"},
          {name:"Notation", icon:"radar", lien:"employe/list"},
          {name:"Résultat", icon:"receipt_long", lien:"employe/list"}]

  constructor() { }

  ngOnInit(): void {
  }

}
