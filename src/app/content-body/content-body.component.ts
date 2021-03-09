import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmployexeService } from '../employexe.service';

@Component({
  selector: 'app-content-body',
  templateUrl: './content-body.component.html',
  styleUrls: ['./content-body.component.scss']
})
export class ContentBodyComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

}
