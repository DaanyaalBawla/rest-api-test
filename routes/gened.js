const hapi = require('@hapi/hapi');
const Joi = require('@hapi/joi')
const server = hapi.server({
            port: 3001,
            host: 'localhost'
        });
module.exports = [
    server.route({
        method: 'GET',
        path: '/gened/{gened_category_code}',
        handler: function (request, h) {
        return `${request.params.gened_category_code}`;
        }

    })

]