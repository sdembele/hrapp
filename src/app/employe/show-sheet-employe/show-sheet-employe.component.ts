import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { Personne } from 'src/app/Personne';

@Component({
  selector: 'app-show-sheet-employe',
  templateUrl: './show-sheet-employe.component.html',
  styleUrls: ['./show-sheet-employe.component.scss']
})
export class ShowSheetEmployeComponent implements OnInit {

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: Personne) { }

  ngOnInit(): void {    
  }

}
