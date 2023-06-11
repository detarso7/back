const User = require('../models/Users')
const bcrypt = require('bcrypt')
const createUserToken = require('../helpers/create-user-token')

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

        const checkUser = await User.findOne({email: email})

        if (checkUser){
            res.status(422).json({messagem: 'O email já está cadastrado. Utilize outro email'})
        }

        //Password create

        const salt = await bcrypt.genSalt(12)
        const hashPassord = await bcrypt.hash(password, salt)

        // Create User

        const user = new User({
            name,
            email,
            phone,
            password: hashPassord
        })

        try {

            const newUser = await user.save()
            await createUserToken(newUser, req, res)

        } catch (error) {

            res.status(500).json({message: error})

        }
    }
}