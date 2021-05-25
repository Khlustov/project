const { Router } = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator');
const User = require('../models/User');
const router = Router();

// /api/auth/registration
router.post(
    '/registration',
    async(req, res) => {
    try {

        const errors = validationResult(req)

        if(!errors.isEmpty()) {
            return res.status(400).json({ 
                errors: errors.array(),
                message: 'Некорректные данные при регистрации'
             })
        }

        const {name, email, password} = req.body;

        const regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if(regEmail.test(email) == false) {
            return res.status(400).json({ message: 'Некорректный email' });
        }

        const regPassword = /[0-9a-zA-Z]{6,}/;
        if(regPassword.test(password) == false) {
            return res.status(400).json({ message: 'Пароль должен содержать минимум 6 символов' })
        }

        const candidate = await User.findOne({ email });

        if(candidate) {
            return res.status(400).json({ message: 'Такой пользователь уже существует' })
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        const user = new User({ name, email, password: hashedPassword })

        await user.save()

        res.status(201).json({ message: 'Пользователь зарегестрирован' })

    } catch (error) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте еще раз'})
    }
})

// /api/auth/login
router.post(
    '/login',
    [
        check('email', 'Введите корректный email').normalizeEmail().isEmail(),
        check('password', 'Введите пароль').exists()
    ], 
    async(req, res) => {
    try {
        const errors = validationResult(req)

        if(!errors.isEmpty()) {
            return res.status(400).json({ 
                errors: errors.array(),
                message: 'Некорректные данные при входе в систему'
             })
        }

        const {name, email, password} = req.body

        const user = await User.findOne({email})

        if(!user) {
            return res.status(400).json({ message: 'Пользователь с таким email не существует' })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch) {
            return res.status(400).json({ message: 'Неверный пароль, попробуйте еще раз' })
        }

        const token = jwt.sign(
            { userId: user.id },
            config.get('jwtSecret'),
            { expiresIn: '1h' }
        )

        res.json({ token, userId: user.id, name, email, password })

       
    } catch (error) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте еще раз'})
    }
})

module.exports = router;