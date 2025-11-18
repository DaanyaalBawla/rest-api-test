const hapi = require('@hapi/hapi');
const Joi = require('@hapi/joi')
const server = hapi.server({
            port: 3001,
            host: 'localhost'
        });
module.exports = [
    server.route({
        method: 'GET',
        path: '/menu/{menu_item}',
        handler: function (request, h) {
        return `${request.params.menu_item}`;
        },
        options: {
        validate: {
            query: Joi.object({
                limit: Joi.string()
            })
        }
    }
    })

]