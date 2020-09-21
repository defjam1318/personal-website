import 'popper.js';
import 'bootstrap';
import 'bootstrap/js/dist/util';
import 'handlebars/runtime';
const Sammy = require('sammy');


import * as modules from './modules/index.js';
import * as controllers from './controllers/index.js';
import { keys, firebaseConfig } from './envKeys';
import requestData from './data.js';
import txt from '../text/bio.txt';
import * as firebase from "firebase/app";
firebase.initializeApp(firebaseConfig);
import 'firebase/firestore';
// const db = firebase.firestore();




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
        
        this.db = firebase.firestore();
        this.requestData = requestData(keys.appId, keys.restApi);
        this.navbarChanger = modules.navbarChanger;
        this.fixTime = modules.fixTime;
        this.modalEdit = modules.modalEdit;
        this.spinner = modules.spinner;
        this.carouselControl = modules.carouselControl;

        this.gApi = keys.gApiKey;
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

        this.post('#/message', (ctx) => { controllers.contactPost.call(ctx) });

    });

    app.run('/');
})