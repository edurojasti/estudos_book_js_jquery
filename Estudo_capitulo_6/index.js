const express = require('express')
const appCap06 = express()

appCap06.set('view engine', 'ejs');
appCap06.use(express.static('public'));//configurando rotas de arquivos css, img, etc.

appCap06.get('/', (req, res)=>{
    res.render('cap06');                // renderiza a pagina principal do capitulo
})

appCap06.get('/ex01_cap06',(req, res)=>{
    res.render('ex01_cap06');
})

appCap06.listen(5500, (error)=>{
    if(error){console.log('sistema Offline!');}
    else{console.log('Sistema Online!');}
})