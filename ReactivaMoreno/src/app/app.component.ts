import { Component } from '@angular/core';
import { PersonaService } from './services/persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='ProgramacionReactiva'

  // personas: any[] = [];

  // constructor(
  //   private PersonaService: PersonaService
  // ){
  //   this.personas=PersonaService.obtenerPersonas();
  // }
}
