'use strict';

const hapi = require('@hapi/hapi');
const joi = require('@hapi/joi');
const path = require('path')
const fs = require('fs')
const routes = []
const routesPath = path.join(__dirname,'routes')
const fileNames = fs.readdirSync(routesPath)
const fullRoutesPath = path.join(routesPath, fileNames)
fileNames.forEach(fileName => {
    routes.push(...require(path.join(routesPath, fileName)))
})

const init = async () => {

    const server = hapi.server({
        port: 3001,
        host: 'localhost'
    });

    routes({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            const query1 = request.query.string || 'no string';
            return `some text ${query1}`;
        }
    });
    routes({
        method: 'POST',
        path: '/',
        handler: (request,h) => {
            return request.payload;
        }
    })
   routes.route()
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