require('dotenv').config();

const express = require('express');
const session = require('express-session');
const passport = require('./passport');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
app.use(session({ secret: process.env.VK_APP_SECRET, resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

const checkAuthRoute = require('./routes/checkAuth');
app.use('/api', checkAuthRoute);

const postsRoute = require('./routes/posts');
app.use('/api', postsRoute);

// Other middleware and routes here...

// VK authentication route
app.get('/auth/vk', passport.authenticate('vkontakte'));

app.get('/auth/vk/callback',
    passport.authenticate('vkontakte', { failureRedirect: '/' }),
    (req, res) => {
        console.log('VK authentication successful');
        res.redirect('http://localhost:3000');
    }
);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
