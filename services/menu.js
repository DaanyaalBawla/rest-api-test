import { KnexTimeoutError } from "knex"
import menu from "../routes/menu"
class MenuServices {
   async getMenu(name="") {
        return await this.getMenu.query()
    }
    getCoursesByGenEdCategory(catagory) {
        return catagory
    }
}
module.exports = new CourseServices