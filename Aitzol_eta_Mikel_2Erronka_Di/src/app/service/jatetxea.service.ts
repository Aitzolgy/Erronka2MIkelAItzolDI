import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jatetxea } from '../interfaces/jatetxea';

@Injectable({
  providedIn: 'root'
})
export class JatetxeaService {

  constructor(private http: HttpClient ) {


   }

   ngOnKaka(): void {
    this.http.get<Jatetxea[]>('http://localhost:3000/jatetxeak').subscribe((data: Jatetxea[]) => {
      console.log('Intentando imprimir los datos');
      console.log(data);
      this._jatetxeak = data;
      this.filteredJatexeakList = this._jatetxeak;
    });
  }



  private _jatetxeak: Jatetxea[] = [];
  private filteredJatexeakList: Jatetxea[] = [];




  get jatetxeak(): Jatetxea[] {
    return [...this._jatetxeak];
  }

  get filteredJatexe(): Jatetxea[] {
    return [...this.filteredJatexeakList];
  }



  filterByMunicipality(municipality: string) {
    if (municipality.length > 0) {
      this.filteredJatexeakList = this._jatetxeak.filter((jatetxea) =>
        jatetxea.municipality.toLowerCase().includes(municipality.toLowerCase())
      );
    } else {
      this.filteredJatexeakList = this._jatetxeak;
    }
    console.log(this.filteredJatexeakList.length);

  }

  filterByName(name: string): Jatetxea {

    const jetetxeFilt = this._jatetxeak.filter((jatetxea) =>
        jatetxea.documentName.toLowerCase().includes(name.toLowerCase())
      );
    return jetetxeFilt [0];
  }



}
