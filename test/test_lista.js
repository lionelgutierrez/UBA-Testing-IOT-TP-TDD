/**
Requisitos
----------

Almacena pares clave:valor.
Las claves deben ser únicas.
Las claves son cadenas de texto.
Se debe poder recuperar un valor a partir de una clave.
Se debe poder actualizar el valor asociado a una clave.
Se debe poder recuperar la cantidad de elementos almacenados en la lista.
Se debe poder recuperar una lista ordenada con las claves almacenadas en la lista.
Se puede borrar una pareja a partir de la clave.

en repo habilitar los issues

OK  1- En una lista vacía hay cero elementos.
OK  2- Cuando se agrega un elemento a una lista vacía hay un elemento.
OK  3- En una lista vacía no se encuentra ninguna clave.
OK  4- Cuando se agrega un elemento a una lista vacía se puede recuperar el valor a partir de la clave.
OK  5- Cuando se agrega una clave que ya está en la lista se actualiza el valor correspondiente.
OK  6- Cuando se agrega una clave que ya está en la lista no cambia la cantidad de elementos almacenados.
 7- Cuando se agregan un elemento a una lista vacía la lista de claves esta ordenada.
 8- Cuando se agrega un elemento al principio la lista de claves esta ordenada.
 9- Cuando se agrega un elemento al final la lista de claves esta ordenada.
 10- Si agrego 2 elementos a la lista entonces puedo buscar cada uno de los valores. 
 11- si borro una clave de una lista vacia la misma queda vacia
 12- cuando agrego un elemento a una lista vacia y lo borro la lista queda vacia
 13- cuando agrego un elemento a una lista vacia e intento borrar una clave diferente, la lista no se modifica 

 */

const assert = require("chai").assert;
const Lista = require("../src/lista");

describe("en una lista vacia" , function() {
    var lista = new Lista();
    it("1- hay cero elementos", function() {
        assert.equal(lista.count(), 0);
    })

    it("3- No se encuentra ninguna clave", function() {
        assert.isNaN(lista.find("clave"));
    })


})


describe("cuando se agrega un elemento a una lista vacia" , function() {
    var lista = new Lista();
    lista.add("clave","valor");

    it("2- hay un elementos", function() {
        assert.equal(lista.count(), 1);
    })

    it("4- se puede recuperar el valor a partir de la clave", function() {
        assert.equal(lista.find("clave"),"valor");
    })

    it("7- la lista esta ordenada", function() {
        var listasalida = lista.devolverListaArray();
        primerElemento = listasalida[0];
        ultimoElemento = listasalida[0];
        assert.equal(primerElemento,ultimoElemento);
    })
})

describe("Cuando se agrega una clave que ya está en la lista",function(){
    var lista = new Lista();
    lista.add("clave",'valor')

    it("5 - se actualiza el valor de clave existente",function(){
        lista.add("clave",'valornuevo')
        assert.equal(lista.find("clave"),"valornuevo")
    })

    it("6- se actualiza la clave y no cambia la cantidad de elementos",function(){
        var cantidad = lista.count();
        lista.add("clave",'valornuevo')
        assert.equal(lista.count(),cantidad)
        
    })

})




