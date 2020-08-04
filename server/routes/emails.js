const express = require('express');
const router = express.Router();

const Email = require('../models/email');

router.get('/', async (req, res) => {
    const emails = await Email.find();
    res.send(emails);
});

module.exports = router;