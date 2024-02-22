const http = require('http')
let server = http.createServer((req,res) => {
    if (req.url === '/') {
        res.end('Welcome to home page')
    }
    else if (req.url === '/about') {
        res.end('This is about page')
    }
    else {
        res.end('<h1> Oops ! </h1> <p> We can\'t seem to find the page you\'re looking for ! </p> <a href="/"> Back home </a>')
    }
})
server.listen(5000)