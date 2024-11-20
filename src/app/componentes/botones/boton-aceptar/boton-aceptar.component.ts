import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-boton-aceptar',
  templateUrl: './boton-aceptar.component.html',
  styleUrls: ['./boton-aceptar.component.css'],
  standalone: true,
  imports: [],
})
export class BotonAceptarComponent {
  @Output() clicked = new EventEmitter<void>();

  onClick(): void {
    this.clicked.emit();
  }
}
