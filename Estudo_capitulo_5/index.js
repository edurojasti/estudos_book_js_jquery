let express = require('express')
let appCap05 = express()

//config dos caminhos dos arquivos view e public
appCap05.set('view engine','ejs')
appCap05.use(express.static('public'))

appCap05.get('/', (req, res)=>{
    res.render('cap05') //main archive
})

appCap05.get('/ex01_cap05', (req, res)=>{
    res.render('ex01_cap05')
})

appCap05.get('/ex02_cap05', (req, res)=>{
    res.render('ex02_cap05')
})

appCap05.get('/ex03_cap05', (req, res)=>{
    res.render('ex03_cap05')
})

appCap05.get('/ex04_cap05', (req, res)=>{
    res.render('ex04_cap05')
})

appCap05.get('/ex05_cap05', (req, res)=>{
    res.render('ex05_cap05')
})

appCap05.get('/ex06_cap05', (req, res)=>{ //function arrow
    res.render('ex06_cap05')
})

appCap05.get('/ex07_cap05', (req, res)=>{ //function arrow
    res.render('ex07_cap05')
})

appCap05.get('/ex08_cap05', (req, res)=>{ //function arrow
    res.render('ex08_cap05')
})

appCap05.get('/ex09_cap05', (req, res)=>{ //function arrow
    res.render('ex09_cap05')
})

appCap05.get('/ex10_cap05', (req, res)=>{ //function arrow
    res.render('ex10_cap05')
})

appCap05.get('/ex11_cap05', (req, res)=>{
    res.render('ex11_cap05')
})

appCap05.listen(5000, (error)=>{          //localhost onde o servidor está online
    if(error){console.log('serviço OFF')}
    else{console.log('serviço ON')}
})