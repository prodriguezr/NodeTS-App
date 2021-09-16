import express, { Application } from 'express';
import exphbs from 'express-handlebars';
import path from 'path';

import { homeRoute, booksRoute } from './routes';

class App {
    private app:Application;

    constructor() {
        this.app = express();

        this.settings();

        this.middlewares();

        this.routes();
    }

    private settings() {
        this.app.set('port', process.env.PORT);
        this.app.set('views', path.join(__dirname, 'views'));

        this.app.engine('.hbs', exphbs({
            extname: '.hbs',
            layoutsDir: path.join(this.app.get('views'), 'layouts'),
            partialsDir: path.join(this.app.get('views'), 'partials'),
            helpers: require('./libs/helpers'),
            defaultLayout: 'main'
        }));

        this.app.set('view engine', '.hbs');
    }

    private middlewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.static('public'));
    }

    private routes() {
        this.app.use('/', homeRoute);
        this.app.use('/books', booksRoute);
    }

    public listen() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server listening on port ${this.app.get('port')}`);
        });
    }
}

const app = new App();
export default app;