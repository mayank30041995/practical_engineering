var http = require('http')
var dt = require('./myfirstmodule')

http
  .createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(`<h1>'The date and time are currently: ' ${dt.myDateTime()}</h1>`)
    res.end()
  })
  .listen(3000, (port) => console.log('Server is running at port', 3000))
