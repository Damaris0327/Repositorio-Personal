// Clase Producto
class Producto {
    constructor(nombre, precio, cantidad) {
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = cantidad;
    }
  }
  
  // Clase CarritoDeCompras
  class CarritoDeCompras {
    constructor() {
      this.productos = [];
    }
  
    // Agregar producto
    agregarProducto(producto) {
      const index = this.productos.findIndex(p => p.nombre === producto.nombre);
      if (index !== -1) {
        this.productos[index].cantidad += producto.cantidad;
      } else {
        this.productos.push(producto);
      }
    }
  
    // Eliminar producto
    eliminarProducto(nombre) {
      this.productos = this.productos.filter(p => p.nombre !== nombre);
    }
  
    // Modificar producto
    modificarProducto(nombre, nuevoPrecio, nuevaCantidad) {
      const producto = this.productos.find(p => p.nombre === nombre);
      if (producto) {
        if (nuevoPrecio >= 0) producto.precio = nuevoPrecio;
        if (nuevaCantidad >= 0) producto.cantidad = nuevaCantidad;
      } else {
        console.error(`Producto ${nombre} no encontrado.`);
      }
    }
  
    // Aplicar descuento a un producto específico
    aplicarDescuento(nombre, porcentaje) {
      const producto = this.productos.find(p => p.nombre === nombre);
      if (producto && porcentaje >= 0 && porcentaje <= 100) {
        producto.precio -= producto.precio * (porcentaje / 100);
      } else {
        console.error(`Descuento inválido o producto ${nombre} no encontrado.`);
      }
    }
  
    // Generar resumen de la compra
    generarResumen() {
      let total = 0;
      console.log("Resumen de la compra:");
      this.productos.forEach(p => {
        const subtotal = p.precio * p.cantidad;
        total += subtotal;
        console.log(`${p.nombre}: Bs ${p.precio.toFixed(2)} x ${p.cantidad} = Bs ${subtotal.toFixed(2)}`);
      });
      console.log(`Total: Bs ${total.toFixed(2)}`);
    }
  }
  
  // Ejemplo de uso
  const carrito = new CarritoDeCompras();
  carrito.agregarProducto(new Producto("Laptop", 999, 1));
  carrito.agregarProducto(new Producto("Mouse", 20, 2));
  carrito.aplicarDescuento("Laptop", 10); 
  carrito.modificarProducto("Mouse", 18, 3); 
  carrito.generarResumen();
  carrito.eliminarProducto("Mouse"); 
  carrito.generarResumen();
  