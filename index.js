/*const http = require("http");

const server = http.createServer(function(req, res) {
        res.writeHead(200, { 'Content-Type' : 'text/plain'})
        res.write('You can sleep now')
        res.end()
    })

    server.listen(9000)*/


const http = require("http")
const port = 8000

function responseHandler (req, res) {
    res.write("Hello Ducky!")
    res.end()
}

const server = http.createServer(responseHandler)
server.listen(port)

