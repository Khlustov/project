const { Router } = require('express');
const User = require('../models/User')
const router = Router();

// /api/posts/userposts
router.get(
    '/userposts',
    async(req, res) => {
    try {
        
        const param = req.query.userEmail;        

        const user = await User.findOne({email: param}) ;
        
        res.status(200).json({user});        

    } catch (error) {
        res.status(500).json({ message: 'Что-то пошло не так'})
    }
})

module.exports = router;