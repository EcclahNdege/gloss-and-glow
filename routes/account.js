const express = require('express');
const auth = require('../middleware/auth.js');
const login = require('../middleware/login.js');
const signup = require('../middleware/signup.js');
const User = require('../schemas/user.js');

const router = express.Router();

router.get('/logout', (req, res) => {
    
});

router.get("/status", auth, (req, res) => {
    res.sendStatus(200);
});

router.post('/signup', signup, login);

router.post('/login', login);

router.patch('/', auth, async (req, res) => {
    let user = req.user;
    let { password, ...rest } = req.body;
    let updatedUser = await User.findByIdAndUpdate(user._id, rest, { new: true });

    res.json({ data: updatedUser });
});

module.exports = router;
