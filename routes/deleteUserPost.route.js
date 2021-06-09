const { Router } = require('express');
const User = require('../models/User')
const router = Router();

// /api/posts/delete
router.post(
    '/delete',
    async(req, res) => {
    try {
        
        const {postId, email} = req.body; 
        console.log(postId);              

        await User.findOneAndUpdate({email}, {$pull: {posts: {title: postId}}});
        
        res.status(200).json({ message: 'объявление удалено'})

    } catch (error) {
        res.status(500).json({ message: 'Что-то пошло не так'})
    }
})

module.exports = router;