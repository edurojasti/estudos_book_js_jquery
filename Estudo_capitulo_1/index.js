let express = require ('express')
let appCap01 = express()

appCap01.set('view engine', 'ejs')
appCap01.use(express.static('public'))

appCap01.get('/', (req, res)=>{
    res.render('cap01')
})

appCap01.get('/ex01', (req, res)=>{
    res.render('ex01')
})

appCap01.get('/ex02', (req, res)=>{
    res.render('ex02')
})

appCap01.listen(4000, (error)=>{
    if(error){
        console.log('deu merda!')
    }else{
        console.log('deu bom')
    }
})