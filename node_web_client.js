const net = require('net')

const socket = net.createConnection({
    host: 'google.com',
    port: 80
})

const request = `GET / HTTP/1.1
Host: www.google.com

`
socket.write(request)
socket.pipe(process.stdout)