const jwt = require("jsonwebtoken")
const Agents = require("../model/Agents")


const max_age = 3 * 24 * 60 * 60;

const creatToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECREAT, {
        expiresIn: max_age
    })
}

const sign_get = (req, res) => {
    res.render("sign")
}

const sign_post = async(req, res) => {

    const profilePic = req.files.profile

    try {
        profilePic.mv("./public/images/" + profilePic.name)

        const agent = await Agents.create({ fullName: req.body.fullName, email: req.body.email, phone: req.body.phone,password: req.body.password, profile: profilePic.name, })
        const tokenCookie = creatToken(agent.id)
       

        res.cookie("jwt", tokenCookie, {
            httpOnly: true,
            maxAge: max_age * 1000
        })
        res.status(201).json({ user: agent.id })
    } catch (err) {
        res.status(400).json({ massage: "Please enter correct credentials" })
    }
}

const login_get = (req, res) => {
    res.render("login")
}
const login_post = async(req, res) => {
    
    try {

        console.log(req.body);

        const agent = await Agents.findOne({where: { phone: req.body.phone }})
        
        console.log(agent);
        
        const tokenCookie = creatToken(agent.id)
            res.cookie("jwt", tokenCookie, {
                httpOnly: true,
                maxAge: max_age * 1000
            })
            res.status(200).json({ user: agent.id })
    } catch (error) {
        res.status(400).json({ error: "Sorry user doesn't exist" })
        console.log(error);
    }
}

const loginout_get = (req, res) => {
    res.cookie("jwt", "", { maxAge: 1 });
    res.redirect("/");
}

module.exports = {
    sign_get,
    sign_post,
    login_get,
    login_post,
    loginout_get
}