import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css'],
  standalone: true,
  imports: []  // No necesitas importar nada aquí por ahora
})
export class BotonesComponent {
  @Output() buttonClicked = new EventEmitter<string>();
  @Output() darkModeToggled = new EventEmitter<boolean>();

  onClick(button: string) {
    this.buttonClicked.emit(button);
  }

  toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    this.darkModeToggled.emit(isDarkMode);
  }
}
