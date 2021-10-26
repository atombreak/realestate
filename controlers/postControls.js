const RealEstates = require("../model/Realestates")

const Post_get = async(req, res) => {
    res.render("post")
}

const Post_post = async(req, res) => {

    const photo1Input = req.files.photo1Input
    const photo2Input = req.files.photo2Input
    const photo3Input = req.files.photo3Input
    const photo4Input = req.files.photo4Input
    const photo5Input = req.files.photo5Input
    const photo6Input = req.files.photo6Input

    const { title, description, price, location, agentfullName, agentPhone, agentProfile, agentEmail } = req.body


    try {
        photo1Input.mv("./public/images/" + photo1Input.name)
        photo2Input.mv("./public/images/" + photo2Input.name)
        photo3Input.mv("./public/images/" + photo3Input.name)
        photo4Input.mv("./public/images/" + photo4Input.name)
        photo5Input.mv("./public/images/" + photo5Input.name)
        photo6Input.mv("./public/images/" + photo6Input.name)

        console.log(req.body);
       
        const property = await RealEstates.create({
            title: req.body.title,
            description: req.body.description,
            option: req.body.option,
            price: req.body.price,
            location: req.body.location,
            category: req.body.category,
            agentfullName: req.body.agentfullName,
            agentPhone: req.body.agentPhone,
            agentEmail: req.body.agentEmail,
            agentProfile: req.body.agentProfile,
            photo1: photo1Input.name,
            photo2: photo2Input.name,
            photo3: photo3Input.name,
            photo4: photo4Input.name,
            photo5: photo5Input.name,
            photo6: photo6Input.name,
        })

        console.log(property);

        res.status(200).json({property})

    } catch (error) {
        res.status(201).json({ massage: "Faid to post your estate some error occured" })
    }
}

const Post_detail = async(req, res) => {

    try {
        const id = req.params.id;

        const property = await RealEstates.findOne({where: {id: id}})

        const suggested = await RealEstates.findAll();

        res.render("detail", { property: property, properties: suggested })

    } catch (error) {
        console.log(error);
    }
}
const Post_single = async(req, res) => {
    res.render("detail")
}
const Post_delete = async(req, res) => {
    res.send("Post deleted")
}
const Post_update = async(req, res) => {
    res.send("Post updated")
}

module.exports = {
    Post_get,
    Post_post,
    Post_detail,
    Post_delete,
    Post_update,
    Post_single
}


/*
//Pass currency as ZMW and country as NG

const Ravepay = require('flutterwave-node');

const rave = new Ravepay(PUBLIC_KEY, SECRET_KEY, false);

const zmw_mobilemoney=  async ()=>{

    const payload = {
   "currency": "ZMW",
  "payment_type": "mobilemoneyzambia",
  "country": "NG",
  "amount": "50",
  "email": "user@example.com",
  "phonenumber": "054709929220",
  "network": "MTN",
  "firstname": "temi",
  "lastname": "desola",
  "IP": "355426087298442",
  "txRef": "MC-" + Date.now(),
  "orderRef": "MC_" + Date.now(),
  "is_mobile_money_ug": 1,
  "redirect_url": "https://rave-webhook.herokuapp.com/receivepayment",
  "device_fingerprint": "69e6b7f0b72037aa8428b70fbe03986c"  
    }
    try {
       const response =  await rave.MobileMoney.zambia(payload)
       console.log(response);
    } catch (error) {
        console.log(error)
    }                            
   
}


zmw_mobilemoney();

*/ 
