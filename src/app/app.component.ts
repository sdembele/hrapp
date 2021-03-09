import {
  HttpClient
} from '@angular/common/http';
import {
  Component
} from '@angular/core';
import {
  EmployexeService
} from './employexe.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'hrapp';
  select_item: any;
  employee_item: any;
  user = {
    firstname: 'Souleman',
    lastname: 'DEMBELE',
    phone_number: '+221778580717'
  };

  items: any;
  /*[ {id:1,name:'Souleman DEMBELE'},
            {id:2,name:'Moussa DEMBELE', phone:'23213'},
            {id:3,name:'Moctar DEMBELE'},
            {id:4,name:'Tahirou DEMBELE'},
            {id:5,name:'Aminata DEMBELE'},
            {id:6,name:'Madina DEMBELE'},
            {id:7,name:'Roukiatou DEMBELE'},
            {id:8,name:'Adama DEMBELE'},
            {id:9,name:'Aissata DEMBELE'},
            {id:10,name:'Abdoulate DEMBELE'}];*/



  ELEMENT_DATA: PeriodicElement[] = [{
      position: 1,
      name: 'Hydrogen',
      weight: 1.0079,
      symbol: 'H'
    },
    {
      position: 2,
      name: 'Helium',
      weight: 4.0026,
      symbol: 'He'
    },
    {
      position: 3,
      name: 'Lithium',
      weight: 6.941,
      symbol: 'Li'
    },
    {
      position: 4,
      name: 'Beryllium',
      weight: 9.0122,
      symbol: 'Be'
    },
    {
      position: 5,
      name: 'Boron',
      weight: 10.811,
      symbol: 'B'
    },
    {
      position: 6,
      name: 'Carbon',
      weight: 12.0107,
      symbol: 'C'
    },
    {
      position: 7,
      name: 'Nitrogen',
      weight: 14.0067,
      symbol: 'N'
    },
    {
      position: 8,
      name: 'Oxygen',
      weight: 15.9994,
      symbol: 'O'
    },
    {
      position: 9,
      name: 'Fluorine',
      weight: 18.9984,
      symbol: 'F'
    },
    {
      position: 10,
      name: 'Neon',
      weight: 20.1797,
      symbol: 'Ne'
    }
  ];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = this.ELEMENT_DATA;




  constructor(private http: HttpClient, private empserv: EmployexeService) {}

  ngOnInit(): void {

    /*this.http.get(this.heroesUrl).subscribe(data => {
      this.employee_item = data;
      this.items = this.employee_item.items
    });*/
    // Methode avec une promesse

    /*this.empserv.getListOfEmployees().then(data => {
      console.log(data);
      this.employee_item = data;
      this.items = this.employee_item.items
    });*/


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
  getEmpDetail(id): void {
    this.empserv.getEmpDetail(id).then(data => {
      console.log('id = ' + id);
      this.select_item = data;
      console.log(this.select_item);

    });
  }
}
