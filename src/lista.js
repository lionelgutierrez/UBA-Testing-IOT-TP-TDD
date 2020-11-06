module.exports = class Lista {
    #elementos;
    constructor(){
        this.#elementos = [];

    }

    count() {
        return this.#elementos.length; 

    }

    find(clave) {
        if (this.#elementos.length > 0) {
            for(var i=0; i<this.#elementos.length;i++ )  {
                if (this.#elementos[i].clave == clave) {
                    return this.#elementos[i].valor;
                }
            }
        }
        else {
            return NaN;
        }
    }

    add(clave,valor){
        
        for(var i=0; i<this.#elementos.length;i++ )  {
            if (this.#elementos[i].clave == clave) {
                this.#elementos[i].valor = valor;
                return;
            }
        }
        this.#elementos.push({clave,valor});    
        
    }
}