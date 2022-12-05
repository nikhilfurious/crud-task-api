const express = require('express')
const app = express()
const mongoose = require ('./database/mongoose')


app.listen(3000, function () {
    console.log(`Example app listening on port 3000`);
})