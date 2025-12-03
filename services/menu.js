import { Knex } from "knex"
import menu from "../routes/menu"
class MenuServices {
   async getMenu(name="") {
        return await Knex({m:'menu'}).withSchema('molloyeats')
    }
}
module.exports = new CourseServices