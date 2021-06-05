const net = require('net')
const dns = require('dns')

const connect = (err, address) => {
    const socket = net.createConnection({
        host: address,
        port: 80
    })

    const request = `GET / HTTP/1.1
Host: www.google.com

`
    socket.write(request)
    socket.pipe(process.stdout)
}

dns.lookup('google.com', connect)