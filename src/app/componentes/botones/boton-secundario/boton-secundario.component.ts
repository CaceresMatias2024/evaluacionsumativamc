import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boton-secundario',
  templateUrl: './boton-secundario.component.html',
  styleUrls: ['./boton-secundario.component.css'],
  standalone: true
})
export class BotonSecundarioComponent {
  @Output() clicked = new EventEmitter<void>();

  onClick(): void {
    this.clicked.emit();
  }
}
