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

(**) en repo habilitar los issues


Conjunto de tests propuestos
----------------------------


OK  1- En una lista vacía hay cero elementos.
OK  2- Cuando se agrega un elemento a una lista vacía hay un elemento.
OK  3- En una lista vacía no se encuentra ninguna clave.
OK  4- Cuando se agrega un elemento a una lista vacía se puede recuperar el valor a partir de la clave.
OK  5- Cuando se agrega una clave que ya está en la lista se actualiza el valor correspondiente.
OK  6- Cuando se agrega una clave que ya está en la lista no cambia la cantidad de elementos almacenados.
OK 10- Si agrego 2 elementos a la lista entonces puedo buscar cada uno de los valores. 
OK 11- en una lista vacia si borro una clave la lista queda vacia
OK 12- Si agrego 2 elementos a la lista y borro el primero me queda una lista de un solo elemento con la clave del segundo agregado
OK 13- cuando agrego un elemento a una lista vacia e intento borrar una clave diferente, la lista no se modifica 
OK 14- cuando agrego un elemento a una lista vacia y lo borro la lista queda vacia

Quitados 7, 8 y 9. Agregado 15
7- Cuando se agregan un elemento a una lista vacía la lista de claves esta ordenada.
8- Cuando tengo una lista con un elemento y agrego una clave mayor, la lista de claves esta ordenada.
9- Cuando tengo una lista con un elemento y agrego una clave menor, la lista de claves esta ordenada.
OK 15-En una lista desordenada de tres elemento, al recuperar la lista de claves, la misma esta ordenada

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

    it("11- si borro una clave la lista queda vacia", function(){
        lista.delete("clave");
        assert.equal(lista.count(),0);
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


    it("13- intento borrar una clave diferente yla lista no se modifica", function() {
        lista.delete("clave1");
        assert.equal(lista.count(),1);

    })

    it("14- si borro el elemento la lista queda vacia", function() {
        lista.delete("clave");
        assert.equal(lista.count(),0);

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

describe("En una lista desordenada de tres elementos." , function() {
    var lista = new Lista();
    lista.add("claveInicial","valor");
    lista.add("claveMayor","valor2");
    lista.add("claveAgregadaMenor","valor3");
    
    it("15- al recuperar la lista de claves, la misma esta ordenada", function() {
        var listasalida = lista.getKeysOrdered();
        var listaordenada = listasalida.sort();
        assert.equal(listasalida,listaordenada);
    })

})


describe("Si agrego 2 elementos a una lista." , function() {
    var lista = new Lista();
    lista.add("clave1","valor1");
    lista.add("clave2","valor2");

    it("10- puedo buscar cada uno de sus valores", function() {
        var valor1 = lista.find("clave1");
        var valor2 = lista.find("clave2");
        assert.equal(valor1,"valor1")
        assert.equal(valor2,"valor2")
    })

    it("12- borro el primer elemento y me queda una lista de un elemento solo con clave igual al segundo elemento", function() {
        lista.delete("clave1");
        var valorsalida = lista.find("clave2");
        assert.equal(lista.count(),1);
        assert.equal(valorsalida,"valor2")
        
    })
    
})

