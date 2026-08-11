require('dotenv').config();
const express = require('express');
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');
const connectDb = require('./utils/db');
const contactRouter = require('./routes/contact-router');

const app = express();

// Security Headers
app.use(helmet());

// Gzip Response Compression for speed optimization
app.use(compression());

// CORS Configuration
const allowedOrigins = [
    "https://yatendra-dev.onrender.com",
    "http://localhost:5173",
    "http://localhost:3000",
];

const corsOptions = {
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps, curl, or server-to-server)
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(null, true); // Permissive CORS for portfolio deployment
        }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

// Health Check Endpoint (Instant 0ms response for Render keep-alive)
app.get(['/health', '/api/health'], (req, res) => {
    res.status(200).json({
        status: 'OK',
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
    });
});

// API Routes
app.use('/api/contact', contactRouter);

// 404 Route Handler
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: 'API Route Not Found',
    });
});

// Global Centralized Error Handler
app.use((err, req, res, next) => {
    console.error('Global Error Handler caught:', err.stack || err);
    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal Server Error',
    });
});

const port = process.env.PORT || 3000;

connectDb()
    .then(() => {
        app.listen(port, () => {
            console.log(`🚀 Portfolio API Server running on port: ${port}`);
        });
    })
    .catch((err) => {
        console.error('Fatal Error during database initialization:', err);
    });