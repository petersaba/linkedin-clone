const express = require('express');
require('dotenv').config();
require('./config/config')

const app = express();

app.use(express.json());

app.listen(process.env.PORT_NUMBER, (err) => {
    if(err) console.log(err)

    console.log(`Server is running ${process.env.PORT_NUMBER}`);
})