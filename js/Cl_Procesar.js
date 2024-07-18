export default class Cl_Procesar{
    constructor(){
        this.acumVentasMay= 0;
        this.mayor = 0;
        this.montoMayor = 0;
    }
    procesarVendedores(ve){
        if(ve.tipo == 1){
            this.acumVentasMay+=ve.monto;}
            if(ve.tipo == 1 && ve.monto > this.mayor){
              this.mayor = ve.monto;
            this.montoMayor=ve.monto;}
    }
    devolverMontoMayor(){
        return this.montoMayor
    }
    devolverAcumVentasMay(){
        return this.acumVentasMay;
    }
}