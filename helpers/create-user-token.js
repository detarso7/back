const jwt = require('jsonwebtoken')

const createUserToken = async (user, req, res) => {

    // Create Token
    const token = jwt.sign({
        name: user.name,
        id: user._id
    }, "keySecretToken")

    //

    res.status(200).json({
        message: 'Usuário autenticado',
        token,
        userId: user._id
    })
}

module.exports = createUserToken