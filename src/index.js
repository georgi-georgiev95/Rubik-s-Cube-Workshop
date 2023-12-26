const express = require('express');

const expressConfigurator = require('./config/express');
const handlebarsConfigurator = require('./config/handlebars');

const app = express();
const PORT = 3000;

expressConfigurator(app);
handlebarsConfigurator(app);

// Routes 
app.get('/', (req, res) => {
    res.render('index');
})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})