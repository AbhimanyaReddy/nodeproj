const express = require('express')
const path = require('path')
const hbs = require('hbs')
const open = require('./openweather.js')

const app = express()
const port = process.env.PORT || 3000

const publicDirectoryPath = path.join(__dirname, '../web')
const viewspath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')


app.set('view engine','hbs')
app.set('views',viewspath)
hbs.registerPartials(partialsPath)


app.use(express.static(publicDirectoryPath))

app.get('',(req,res) => {
    const data = {
        title:"WELCOME",
        info:"home",
        creator:"Abhimanya"
    }

    res.render('index',data)
})

app.get('/help',(req,res) => {
    const data = {
        title:"HELP",
        info:"help",
        creator:"Abhimanya"
    }
    res.render('help',data)
})

app.get('/about',(req,res) => {
    const data = {
        title:"ABOUT",
        info:"about",
        creator:"Abhimanya"
    }
    res.render('about',data)
})

app.get('/weather',(req,res) => {
    if(!req.query.address)
    {
        return res.send(
            {
                ERROR:"NO ADDRESS PROVIDED"
            }
        )
    }
    else
    {
        open(req.query.address, (error, { temp,weath,addr } ={}) => {
            if (error) {
                return res.send(error)
            }
            res.send({
                temperature:temp,
                weather:weath,
                location:addr
            })
        })
    }

})

app.get('*',(req,res) => {
    res.send("<h1>MY 404 PAGE<\h1>")
})

app.listen(port,() => {
    console.log("SERVER IS UP AND RUNNING IN PORT")
})