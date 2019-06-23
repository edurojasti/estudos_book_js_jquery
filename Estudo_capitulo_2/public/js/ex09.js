//EXEMPLO 09 CAP 02
//Exemplo final do capitulo.

//Declaração das variáveis.
var greeting = 'Oi '
var name = 'Betty,'
var msg = ' por favor check seu pedido'
var msgmCompleta = greeting + name + msg
var frase = 'Vingadores ultimato'
var tiles = frase.length
var subt = tiles * 5
var valueRemessa = 7
var totalTudo = valueRemessa + subt

//Exibindo os dados na tela...
document.getElementById('greeting').innerHTML = '<b>' + msgmCompleta + '</b>'
document.getElementById('frase').innerHTML = '<b>' + frase + '</b>'
document.getElementById('tiles').innerHTML = '<b>' + tiles + '</b>'
document.getElementById('subt').innerHTML = '<b> $' + subt + '</b>'
document.getElementById('valueRemessa').innerHTML = '<b> $' + valueRemessa + '</b>'
document.getElementById('grandTotal').innerHTML = '<b> $' + totalTudo + '</b>'


//End the aplication.