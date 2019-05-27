var preco, quantidade, total //variáveis declaradas

//atribuindo valores as variáveis
preco = 5
quantidade = 14
total = preco * quantidade //calculo do total 

//var elemento recebe a tag com id cost, e atribui o resultado "total"
var elemento =  document.getElementById('cost')
elemento.textContent = "$" + total