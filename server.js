const app = require('./src/config/express')

app.listen(3000, function(){
    console.log('server init port 3000')
})

// const http = require('http')
// const server = http.createServer(function (req, resp) {
//     console.log(req)
//     let html = "";
//     if (req.url === '/') {
//         html = "index";
//     } else if (req.url = "livro") {
//         html = "livro";
//     }
//     resp.end(req.url)

// })
// server.listen(3000)