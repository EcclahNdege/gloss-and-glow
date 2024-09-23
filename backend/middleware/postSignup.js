const User = require('../schemas/user.js');
const bcrypt = require('bcrypt');

let addDetails = async (req, res, next) => {
    const {firstName, lastName, email} = req.body;

    // No need to check for missing required fields as they are all optional

    let dbUser = await User.findById(req.user._id);

    if (!dbUser) {
        return res.status(400).json({ message: 'User not found' });
    }

    dbUser.firstName = firstName;
    dbUser.lastName = lastName;
    dbUser.email = email;

    await dbUser.save();

    res.status(200).json({ message: 'Details added' });
}

let updateDetails = async (req, res, next) => {
    const userDetail = req.body;

    let dbUser = await User.findById(req.user._id);

    if (!dbUser) {
        return res.status(400).json({ message: 'User not found' });
    }

    dbUser = Object.assign(dbUser, userDetail);

    await dbUser.save();

    res.status(200).json({ message: 'Details updated' });
}