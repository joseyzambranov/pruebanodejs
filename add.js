const express = require('express')
const app = express()

const port = process.env.PORT || 3000

//motor de plantila
app.set('view engine','ejs')
app.set('views',__dirname +'/views')

app.use(express.static(__dirname + '/public'))



app.get('/',(req,res)=>{
    res.render("index",{titulo:"mi titulo dinamico"})
})
app.get('/servicio',(rep,res)=>{
    res.render("servicio",{tituloServicio:"este es un mensaje dinamico del servicio"})
})
app.use((req,res)=>{
    res.status(404).render("404",{
        titulo:'404',
        descripcion:"Titulo de la web"
    })
})

app.listen(port,()=>{
    console.log('servidor a su servicio en el puerto',port)
})