const hapi = require('@hapi/hapi');
const Joi = require('@hapi/joi')
module.exports = [
    server.route({
        method: 'GET',
        path: '/gened/{gened_category_code}',
        handler: function (request, h) {
        return `${request.params.gened_category_code}`;
        }

    })

]