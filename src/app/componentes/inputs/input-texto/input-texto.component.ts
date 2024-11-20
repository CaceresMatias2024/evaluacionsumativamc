import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Asegúrate de importar FormsModule

@Component({
  selector: 'app-input-texto',
  standalone: true, 
  imports: [FormsModule],  // Agrega FormsModule aquí
  templateUrl: './input-texto.component.html',
  styleUrls: ['./input-texto.component.css']
})
export class InputTextoComponent {
  text: string = '';  // Aquí tendrás el valor del input
}
