import { Component } from '@angular/core';

@Component({
  selector: 'app-vista-principal',
  templateUrl: './vista-principal.component.html',
  styleUrls: ['./vista-principal.component.scss']
})
export class VistaPrincipalComponent {

  persona = {
    nombre: '',
    correo: '',
    telf: '',
    fecha: '',
    nota: ''
  }

  enviar_formulario(){
    console.log(this.persona)
  }

}
