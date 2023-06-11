const Users = require('../models/Users')

module.exports = class UserController{
    static async register (req, res){
        
        const {name, email, phone, password, confirmpassword} = req.body

        if(!name){
            res.status(422).json({massage: 'O nome é obrigatório'})
            return
        }
        if(!email){
            res.status(422).json({massage: 'O email é obrigatório'})
            return
        }
        if(!phone){
            res.status(422).json({massage: 'O telefone é obrigatório'})
            return
        }
        if(!password){
            res.status(422).json({massage: 'A senha é obrigatório'})
            return
        }
        if(!confirmpassword){
            res.status(422).json({massage: 'Repita a senha'})
            return
        }

        if(password !== confirmpassword){
            res.status(422).json({massage: 'As senhas não conferem'})
            return
        }

        //Check if user exist

        const checkUser = User.findOnde({email: email})

        if (checkUser){
            res.status(422).json({messagem: 'O email já está cadastrado. Utilize outro email'})
        }

    }
}