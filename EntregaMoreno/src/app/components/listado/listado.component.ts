import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, Subscription, from } from 'rxjs';

import { Alumno } from 'src/app/model/Alumno';
import { AlumnosService } from '../../services/alumnos.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit, OnDestroy {

  alumnosPromise: Alumno[] = [];
  alumnosObservable: Alumno[] = [];
  alumnosObservablePipe: Alumno[] = [];
  observableProcesado: boolean = false;
  promiseProcesada: boolean = false;

  alumnosSuscripcion!: Subscription;
  alumnos$: Observable<any>;

  constructor(private _alumnoService: AlumnosService) {
    this.alumnos$ = this._alumnoService.obtenerObservableAlumnosParaPipe();
  }

  ngOnInit(): void {}

  obtenerAlumnosObservable() {
      this.alumnosSuscripcion = this._alumnoService.obtenerAlumnosConObservable().subscribe((alumnos) => {
      console.log(alumnos);
        this.alumnosObservable = alumnos;
        this.promiseProcesada = false;
        this.observableProcesado = true;
    });
  }

  obtenerAlumnosPromise() {
    this._alumnoService.obtenerAlumnosConPromise().then((alumnos) => {
      this.alumnosPromise = alumnos as Alumno[];
      this.observableProcesado = false;
      this.promiseProcesada = true;
    }).catch((error) => {
      console.log(error);
    });
  }

  filtrarAlumnosObservablePipe() {
    this._alumnoService.obtenerObservableAlumnosParaPipe().pipe(
      map((alumnos: Alumno[]) => alumnos.filter(alumno => alumno.edad > 20))
    ).subscribe((alumnos) => {
      this.alumnosObservable = alumnos;
      console.log('desde la pipe: ', alumnos);
    });
  }

  ngOnDestroy(): void {
    this.alumnosSuscripcion.unsubscribe();
  }

}
