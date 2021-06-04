const { Router } = require('express');
const Posts = require('../models/Post');
const User = require('../models/User')
const router = Router();

// /api/addpost
router.post(
    '/addpost',
    async(req, res) => {
    try {
        
        const {email, title, price, description, contacts} = req.body;

        if(!title || !price || !description || !contacts) {
            return res.status(500).json({ message: 'Заполните все поля формы'})
        }

        const post = new Posts({ title, price, description, contacts });
               
        await User.findOneAndUpdate({email}, {$push: {posts: post}});

        res.status(201).json({ message: 'Объявление опубликовано' })
        

    } catch (error) {
        res.status(500).json({ message: 'Не удалось опубликовать объявление'})
    }
})

module.exports = router;