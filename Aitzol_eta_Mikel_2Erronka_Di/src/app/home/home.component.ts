import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JatetxeaService } from '../service/jatetxea.service';
import { Jatetxea } from '../interfaces/jatetxea';
import { RouterOutlet, RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, NgxPaginationModule ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

public page: number | undefined ;
  constructor(private jatetxeService: JatetxeaService) {



  }


  filtratu(municipality: string) {
    this.jatetxeService.filterByMunicipality(municipality);
    this.page = 1;

  }

  get filteredJatetxeak(): Jatetxea[] {
    return this.jatetxeService.filteredJatexe;
  }
}
