const jwt = require('jsonwebtoken');
const User = require('../schemas/user');

module.exports = async (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: 'Access denied' });
    }

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = await User.findById(verified);

        if(!req.user) {
            return res.status(401).json({ message: 'Access denied' });
        }
        
        next();
    } catch (err) {
        res.status(400).json({ message: 'Invalid token' });
    }
}