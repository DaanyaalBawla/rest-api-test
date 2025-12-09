const menuService = require("../services/menu")
class MenuController {
    static getMenu (request) {
        return JSON.stringify( menuService.getMenu(request.params.name))

    }
}
module.exports = new MenuController