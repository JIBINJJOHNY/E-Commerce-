const User = require('../models/userModel');

const createUser = async (req, res) => {
    const email = req.body.email;
    const findUser = await User.findOne(email);
    if (!findUser) {
        //Create a new User
        const newUser = user.create(req.body);
        res.json(newUser);
    } else {
        //User Already Exist
        res.json({
            msg: "User Already Exist",
            success: false,

        });
    }
};
module.exports = {
    createUser
}