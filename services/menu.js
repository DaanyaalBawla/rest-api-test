const Menu = require('../models/menu')
class MenuServices {
   async getMenu(name="") {
    return await Menu.query()
        .select('name', 'price', 'description')
        .where('name', `${name}`)
        .wherein('name',`${name}`)
        .whereILike('name',`${name}`)

   }
}
module.exports = new MenuServices()