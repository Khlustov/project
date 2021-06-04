const { Router } = require('express');
const User = require('../models/User')
const router = Router();

// /api/posts/userposts
router.get(
    '/main',
    async(req, res) => {
    try {      
            
        const allPosts = await User.find({}, {posts: true});
        allPosts.forEach((obj) => {return res.status(200).json({ data: obj })});               
                

    } catch (error) {
        res.status(500).json({ message: 'Что-то пошло не так'})
    }
})

module.exports = router;