//EXEMPLO 06 CAP 02
//Arrays

var colors = ['BROWN', 'RED', 'ORANGE', 'white']
var qualCor = prompt('Escolha uma cor e altere pra outra cor: marrom, vermelho ou laranja ')
colors[3] = qualCor


if(qualCor == 'marrom' || qualCor == 'MARROM' || qualCor == 'Marrom'){
    document.getElementById('color').innerHTML = colors[0]
    document.getElementById('content').style.background = colors[0]
} 
else if(qualCor == 'vermelho' || qualCor == 'Vermelho' || qualCor == 'VERMELHO'){
    document.getElementById('color').innerHTML = colors[1]
    document.getElementById('content').style.background = colors[1]
} 
else if(qualCor == 'laranja' || qualCor == 'Laranja' || qualCor == 'LARANJA'){
    document.getElementById('color').innerHTML = colors[2]
    document.getElementById('content').style.background = colors[2]
}
else{
    document.getElementById('color').innerHTML = colors[3]
    document.getElementById('content').style.background = colors[3]
    document.getElementById('content').style.color = 'black'
}

document.getElementById('content').style.color = 'white'

//End the aplication.