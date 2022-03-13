(function(){
// Envolva todo o conteúdo desse arquivo em uma IIFE.

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
var person = {
    name : 'Flávio',
    lastname : 'Nunes',
    age : 36
}
console.log( 'Propriedades de person:');

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
console.log(Object.keys(person));

/*
Crie um array vazio chamado `books`.
*/
var books = [];

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
books.push({name : 'irmãos', pages : 700})
books.push({name : 'marcos', pages : 20})
books.push({name : 'kaibalion', pages : 140})

console.log( 'Lista de livros:' );
/*
Mostre no console todos os livros.
*/
console.log(books);

console.log( '\nLivro que está sendo removido:' );
/*
Remova o último livro, e mostre-o no console.
*/
var retirados = books.pop();
console.log(retirados);

console.log( '\nAgora sobraram somente os livros:' );
/*
Mostre no console os livros restantes.
*/
console.log(books);

/*
Converta os objetos que ficaram em `books` para strings.
*/
var books = JSON.stringify(books);
console.log( '\nLivros em formato string:' );
console.log(books);
/*
Mostre os livros nesse formato no console:
*/
console.log(books);

/*
Converta os livros novamente para objeto.
*/
var books = JSON.parse(books)
console.log( '\nAgora os livros são objetos novamente:' );
console.log(books);
/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
for (var i = 0; i < Object.keys(books).length; i++){
    for(var prop in books[i]){
        console.log(prop + ':' + books[i][prop]);
    }
}


/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
var myName = ['F', 'l', 'á', 'v', 'i', 'o']
console.log( '\nMeu nome é:' );
console.log(myName.join( ''))

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
// ?
contrario = myName.reverse().join();
console.log( '\nMeu nome invertido é:' );
console.log( contrario );

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
// ?

console.log( '\nAgora em ordem alfabética:' );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
console.log(myName.sort())
})()
var myName = ['f', 'l', 'a', 'v', 'i', 'o' ]
var arr = [{nome: 'flavio', peso: 97.5, altura: 1.75, idade: 21}, { nome:'patricia', idade: 40}, {nome: 'priscila', idade:31, peso:100}, {nome: 'Belhior', cargo: 'oficial de justiça', carro: 'hb20'}];
for(i = 0; i < arr.length; i++){
     for(var qqcoisa in arr[i]){
         console.log(qqcoisa + " : "+ arr[i][qqcoisa])
        }
    }