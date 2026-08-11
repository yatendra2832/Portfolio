const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');
const rateLimit = require('express-rate-limit');

// Rate Limiter: Max 5 submissions per 15 minutes per IP
const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: {
        success: false,
        message: 'Too many contact requests from this IP. Please try again after 15 minutes.',
    },
    standardHeaders: true,
    legacyHeaders: false,
});

// POST /api/contact - Create a new contact submission
router.post('/', contactLimiter, async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        // Input Validation
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: 'Name, email, and message fields are required.',
            });
        }

        // Basic Email Format Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Please provide a valid email address.',
            });
        }

        // Sanitize string inputs
        const sanitizedName = String(name).trim();
        const sanitizedEmail = String(email).trim().toLowerCase();
        const sanitizedPhone = phone ? String(phone).trim() : '';
        const sanitizedMessage = String(message).trim();

        const newContact = new Contact({
            name: sanitizedName,
            email: sanitizedEmail,
            phone: sanitizedPhone,
            message: sanitizedMessage,
        });

        const savedContact = await newContact.save();

        return res.status(201).json({
            success: true,
            message: 'Your message has been sent successfully!',
            data: savedContact,
        });
    } catch (err) {
        console.error('Error in Contact POST handler:', err.message);
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error while saving contact message.',
        });
    }
});

module.exports = router;