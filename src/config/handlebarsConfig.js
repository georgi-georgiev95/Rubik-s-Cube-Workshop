const handlebars = require('express-handlebars');

function handlebarsConfigurator(app) {
    app.engine('hbs', handlebars({
        extname: 'hbs',
    }));
    app.set('view engine', 'hbs');
    app.set('views', 'src/views');
}

module.exports = handlebarsConfigurator;