'use strict';

const hapi = require('@hapi/hapi');
const joi = require('@hapi/joi');
const path = require('path')
const fs = require('fs')
const routes = []
const routesPath = path.join(__dirname,'routes')
const fileNames = fs.readdirSync(routesPath)
fileNames.forEach(fileName => {
    routes.push(...require(path.join(routesPath, fileName)))
})

const init = async () => {

    const server = hapi.server({
        port: 3001,
        host: 'localhost'
    });

    server.route(routes)
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
const { Client } = require("pg");

const client = new Client("postgresql://temp:FNukzJzpun9cZ4t734m_qA@vague-mayfly-9420.jxf.gcp-us-east1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full");

(async () => {
  await client.connect();
  try {
    const results = await client.query("SELECT NOW()");
    console.log(results);
  } catch (err) {
    console.error("error executing query:", err);
  } finally {
    client.end();
  }
})();

init();