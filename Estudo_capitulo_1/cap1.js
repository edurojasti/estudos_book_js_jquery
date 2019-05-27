var today = new Date() //objeto date
var hourNow = today.getHours() //metodo do objeto date
var mensagem

    if(hourNow > 18){
        mensagem = 'Boa noite!'
        

    }else if(hourNow > 12 ){
        mensagem = 'Boa tarde!'
        

    }else if(hourNow > 0){
        mensagem = 'BOm dia!'
        

    }else{
        mensagem = 'Bem-vindo!'
        
    }

    document.write(`<h3>${mensagem}</h3>`)
    