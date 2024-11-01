import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Jatetxea } from '../interfaces/jatetxea';
import {MatCardModule} from '@angular/material/card';
import {MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule,MatTableModule,MatPaginator,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  static ELEMENT_DATA: PeriodicElement[];

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 12, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 13, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 14, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 15, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 16, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 17, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 18, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 19, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 20, name: 'Neon', weight: 20.1797, symbol: 'Ne'}
];


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'table-pagination-example',
  styleUrl: 'home.component.css',
  templateUrl: 'home.component.html',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
})
export class TablePaginationExample implements AfterViewInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}


