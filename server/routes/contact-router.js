const Contact = require('../models/contact');
const express = require('express')
const router = express.Router();
router.post('/', async (req, res) => {
    const { name, email, phone, message } = req.body;

    try {
        const newContact = new Contact({
            name,
            email,
            phone,
            message,
        });

        const contact = await newContact.save();
        // console.log(newContact)
        res.status(201).json(contact);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;