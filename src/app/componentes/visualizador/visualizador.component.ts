import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-visualizador',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './visualizador.component.html',
  styleUrls: ['./visualizador.component.css']
})
export class VisualizadorComponent {
  @Input() data: any;
  @Input() contrasenaIngresada: string = '';
}
