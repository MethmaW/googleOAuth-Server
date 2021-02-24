const express = require('express')
const dotenv = require('dotenv')

//configuring dotenv
dotenv.config()

//setting the app
const app = express()

//setting the port
const port = process.env.PRODUCTION_PORT || process.env.DEV_PORT;

app.get('/', (req, res) => {
    res.send('Works');
});






//listening to the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});