const express = require('express');
const passport = require('../passport');
const router = express.Router();

router.get('/posts', passport.authenticate('vkontakte'), (req, res) => {
    // Use VK API to fetch recent post data
    // ...

    const mockPosts = [
        { id: 1, text: 'This is post 1' },
        { id: 2, text: 'This is post 2' },
        // Add more mock posts as needed...
    ];

    res.json(mockPosts);
});

module.exports = router;
