const RealEstates = require("../model/Realestates")

const home = async(req, res) => {

    try {

        const realestates = await RealEstates.findAll({limit: 3});

        res.render("home", { properties: realestates })

    } catch (error) {
        console.log(error);
    }
}

const detail = async(req, res) => {
    res.render("detail")
}

const info = async(req, res) => {
    res.render("info")
}
const search = async(req, res) => {
    res.render("search")
}

const dashbord = async(req, res) => {
    res.render("dashbord")
}

module.exports = {
    home,
    detail,
    info,
    search,
    dashbord
}