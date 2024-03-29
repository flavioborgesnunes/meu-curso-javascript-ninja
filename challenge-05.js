/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = ['casa', 5, true, function(){},"doido" ]
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction ( myArray ){
    return myArray;
    console.log(myArray);
}
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/


/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2(arr, num){
    return arr[num];
}
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myArray2 = [false, 'casa', 8, null, 'louco'];
/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
function myFunction3(arr){
    return myArray2;
}
/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book (nomeLivro){
    var livros = {
            'DomQuixote' : {
                pag : 30, 
                autor : 'Miguel', 
                editora : 'edi1'
                },
            'Memorias' : { 
                pag : 40, 
                autor :'Machado', 
                editora: 'edi2'
            },
            'Irmaos' : {
                pag : 50, 
                autor : 'Fiodor', 
                editora : 'edi3'
            } 
        };
    
    if( !nomeLivro ){
        return livros;
    }
        return  livros[nomeLivro];
}
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();
/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
 console.log(" livro " + "Memorias" + " tem " + book('Memorias').pag + " paginas.")
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro " +"Irmaos"+ " é " + book('Irmaos').autor + ".")
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro " +"Irmaos"+ " foi publicado pela editora " + book('Irmaos').editora + ".")
