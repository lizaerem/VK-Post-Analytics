const express = require('express');
const router = express.Router();

router.get('/check-auth', (req, res) => {
    if (req.isAuthenticated()) {
        console.log('request is authenticated')
        res.status(200).json({ authenticated: true });
    } else {
        res.status(401).json({ authenticated: false });
    }
});

module.exports = router;
