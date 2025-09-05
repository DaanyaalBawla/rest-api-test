'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: 3001,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            const query1 = request.query.string || 'no string';
            return `some text ${query1}`;
        }
    });
    server.route({
        method: 'POST',
        path: '/',
        handler: (request,h) => {
            return request.payload;
        }
    })
    await server.start();
    console.log('Server running on %s', server.info.uri);
    const responseget = await fetch("http://localhost:3001", {});
    console.log("get test:", await responseget.text())

    const responsepost = await fetch("http://localhost:3001", {
        method: "POST",
        body: "this is a body",
        headers:{"Content-Type":"application/x-www-form-urlencoded",}
    });
    console.log("post test:",await responsepost.text())

};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();