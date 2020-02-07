const net = require('net');
const server = net.createServer();


server.on('connection', socket => {
    console.log('client is connected.');
    socket.setEncoding('utf8');
    socket.write('connect successfully.');

    // 客户socket进程绑定事件
    socket.on('data', (chunk) => {
        console.log('receive message from client:');
        console.log(chunk);
        // socket.emit('data', chunk);
    });
    socket.on('close', () => {
        console.log('client close');
    });
    socket.on('error', err => {
        console.log('socket error with :' + err);
    });
});

server.on('close', data => {
    console.log('server close msg :');
    console.log(data);
});

server.on('error', err => {
    console.log('server error with :');
    console.log(err);
});

server.on('listening', () => {
    console.log('server listening');
});
server.listen(4019);
