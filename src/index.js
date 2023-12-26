// const env = process.env.NODE_ENV || 'development';

// const config = require('./config/config')[env];
// const app = require('express')();

// require('./config/express')(app);
// require('./config/routes')(app);

// app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`));

const express = require('express');

const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
    res.send('Hello from express!');
})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})