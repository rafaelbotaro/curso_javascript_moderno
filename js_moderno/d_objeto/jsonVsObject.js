//  JSON - JavaScript Object Notation (Notação de Objetos em JavaScript)
//  É um formato textual para anotar objetos em JavaScript
//  JSON é um formato de dados, não é algo que é executado

const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma(){
        return a + b + c;
    }
}
console.log(JSON.stringify(obj));
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'));
console.log(JSON.parse('{"a": 1, "b": "String", "c": true, "d":{}, "e":[], "f": 1.7}'));
