const express = require('express');

const expressConfigurator = require('./config/expressConfig');
const handlebarsConfigurator = require('./config/handlebarsConfig');
const homeController = require('./controllers/homeController');

const app = express();
const PORT = 3000;

expressConfigurator(app);
handlebarsConfigurator(app);

// Routes
app.use(homeController);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})