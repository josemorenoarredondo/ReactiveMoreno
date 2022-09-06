import { Injectable } from '@angular/core';
import { Alumno } from '../model/Alumno';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  dataAlumnosPromise: Alumno[] = [
    { nombre: 'Rogelio', apellido: 'Rojas', edad: 19, perfil: 'QA', hobby: 'Basketball' },
    { nombre: 'Emmanuel', apellido: 'Ramirez', edad: 15, perfil: 'Estudiante', hobby: 'Video juegos' },
    { nombre: 'Ricardo', apellido: 'Rodriguez', edad: 25, perfil: 'Abogado', hobby: 'Rafting' },
  ];

  dataAlumnosObservable: Alumno[] = [
    { nombre: 'Fernando', apellido: 'Valadez', edad: 40, perfil: 'Fullstack developer', hobby: 'Camping' },
    { nombre: 'Ethan', apellido: 'Valadez', edad: 5, perfil: 'Estudiante', hobby: 'Video juegos' },
    { nombre: 'Ethan Fernando', apellido: 'Valadez', edad: 15, perfil: 'Estudiante', hobby: 'Video juegos' },
  ];


  alumnoObservable:  Observable<Alumno[]>;

  constructor() {
    this.alumnoObservable = new Observable<Alumno[]>((suscriptor) => {
      suscriptor.next(this.dataAlumnosObservable);

      setTimeout(() => {

        this.dataAlumnosObservable.push({ nombre: 'Raquel Eugenia', apellido: 'Coronel', edad: 40, perfil: 'Empresaria', hobby: 'Bailar' });
        this.dataAlumnosObservable.push({ nombre: 'Guadalupe', apellido: 'Valadez', edad: 60, perfil: 'Agricultor', hobby: 'Futbol' });

        suscriptor.next(this.dataAlumnosObservable);
      }, 2000);
    });
   }

  obtenerAlumnosConPromise() {
    return new Promise((resolve, reject) => {
      if (this.dataAlumnosPromise.length > 0) {
        resolve(this.dataAlumnosPromise);
      } else {
        reject({
          status: false,
          mensaje: "No se encontraron alumnos"
        });
      }
    });
  }

  obtenerAlumnosConObservable() {
    return this.alumnoObservable;
  }

  obtenerObservableAlumnosParaPipe() {
    return of(this.dataAlumnosObservable);
  }

}
