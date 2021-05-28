const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const route = require('./routes/auth.route');
const post = require('./routes/post.route');
const userPosts = require('./routes/userPosts.route')

const app = express();
app.use(express.json({ extended: true }));
const PORT = config.get('port') || 5000;

app.use('/api/auth', route);
app.use('/api/posts', post);
app.use('/api/posts', userPosts);

async function start() {
    
    try {
        await mongoose.connect(config.get('mongoURI'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
        app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`))
    } catch (error) {
        console.log('Server Error', error.message)
        process.exit(1)
    }
}

start()

