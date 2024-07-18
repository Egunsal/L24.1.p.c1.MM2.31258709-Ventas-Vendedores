export default class Cl_Vendedores{
    constructor(n, t, m){
        this.nombre = n;
        this.tipo = t;
        this.monto = m;
    }
    set nombre(n){
        this._nombre= +n;
    }
    set tipo(t){
        this._tipo = +t;
    }
    set monto(m){
        this._monto = +m;
    }
    get nombre(){
        return this._nombre;
    }
    get tipo(){
        return this._tipo;
    }
    get monto(){
        return this._monto;
    }
    
}