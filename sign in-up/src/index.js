const express = require('express')
const path = require("path")
const app = express()
const collection = require('./mongo')
const templatePath = path.join(__dirname,'../templates')
app.use(express.json())
app.set('view engine','hbs')
app.set('views',templatePath)
app.use(express.urlencoded({extended : false}))
app.get('/',(req,res) => {
    res.render('login')
})
app.post('/login',async (req,res) => {
    try {
        const check = await collection.findOne({name:req.body.name})
        if (check.password === req.body.password) {
            res.render('home')
        }
        else {
            res.send('Wrong Paswword')
        }
    }
    catch {
        res.send('Wrong Details')
    }
})
app.listen(3000, () => {
    console.log('Port Connected')
})