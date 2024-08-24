require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectDb = require('./utils/db')
const app = express()

const contactRouter = require('./routes/contact-router')

const corsOptions = {
    origin: ["https://yatendra-dev.onrender.com", "http://localhost:5173"], // Allow both production and local dev origins
    methods: "GET,POST,DELETE,PUT,PATCH,HEAD",
    credentials: true
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/contact', contactRouter)

const port = process.env.PORT || 3000

connectDb()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running at port : ${port}`)
        })
    })
    .catch((err) => {
        console.log("Error in Connection with Backend");
    })