import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-boton-cancelar',
  templateUrl: './boton-cancelar.component.html',
  styleUrls: ['./boton-cancelar.component.css'],
  standalone: true,
  imports: [],
})
export class BotonCancelarComponent {
  @Output() clicked = new EventEmitter<void>();

  onClick(): void {
    this.clicked.emit();
  }
}
