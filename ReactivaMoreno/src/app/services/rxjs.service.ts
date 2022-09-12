import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {
  private observableMaestro: Observable<any>;

  constructor() { 
    this.observableMaestro =  new Observable<any>((suscriptor)=>{
      suscriptor.next([
        {nombre:'Francisco', apellido: 'Ramirez'}
      ]);
      suscriptor.next([
        {nombre:'Pedro', apellido: 'Mondragon'}
      ]);
      setTimeout(()=> {
        suscriptor.next([
          {nombre:'Armando', apellido: 'Torres'}
        ])
      },5000);

    });
  }

  obtenerMaestros(){
    return this.observableMaestro;
  }
}
