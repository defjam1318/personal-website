import * as modules from './modules/index.js';
import * as controllers from './controllers/index.js';
import requestData from './data.js';


window.addEventListener('load', () => {
    const app = Sammy('body', function () {
        this.use('Handlebars', 'hbs');

        const appId = 'D55AF237-11BA-E8A9-FF93-AF1029A07C00';
        const restApi = '7D296D5E-01C9-4B4A-B49D-54378977D3A7';
        const dataTable = '';

        this.partialLoader = modules.partialLoader('../templates');
        // this.requestData = requestData(appId, restApi, dataTable);
        // this.toggleBox = modules.toggleBox;
        // this.validator = modules.validator;
        this.getStorageVar = modules.getStorageVar;
        this.storageOperator = modules.storageOperator;
        this.navbarChanger = modules.navbarChanger;

        // this.before({except: {verb:'post'}}, () => this.toggleBox('loadingBox'));
        // this.before({}, partialLoader);

        this.get('/', controllers.home);
        this.get('#/home', controllers.home);
        this.get('/index.html', controllers.home);

        this.get('#/about', controllers.about);
        this.get('#/contact', controllers.contact);
        this.get('#/gallery', controllers.gallery);
        this.get('#/audio', controllers.audio);
        this.get('#/video', controllers.video);
        this.get('#/upcoming', controllers.upcoming);
        this.get('#/disco', controllers.disco);




        // this.get('#/cinema', cinema);
        // this.get('#/my-movies', myMovies);
        this.get('#/details/:id', controllers.details);

        // this.get('#/create', controllers.create);
        // this.get('#/edit/:id', controllers.edit);
        // this.get('#/delete/:id', controllers.deleteItem);
        // this.get('#/join/:id', controllers.join);
        // this.get('#/profile/:id', controllers.profile);
        // this.get('#/buy/:id', buy);

        // this.post('#/login', (ctx) => { controllers.loginPost.call(ctx) });
        // this.post('#/register', (ctx) => { controllers.registerPost.call(ctx) });
        // this.post('#/create', (ctx) => { controllers.createPost.call(ctx) });
        // this.post('#/edit/:id', (ctx) => { controllers.editPost.call(ctx) });
        // this.post('#/delete/:id', (ctx) => { controllers.deletePost.call(ctx) });


    });

    app.run();
})