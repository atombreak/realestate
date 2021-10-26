const Agents = require("../model/Agents")
const jwt = require("jsonwebtoken")

const requireJwt = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, process.env.JWT_SECREAT, (err, decodedToken) => {
            if (err) {
                console.log(err);
                res.redirect("/auth/login")
            } else {
                console.log(decodedToken);
                next()
            }
        })
    } else {
        res.redirect("/auth/login")
    }
}
const checkToken = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, process.env.JWT_SECREAT, async(err, decodedToken) => {
            if (err) {
                console.log(err);
                res.locals.user = null;
                next()
            } else {
                let user = await Agents.findByPk(decodedToken.id)
                res.locals.user = user;
                next()
            }
        })
    } else {
        res.locals.user = null;
        next()
    }
}

module.exports = { requireJwt, checkToken }