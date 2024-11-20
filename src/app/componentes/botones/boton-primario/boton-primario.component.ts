import { Component } from '@angular/core';

@Component({
  selector: 'app-boton-primario',
  templateUrl: './boton-primario.component.html',
  styleUrls: ['./boton-primario.component.css'],
  standalone: true
})
export class BotonPrimarioComponent {
  onClick() {
    console.log('Botón Primario Clickeado');
  }
}
