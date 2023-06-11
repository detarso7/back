const Users = require('../models/Users')

module.exports = class UserController{
    static async register (req, res){
        res.json('Rota de registro')
    }
}