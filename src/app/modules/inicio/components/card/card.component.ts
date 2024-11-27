import { Component } from '@angular/core';
// IMPORTAMOS INTERFAZ
import { Entrenamiento } from 'src/app/models/entrenamiento';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
   // PROPIEDAD PÚBLICA (TIPO: ARRAY)
   public info: Entrenamiento[];
  
   constructor(){
     this.info = [
       {
         id: "",
         nombre: "",
         imagen: "https://acdn.mitiendanube.com/stores/002/458/854/products/palo-adidas-indoor-estro-1-hybraskini-7eccea957ddf78b32c17169179334417-320-0.webp",
         alt: ""
       },
       {
         id: "",
         nombre: "",
         imagen: "https://acdn.mitiendanube.com/stores/002/458/854/products/palo-adidas-indoor-estro-3-092b775dbe0834ce5417169218249709-320-0.webp",
         alt: ""
       },
       {
         id: "",
         nombre: "",
         imagen: "https://acdn.mitiendanube.com/stores/002/458/854/products/palo-adidas-indoor-chaosfury-hybraskini-236ab6782dbcb4916a17169174961533-320-0.webp",
         alt: ""
       }
     ]
   }
}
