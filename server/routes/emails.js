const express = require('express');
const router = express.Router();

const Email = require('../models/email');

router.get('/', async (req, res) => {
    const emails = await Email.find();
    res.send(emails);
});

router.get('/:id', async (req, res) => {
    const email = await Email.findById({_id: req.params.id});
    res.send(email);
})

module.exports = router;