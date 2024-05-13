const array = ["Daniel Cufos", "hamburguesa", "papas"];

function procesarPedido (pedidos) {
  // codigo

  const nombreCliente = pedidos.shift();
  const bebida = "cocacola";
  pedidos.unshify("bebida");
  pedidos.push(nombreCliente);
  return pedidos;
}
console.log(procesarPedido(array));


