let User = require('../schemas/user.js');
const bcrypt = require('bcrypt');

module.exports = async (req, res, next) => {
    const { username, phone, password} = req.body;
    if (!username || !phone || !password) {
        return res.status(400).json({ message: 'Missing required fields' });
    }
    let dbUser = await User.findOne({ username  : username });

    if (dbUser) {
        return res.status(400).json({ message: 'Username already exists' });
    }

    dbUser = await User.findOne({ phone : phone });

    if (dbUser) {
        return res.status(400).json({ message: 'Phone number already exists' });
    }

    let newUser = new User(req.body);

    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);

    await newUser.save();

    next();

}