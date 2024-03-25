const http = require('http')
const server = http.createServer()

server.on('request', async (req, res) => {
  console.log(req.url)
  // 解决跨域
  res.writeHead(200, {
    'Access-Control-Allow-Origin': '*'
  })
  res.write('hello')
  res.end()
})

server.listen(8888)