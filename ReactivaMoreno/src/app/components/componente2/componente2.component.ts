import { Component, OnInit } from '@angular/core';
import { PersonaService,Persona } from 'src/app/services/persona.service';
// import { PersonaService, Persona } from '../../services/persona.service';
import { filter,map, Observable, pipe  } from 'rxjs';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {
  personas: any;
  maestros: any;

  constructor(private personaService: PersonaService){}
    

  ngOnInit(): void {
    this.obtenerPersonas();
    this.obtenerMaestros();
  }

  obtenerPersonas() {
    this.personaService.obtenerPersonas().pipe(
      map((alumnos: Persona[]) => alumnos.filter(personas => personas.sexo === 'F'))
    ).subscribe((personas) => {
      this.personas = personas;
    })
  }

  obtenerMaestros(){
    this.maestros = this.personaService.obtenerMAestros()
  }

  ngOnDestroy(): void {
    this.personas.unsubscribe();
    this.maestros.unsubscribe();
  }
}
