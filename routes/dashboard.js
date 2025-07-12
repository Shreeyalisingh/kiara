const express = require('express');
const router = express.Router();
const ChildClothing = require('../models/child');
const User = require('../models/user');

router.get('/dashboard', async (req, res) => {
    if (req.user) {
        console.log(req.user); 

        const user = await User.findById(req.user._id);
        const items = await ChildClothing.find({ owner: user._id });

        return res.render('user/dashboard', { user, items }); 
    }
    res.redirect("/home");
});

router.post('/add-item', async (req, res) => {
    const { name, category, price, sizes, color, stock, description, image } = req.body;

    const newItem = new ChildClothing({
        name,
        category,
        price,
        sizes: sizes.split(',').map(s => s.trim()), // clean split
        color,
        stock,
        description,
        image,
        person: req.user.username,
        owner: req.user._id
    });

    await newItem.save();
    res.redirect('/dashboard');
});

module.exports = router;
