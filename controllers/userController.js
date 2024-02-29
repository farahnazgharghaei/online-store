const User = require("../models/User");

const getAllUsers = async(req, res, next)=>{
    // try {
        const users= await User.find({});
        return res.status(200).send(users)
    // } catch (error) {
    //     // return res.status(500).send({error:error.message()});
    //     next()
    // }
}

const getUser = () => {

};

module.exports={getAllUsers}