const NCC = require('netcat/client');
const nc = new NCC();

const conn = nc.addr("header-bug-demo.azurewebsites.net").port(80).connect();

conn.on('data',(b) => {
    console.log(b.toString('utf-8'))
})

conn.send(
  `GET /api/test HTTP/1.1
Host: header-bug-demo.azurewebsites.net
User-Agent: Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.6; fr; rv:1.9.2.8) Gecko/20100722 Firefox/3.6.8
Accept: */*
x-ms-testing: 123,
x-ms-testing2:
x-ms-testing3: 789
\r\n\r\n`
);