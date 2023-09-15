const jwt = require('jsonwebtoken')

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization

    if (!authHeader?.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized' })
    }

    const token = authHeader.split(' ')[1]
    console.log(token)

    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_KEY,
        (err, decoded) => {
            if (err) return res.status(403).json({ message: 'Forbidden' })
            console.log(decoded);
            req.user = decoded.userInfo.name
            req.roles = decoded.userInfo.userRole
            next()
        }
    )
        // console.log(decoded)
}

module.exports = verifyJWT 