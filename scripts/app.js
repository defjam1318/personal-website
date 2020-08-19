import 'popper.js';
import 'bootstrap';
import 'bootstrap/js/dist/util';
import 'handlebars/runtime';
const Sammy = require('sammy');


import * as modules from './modules/index.js';
import * as controllers from './controllers/index.js';
import requestData from './data.js';
import txt from '../text/bio.txt';


const about = require('../templates/about.hbs');
const audio = require('../templates/audio.hbs');
const contact = require('../templates/contact.hbs');
const disco = require('../templates/disco.hbs');
const gallery = require('../templates/gallery.hbs');
const home = require('../templates/home.hbs');
const upcoming = require('../templates/upcoming.hbs');
const video = require('../templates/video.hbs');


window.addEventListener('load', () => {
    const app = Sammy('body', function () {
        // 'https://www.google.com/maps/embed/v1/place?key=AIzaSyCChiTGKnxDKxYAB0fvIk78xqIbVog2nV8&q=St.+Paul's+Chapel+of+Trinity+Church+Wall+Street'
        const appId = '57BC2223-608C-E384-FF26-3BBF8D8DD100';
        const restApi = '1BCC7410-A60B-4367-9130-54260B590E53';
        // this.partialLoader = modules.partialLoader('../templates');
        this.requestData = requestData(appId, restApi);
        // this.toggleBox = modules.toggleBox;
        // this.validator = modules.validator;
        // this.getStorageVar = modules.getStorageVar;
        // this.storageOperator = modules.storageOperator;
        this.navbarChanger = modules.navbarChanger;
        this.fixTime = modules.fixTime;
        this.modalEdit = modules.modalEdit;

        this.gApi = 'AIzaSyCChiTGKnxDKxYAB0fvIk78xqIbVog2nV8';
        this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.about = about;
        this.audio = audio;
        this.contact = contact;
        this.disco = disco;
        this.gallery = gallery;
        this.home = home;
        this.upcoming = upcoming;
        this.video = video;


        this.bio = txt.split('$$$').map(x => x.trim());

        // this.swap = function (content) {
        //     this.$element().hide('fast', 'ease-in', () => html(content).show('slow'));
        // }
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
        // this.get('#/details/:id', controllers.details);

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

    app.run('/');
})