const { Router, response } = require('express');
const User = require('../models/User')
const router = Router();

// /api/posts/userposts
router.get(
    '/main',
    async(req, res) => {
    try {      
            
        const allPosts = await User.find({}, {posts: true, _id: false});

        const response = []

        allPosts.forEach((item) => {
            item.posts.forEach((elem) => {
                response.push(elem)
            })            
        })
                           
        res.status(200).json(response)

    } catch (error) {
        res.status(500).json({ message: 'Что-то пошло не так'})
    }
})

module.exports = router;