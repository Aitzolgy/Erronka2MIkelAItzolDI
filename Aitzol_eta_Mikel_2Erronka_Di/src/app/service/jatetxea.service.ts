import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jatetxea } from '../interfaces/jatetxea';
@Injectable({
  providedIn: 'root'
})
export class JatetxeaService {

  constructor(private http: HttpClient ) { }

  getJatetxeak(){

    return this.http.get<Jatetxea[]>('http://localhost:3000/jatetxeak');
  }

  private _jatetxeak: Jatetxea[] = [];

  printJatetxeak(){

    this.getJatetxeak().subscribe({
    next: (jatetxeak) => {
      this._jatetxeak = jatetxeak;
      console.log(this._jatetxeak)
    },
    error: (err) => console.error('Error holalola', err),s
  })

  }

  asd(){
    console.log(this._jatetxeak)
  }
}
