import {
  HttpClient
} from '@angular/common/http';
import {
  Component,
  Inject,
  OnInit
} from '@angular/core';
import {
  MatDialog, MAT_DIALOG_DATA
} from '@angular/material/dialog';
import {
  EmployexeService
} from 'src/app/employexe.service';
import { NewEmployeComponent } from '../new-employe/new-employe.component';
import { Personne } from '../../Personne'
import { MatTableDataSource } from '@angular/material/table';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ShowSheetEmployeComponent } from '../show-sheet-employe/show-sheet-employe.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  action: string;
}


@Component({
  selector: 'app-list-employe',
  templateUrl: './list-employe.component.html',
  styleUrls: ['./list-employe.component.scss']
})
export class ListEmployeComponent implements OnInit {
  items: Personne[] = null;
  person : Personne ;
  selected_item: any;
  title = 'hrapp';
  select_item: any;
  employee_item: any;
  user = {
    firstname: 'Souleman',
    lastname: 'DEMBELE',
    phone_number: '+221778580717'
  };

  ELEMENT_DATA: Personne[] = null;//[{}];
  dataSource: MatTableDataSource<Personne>;
  displayedColumns: string[] = ['rn', 'empno', 'ename', 'hiredate', 'job', 'mgr','sal', 'comm'];
  

  constructor(private http: HttpClient,
    private empserv: EmployexeService,
    private dialog: MatDialog,
    private bottomSheet: MatBottomSheet) {}

  openDialog(): void {
    
    this.person = {
      rn : this.items[1].rn,
      empno : this.items[1].empno,
      ename : this.items[1].ename,
      hiredate : this.items[1].hiredate,
      job : this.items[1].job,
      mgr : this.items[1].mgr,
      sal : this.items[1].sal,
      comm : this.items[1].comm,
  };

    const dialogRef = this.dialog.open(NewEmployeComponent, {
      width: '500px',
      data: this.person
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit(): void {

    /*this.http.get(this.heroesUrl).subscribe(data => {
      this.employee_item = data;
      this.items = this.employee_item.items
    });*/
    // Methode avec une promesse

    this.empserv.getListOfEmployees().then(data => {
      //console.log(data);
      this.employee_item = data;
      this.items = this.employee_item.items
      this.dataSource = new MatTableDataSource(this.items);
      //console.log(this.items);
      
    });


    // Methode avec un observable
    /*this.items = this.empserv.getListOfEmployees1().subscribe(data => {
      console.log(data);
      this.employee_item = data;
      this.items = this.employee_item.items
    });*/

    // Methode avec un observable
    /*this.items = this.empserv.getListOfEmployees3().subscribe(data => {
      console.log(data);
      this.employee_item = data;
      this.items = this.employee_item.items
    });*/


  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getEmpDetail(id): void {
    this.empserv.getEmpDetail(id).then(data => {
      console.log('id = ' + id);
      this.select_item = data;
      console.log(this.select_item);

    });
  }

  openBottomSheet(p_name){
    const index = this.items.findIndex(p => p.rn === p_name);
    if (index !== -1){ 
      this.person = {
        rn : this.items[index].rn,
        empno : this.items[index].empno,
        ename : this.items[index].ename,
        hiredate : this.items[index].hiredate,
        job : this.items[index].job,
        mgr : this.items[index].mgr,
        sal : this.items[index].sal,
        comm : this.items[index].comm,
    };
  }

    this.bottomSheet.open(ShowSheetEmployeComponent,{
      data: this.person,
    });
  }

}
