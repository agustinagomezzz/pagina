import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';


// Guardián para la vista de Administrador
import { rutaProtegidaGuard } from './guards/ruta-protegida.guard';
import { rutaProtegidaCarritoGuard } from './guards/ruta-protegida-carrito.guard';

const routes: Routes = [
  // RUTA INICIAL / PRINCIPAL AL COMPONENTE
  {
    path:"",component: InicioComponent
  },
  // CARGA PEREZOSA -> RUTA AL MÓDULO INICIO
  // loadChildren: Indica que será ruta hija del módulo raíz
  // ()=>: Función flecha que importará la dirección del módulo
  // .then: Promesa que nos devolerá un valor resuelto o rechazado
  {
    path:"",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
  },
  {
    path:"",loadChildren:()=>import('./modules/producto/producto.module').then(m=>m.ProductoModule)
  },
  {
    path:"",loadChildren:()=>import('./modules/autentificacion/autentificacion.module').then(m=>m.AutentificacionModule)
  },
  {
    path:"",loadChildren:()=>import('./modules/carrito/carrito.module').then(m=>m.CarritoModule)
  },
  {
    path:"",loadChildren:()=>import('./modules/admin/admin.module').then(m=>m.AdminModule),
    // Definimos al guardian que proteja la ruta de Admin y que espere un rol de tipo "admin"
    canActivate: [ rutaProtegidaGuard ], data: { role: 'admin' }
  },
  {
    path:"", loadChildren:()=> import('./modules/carrito/carrito.module').then(m => m.CarritoModule),
    //deifinirle al guardian que proteja la ruta de ADMIN y que espere un rol de tipo ADMIN
    canActivate:[rutaProtegidaCarritoGuard],data:{role:'usuario'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }