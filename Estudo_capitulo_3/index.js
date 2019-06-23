var express = require('express')
let appCap03 =  express()

//config para os caminhos dos arquivos public e ejs(view)
appCap03.set('view engine', 'ejs')
appCap03.use(express.static('public'))

//renderizando arquivos ejs
appCap03.get('/', (req, res)=>{
    res.render('cap03')
})

appCap03.get('/ex01_cap03', (req, res)=>{
    res.render('ex01_cap03')
})

appCap03.get('/ex02_cap03', (req, res)=>{
    res.render('ex02_cap03')
})

appCap03.get('/ex03_cap03', (req, res)=>{
    res.render('ex03_cap03')
})


appCap03.get('/ex04_cap03', (req, res)=>{
    res.render('ex04_cap03')
})

appCap03.get('/ex05_cap03', (req, res)=>{
    res.render('ex05_cap03')
})

appCap03.get('/ex06_cap03', (req, res)=>{
    res.render('ex06_cap03')
})

appCap03.get('/ex07_cap03', (req, res)=>{
    res.render('ex07_cap03')
})

appCap03.get('/ex08_cap03', (req, res)=>{
    res.render('ex08_cap03')
})

appCap03.get('/ex09_cap03', (req, res)=>{
    res.render('ex09_cap03')
})

appCap03.get('/ex10_cap03', (req, res)=>{
    res.render('ex10_cap03')
})

appCap03.listen(3000, (error)=>{
    if(error){
        console.log('server not running')
    }else{
        console.log('server Ok')
    }
})