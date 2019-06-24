var express = require('express')
var appCap04 = express()

//config para os caminhos dos arquivos public e ejs(view)
appCap04.set('view engine', 'ejs')
appCap04.use(express.static('public'))

appCap04.get('/', (req, res)=>{
    res.render('cap04')
})

appCap04.listen(5600, (error)=>{
    if(error){
        console.log('server not running')
    }else{
        console.log('server Ok')
    }
})