export class View {//export possibilita outras classes terem acesso a ela, mesmo se foi carregado o script antes
    
    constructor(elemento) {
        
        this._elemento = elemento;
    }
    
    template() {
        
        throw new Error('O método template deve ser implementado');
    }
    
    update(model) {
        
        this._elemento.innerHTML = this.template(model);
    }
}