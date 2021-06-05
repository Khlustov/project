const { Router } = require('express');
const User = require('../models/User')
const router = Router();

// /api/posts/delete
router.get(
    '/delete',
    async(req, res) => {
    try {
        
        const param = req.query.postId;        

        await User.remove({_id: param});
        
        res.status(200).json({ message: 'Объявление удалено' });        

    } catch (error) {
        res.status(500).json({ message: 'Что-то пошло не так'})
    }
})

module.exports = router;