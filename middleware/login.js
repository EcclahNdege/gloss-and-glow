const User = require('../schemas/user.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: 'Missing required fields' });
    }
    let dbUser = await User.findOne({ username });

    if (!dbUser) {
        return res.status(400).json({ message: 'Invalid username or password' });
    }

    const validPassword = await bcrypt.compare(password, dbUser.password);

    if (!validPassword) {
        return res.status(400).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign({ _id: dbUser._id }, process.env.TOKEN_SECRET);

    res.cookie('token', token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000
    });

    res.status(200).json({ message: 'Logged in' });
}