import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jatetxea } from '../interfaces/jatetxea';
@Injectable({
  providedIn: 'root'
})
export class JatetxeaService {

  constructor(private http: HttpClient ) {
     this.uploadJatetxeak();
     setTimeout(() => {},1000);
   }

  getJatetxeak(){

    return this.http.get<Jatetxea[]>('http://localhost:3000/jatetxeak');
  }

  private _jatetxeak: Jatetxea[] = [];

  get jatetxeak(){
    return [...this._jatetxeak];
  }

  uploadJatetxeak(){

    this.getJatetxeak().subscribe({
    next: (jatetxeak) => {
      this._jatetxeak = jatetxeak;
    },
    error: (err) => console.error('Error holalola', err)
  })

  }


}
