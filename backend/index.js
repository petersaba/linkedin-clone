const express = require('express');
require('dotenv').config();
require('./config/config');
const app = express();
const { authMiddleware } = require('./middlewares/auth.middleware');

// app.use(express.json()) did not work so I used express-formidable
const formdidable = require("express-formidable");
app.use(formdidable());


const authRoutes = require('./routes/auth.routes');
app.use('/auth', authRoutes);

const usersRoutes = require('./routes/users.routes');
app.use('/users', authMiddleware, usersRoutes);

const jobsRoutes = require('./routes/jobs.routes');
app.use('/jobs', authMiddleware, jobsRoutes);

app.listen(process.env.PORT_NUMBER, (err) => {
    if(err) console.log(err)

    console.log(`Server is running ${process.env.PORT_NUMBER}`);
})