import Cl_Vendedores from "./Cl_Vendedores.js";
import Cl_Procesar from "./Cl_Procesar.js";

let vendedor1 = new Cl_Vendedores("Mary", 1, 150)
let vendedor2 = new Cl_Vendedores("Carlos", 2, 160)
let vendedor3 = new Cl_Vendedores("Jose", 1, 135)
let vendedor4 = new Cl_Vendedores("Pedro", 2, 75)

let Procesar = new Cl_Procesar()

Procesar.procesarVendedores(vendedor1)
Procesar.procesarVendedores(vendedor2)
Procesar.procesarVendedores(vendedor3)
Procesar.procesarVendedores(vendedor4)

let salida = document.getElementById("salida")

salida.innerHTML = "Monto total de las ventas de los vendedores tipo mayoristas: "+Procesar.devolverAcumVentasMay();
salida.innerHTML+= "<br>Monto mayor venta realizada por los vendedores tipo mayorista: "+Procesar.devolverMontoMayor();