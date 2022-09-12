import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


export interface Persona {
  id: string;
  nombre: string;
  paterno: string;
  materno: string;
  curp: string;
  sexo: string;
  direccion: string;
  contacto: string;
}

@Injectable({
  providedIn: 'root'
})





@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  personas:Persona[]=[
    {id: '1', nombre: 'Joselo', paterno: 'Moreno', materno: 'Rodriguez', curp: 'Mor97987fgfg', sexo: 'H', direccion: 'Puentecillas', contacto: 'Juan'},
    {id: '1', nombre: 'Pedro', paterno: 'Perez', materno: 'Torres', curp: '8o7iu9hoib', sexo: 'H', direccion: 'Puentecillas', contacto: 'Juan'},
    {id: '1', nombre: 'Rodrigo', paterno: 'Mrtinez', materno: 'Mandujano', curp: 'Mor9oh', sexo: 'H', direccion: 'Puentecillas', contacto: 'Juan'},
    {id: '1', nombre: 'Fernando', paterno: 'Garcia', materno: 'Castillo', curp: 'n89o987hne987h', sexo: 'H', direccion: 'Puentecillas', contacto: 'Juan'},
    {id: '1', nombre: 'Araceli', paterno: 'Hernandez', materno: 'Ramirez', curp: '98nh9', sexo: 'M', direccion: 'Puentecillas', contacto: 'Juan'},
    {id: '1', nombre: 'Roberto', paterno: 'Blancas', materno: 'Estevez', curp: '3c3cr3ce', sexo: 'H', direccion: 'Puentecillas', contacto: 'Juan'}

  ]

  maestros : any= [
    {id: 1, curso: 'Español',nombre: 'Joselo'},
    {id: 1, curso: 'Hstoria',nombre: 'Pedro'},
    {id: 1, curso: 'Quimica',nombre: 'Francisco'}
  ]

  constructor() { }

  obtenerPersonas():Observable<Persona[]>{
    return of(this.personas);
  }

  obtenerMAestros(){
    return of(this.maestros)
  }
}
