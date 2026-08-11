const mongoose = require('mongoose');

const connectDb = async () => {
    const URI = process.env.MONGODB_URI;
    if (!URI) {
        console.error('CRITICAL ERROR: MONGODB_URI environment variable is missing.');
        process.exit(1);
    }

    try {
        const conn = await mongoose.connect(URI, {
            maxPoolSize: 10, // Maintain up to 10 socket connections for concurrency
            serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
            socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
        });
        console.log(`Database Connection Successful: ${conn.connection.host}`);
    } catch (error) {
        console.error('Database connection FAILED:', error.message);
        process.exit(1);
    }
};

module.exports = connectDb;