const Joi = require('@hapi/joi')
module.exports = [
    {
        method: 'GET',
        path: '/menu/',
        handler: function (request, h) {
        return `${request.query.name}`;
        },
        options: {
        validate: {
            query: Joi.string().optional(),
            }
        }
    },
]