import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// TODAS LAS VISTAS DEL MÓDULO PRODUCTO
import { ProductoComponent } from './pages/producto/producto.component';
import { EntrenamientoComponent } from './pages/entrenamiento/entrenamiento.component';
import { IndumentariaComponent } from './pages/indumentaria/indumentaria.component';
import { PalosComponent } from './pages/palos/palos.component';

const routes: Routes = [
  {
    path:"producto",component:ProductoComponent
  },
  {
    path:"entrenamiento",component:EntrenamientoComponent
  },
  {
    path:"indumentaria",component:IndumentariaComponent
  },
  {
    path:"palos",component:PalosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
