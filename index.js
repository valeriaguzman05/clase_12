const http = require("http");

const server = http.createServer(function(req, res) {
        res.writeHead(200, { 'Content-Type' : 'text/plain'})
        res.write('You can sleep now')
        res.end()
    })

    server.listen(9000)
