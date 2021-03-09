import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Personne } from 'src/app/Personne';
import {MatSnackBar, MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';


@Component({
  selector: 'app-new-employe',
  templateUrl: './new-employe.component.html',
  styleUrls: ['./new-employe.component.scss']
})
export class NewEmployeComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data : Personne,
    private snackBar : MatSnackBar,
    public dialogRef : MatDialogRef<NewEmployeComponent>
  ) { }

  ngOnInit(): void {
  }

  onNoClick(){
    console.log(this.data.rn);
    let snackBarRef = this.snackBar.open('Message archived','OK');
    this.dialogRef.close()
  }

}
