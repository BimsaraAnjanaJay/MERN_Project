const { userModel } = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) 
        return (res.status(404).json({ msg: 'All fields are required' }))

    const user = await userModel.findOne({ email }).exec()
    if (!user) {
        console.log(user);
        return (res.status(401).json({ error: 'Unauthorized' }))
    }

    const match = await bcrypt.compare(password, user.password)
    if (!match){
        console.log("password error");
        return (res.status(401).json({ error: 'Unauthorized' }))
    } 

    const access_token = jwt.sign({
        "userInfo": { 
            "name": user.name, 
            "email": user.email, 
            "userRole": user.userRole 
        }
    }, 
    process.env.ACCESS_TOKEN_KEY, 
    { expiresIn: '15mins' })

    const refresh_token = jwt.sign({
        "name": user.name,
        "userRole": user.userRole 
    },
    process.env.REFRESH_TOKEN_KEY,
    { expiresIn: '7d' })

    res.cookie('jwt', refresh_token, {
        httpOnly: false,
        secure: true,
        sameSite: 'None',
        maxAge: 7*24*60*60*1000
    })

    res.status(200).json({ token: access_token })
}

const refresh = (req, res) => {
    const cookies = req.cookies
    if (!cookies?.jwt) 
        return res.status(401).json({ error: 'Unauthorized' })

    const refreshToken = cookies.jwt

    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_KEY,
        async (err, decoded) => {
            if (err) 
                return res.status(403).json({ error: 'Forbidden' })

            const user = await userModel.findOne({ email: decoded.email }).exec()

            if (!user) 
                return res.status(401).json({ error: 'Unauthorized' })

            const access_token = jwt.sign({
                "userInfo": {
                    "name": user.name, 
                    "email": user.email, 
                    "userRole": user.userRole 
                }
            },
            process.env.ACCESS_TOKEN_KEY,
            { expiresIn: '15m' })

            res.status(200).json({ token: access_token })
        }
    )
}

const logout = (req, res) => {
    const cookies = req.cookies

    if (!cookies?.jwt) 
        return res.sendStatus(204).json({ message: 'No Cookies' })

    res.clearCookie('jwt', { 
        httpOnly: true, 
        sameSite: 'None', 
        secure: true 
    })

    res.json({ message: 'Cookie cleared' })
}

module.exports = { login, refresh, logout };
