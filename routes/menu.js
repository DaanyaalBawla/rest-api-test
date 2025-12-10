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
    }),
    server.route({
        method: 'POST',
        path: '/menu/add',
        handler: function (request, h) {
        return `${request.params.menu_item}`;
        },
        options: {
        validate: {
            
            name: Joi.string().required(),
            price: Joi.number().required(),
            description: Joi.string().optional()
            })
        }
    }
    })

]