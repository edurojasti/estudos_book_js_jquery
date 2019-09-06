var express = require('express')
var appCap04 = express()

//config para os caminhos dos arquivos public e ejs(view)
appCap04.set('view engine', 'ejs')
appCap04.use(express.static('public'))

appCap04.get('/', (req, res)=>{
    res.render('cap04')
})

appCap04.get('/ex01_cap04', (req, res)=>{
    res.render('ex01_cap04')
})

appCap04.get('/ex02_cap04', (req, res)=>{
    res.render('ex02_cap04')
})

appCap04.get('/ex03_cap04', (req, res)=>{
    res.render('ex03_cap04')
})

appCap04.get('/ex04_cap04', (req, res)=>{
    res.render('ex04_cap04')
})

appCap04.get('/ex05_cap04', (req, res)=>{
    res.render('ex05_cap04')
})

appCap04.get('/ex06_cap04', (req, res)=>{
    res.render('ex06_cap04')
})

appCap04.get('/ex07_cap04', (req, res)=>{
    res.render('ex07_cap04')
})

appCap04.get('/ex08_cap04', (req, res)=>{
    res.render('ex08_cap04')
})

appCap04.get('/ex09_cap04', (req, res)=>{
    res.render('ex09_cap04')
})

appCap04.get('/ex10_cap04', (req, res)=>{
    res.render('ex10_cap04')
})

//chamada do servidor locahost:5600
appCap04.listen(4000, (error)=>{
    if(error){
        console.log('server not running')
    }else{
        console.log('server Ok')
    }
})