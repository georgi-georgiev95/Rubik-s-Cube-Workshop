const express = require('express');

const expressConfigurator = require('./config/expressConfig');
const handlebarsConfigurator = require('./config/handlebarsConfig');
const dbConnect = require('./config/dbConfig');
const routes = require('./routes');

const app = express();

const PORT = 3000;

expressConfigurator(app);
handlebarsConfigurator(app);

dbConnect()
    .then(() => console.log('Connected to database!'))
    .catch((err) => console.error(err));


app.use(routes);

app.listen(PORT, () => { console.log(`Server is running on port: ${PORT}`); });