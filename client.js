const net = require('net');
const readline = require('readline');

let client = new net.Socket();

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (mes) => {
    client.write(mes);
});

client.connect(4019, 'localhost');

client.setEncoding('utf8');

client.on('data', (chunk) => {
    console.log('receive message from server:');
    console.log(chunk);
});

client.on('error', (e) => {
    console.log(e.message);
});
