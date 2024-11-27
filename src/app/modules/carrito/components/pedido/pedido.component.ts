import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/models/pedido';
import { CarritoService } from '../../services/carrito.service';
import { AuthService } from 'src/app/modules/autentificacion/services/auth.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  coleccionPedidos: Pedido[] = [];

  constructor(
    public servicioCarrito: CarritoService,
    public servicioAuth: AuthService
  ) {}

  ngOnInit() {
    this.servicioAuth.obtenerUid().then(uid => {
      if (uid) {
        this.servicioAuth.obtenerRol(uid).subscribe(
          (rol:any) => {
            if (rol === 'usuario') {
              // Inicializamos el carrito
              this.servicioCarrito.iniciarCarrito();

              this.servicioCarrito.obtenerCarrito().subscribe(
                (productos) => {
                  this.coleccionPedidos = productos;
                },
                (error) => {
                  console.error('Error al obtener el carrito:', error);
                }
              );
            } else {
              console.error('El rol no es usuario');
            }
          },
          (error:any) => {
            console.error('Error al obtener el rol:', error);
          }
        );
      }
    });
  }

  quitarPedido(pedido: Pedido) {
    this.servicioCarrito.borrarPedido(pedido);
  }
}
