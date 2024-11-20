import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BotonAceptarComponent } from './componentes/botones/boton-aceptar/boton-aceptar.component';
import { BotonCancelarComponent } from './componentes/botones/boton-cancelar/boton-cancelar.component';
import { BotonPrimarioComponent } from './componentes/botones/boton-primario/boton-primario.component';
import { BotonSecundarioComponent } from './componentes/botones/boton-secundario/boton-secundario.component';
import { BotonModoOscuroComponent } from './componentes/botones/boton-modo-oscuro/boton-modo-oscuro.component';

import { InputContrasenaComponent } from './componentes/inputs/input-contrasena/input-contrasena.component';
import { InputEmailComponent } from './componentes/inputs/input-email/input-email.component';
import { InputTextoComponent } from './componentes/inputs/input-texto/input-texto.component';
import { VisualizadorComponent } from './componentes/visualizador/visualizador.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    BotonAceptarComponent,
    BotonCancelarComponent,
    BotonPrimarioComponent,
    BotonSecundarioComponent,
    BotonModoOscuroComponent, // Asegúrate de importar este componente
    InputContrasenaComponent,
    InputEmailComponent,
    InputTextoComponent,
    VisualizadorComponent,
  ],
})
export class AppComponent {
  formData = {
    text: '',
    email: '',
    contrasena: ''
  };

  mensaje: string = '';
  modoOscuro: boolean = false; // Inicialmente el modo oscuro está desactivado

  onClick(tipoBoton: string) {
    if (tipoBoton === 'aceptar') {
      this.contrasenaIngresada = this.formData.contrasena; // Guarda el valor de la contraseña
    }
    let mensaje = '';

    switch (tipoBoton) {
      case 'aceptar':
        //mensaje = 'Haz clickeado en el botón Aceptar';
        break;
      case 'cancelar':
        mensaje = 'Haz clickeado en el botón Cancelar';
        break;
      case 'primario':
        mensaje = 'Haz clickeado en el botón Primario';
        break;
      case 'secundario':
        mensaje = 'Haz clickeado en el botón Secundario';
        break;
      default:
        mensaje = 'Haz clickeado en un botón desconocido';
    }

    alert(mensaje);
  }

  toggleDarkMode() {
    this.modoOscuro = !this.modoOscuro; // Invierte el estado del modo oscuro
    document.body.classList.toggle('dark-mode'); // Agrega o quita la clase 'dark-mode' al body
  }
  contrasenaIngresada: string = '';
}
