export class Mensagem {
    
    // constructor(texto='') {//Nao funciona no EDGE
    constructor(texto) {        
        
        this._texto = texto || '';
    }
    
    get texto() {
        
        return this._texto;
    }
    
    set texto(texto) {
        
        this._texto = texto;
    }
}