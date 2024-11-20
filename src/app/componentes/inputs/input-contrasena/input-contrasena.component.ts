import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-contrasena',
  templateUrl: './input-contrasena.component.html',
  styleUrls: ['./input-contrasena.component.css'],
  standalone: true,
})
export class InputContrasenaComponent {
  // Propiedad para vinculación de datos
  @Input() ngModel: string = '';
  
  // Emisor para el cambio del modelo
  @Output() ngModelChange: EventEmitter<string> = new EventEmitter<string>();

  /**
   * Maneja el evento de entrada y emite el nuevo valor.
   * @param event Evento de entrada del usuario.
   */
  onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.ngModelChange.emit(inputElement.value);
  }
}
