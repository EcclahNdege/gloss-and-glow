const express = require('express');
const auth = require('../middleware/auth.js');
const login = require('../middleware/login.js');
const signup = require('../middleware/signup.js');

const router = express.Router();

router.get('/', auth , (req, res) => {
    let  {password , ...rest}= req.user;
    res.json({ data :  rest });
});

router.get('/logout', (req, res) => {
    res.clearCookie('token').json({ message: 'Logged out' });
});

router.get("/check", auth, (req, res) => {
    res.json({ message: "Logged in" });
});

router.post('/signup', signup, login);

router.post('/login', login);

router.patch('/update', auth, async (req, res) => {
    let user = req.user;
    let { password, ...rest } = req.body;
    let updatedUser = await User.findByIdAndUpdate(user._id, rest, { new: true });

    res.json({ data: updatedUser });
});

module.exports = router;
