let express = require('express')
let appCap02 = express()

//config para os caminhos dos arquivos public e ejs(view)
appCap02.set('view engine', 'ejs')
appCap02.use(express.static('public'))

//renderizando os arquivos ejs
appCap02.get('/', (req, res)=>{
    res.render('cap02')
})

appCap02.get('/ex01_cap02', (req, res)=>{
    res.render('ex01_cap02')
})

appCap02.get('/ex02_cap02', (req, res)=>{
    res.render('ex02_cap02')
})

appCap02.get('/ex03_cap02', (req, res)=>{
    res.render('ex03_cap02')
})

appCap02.get('/ex04_cap02', (req, res)=>{
    res.render('ex04_cap02')
})

appCap02.get('/ex05_cap02', (req, res)=>{
    res.render('ex05_cap02')
})

appCap02.get('/ex06_cap02', (req, res)=>{
    res.render('ex06_cap02')
})


appCap02.get('/ex07_cap02', (req, res)=>{
    res.render('ex07_cap02')
})


appCap02.get('/ex08_cap02', (req, res)=>{
    res.render('ex08_cap02')
})

appCap02.get('/ex09_cap02', (req, res)=>{
    res.render('ex09_cap02')
})

appCap02.get('/ex10_cap02', (req, res)=>{
    res.render('ex10_cap02')
})


//config do localhost
appCap02.listen(5000, (error)=>{
    if(error){
        console.log('Server not runnig!')
    }else{
        console.log('Server running Ok!')
    }
})