export function home() {
    const headerColor = 'dark';
    const home = 'active';
    const isHome = ' home';
    const miniBio = this.app.bio[0];
    let events = [];
    let featuredRec;
    let featuredAudio;
    let featuredVideo;
    $(window).unbind('scroll');

    const today = new Date();
    // const body = {
    //     dateTime: today.valueOf(),
    //     size: 3
    // };

    Promise.all([
        this.app.db.collection('events').where('dateTime', '>', today).limit(3).get(),
        this.app.db.collection('recs').where('featured', '==', true).limit(1).get(),
        this.app.db.collection('audios').where('featured', '==', true).limit(1).get(),
        this.app.db.collection('videos').where('featured', '==', true).limit(1).get(),
    ])
        .then(([qsEvents, qsRecs, qsAudios, qsVideos]) => {
            qsEvents.forEach(doc => {
                if (doc.exists) {
                    const newDoc = doc.data();
                    const venue = newDoc.venue.split(' ').join('+').trim();
                    const location = newDoc.location.split(' ').join('+').trim();
                    const mapCoordinates = `https://www.google.com/maps/embed/v1/place?key=${this.app.gApi}&q=${venue},${location}`;
                    const date = new Date(newDoc.dateTime.seconds * 1000);
                    const dateTranslated = `${this.app.months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
                    const timeTranslated = `${this.app.fixTime(date.getHours())}:${this.app.fixTime(date.getMinutes())}`;
                    events.push(Object.assign(newDoc, { date: dateTranslated, time: timeTranslated, mapCoordinates }));
                }
            });
            qsRecs.forEach(doc => {
                if (doc.exists) {
                    featuredRec = doc.data();
                }
            });
            qsAudios.forEach(doc => {
                if (doc.exists) {
                    featuredAudio = doc.data();
                }
            });
            qsVideos.forEach(doc => {
                if (doc.exists) {
                    featuredVideo = doc.data();
                }
            });
        })
        .catch(err => {
            console.error(err);
        })
        .finally(() => {
            $(window).scrollTop(0);
            const el = this.app.home({ miniBio, headerColor, home, events, featuredRec, featuredAudio, featuredVideo, isHome });
            this.swap(el);
            this.app.spinner();
            this.app.modalEdit();
            this.app.navbarChanger(50, 'bg-dark');
        });

        // Promise.all([
        //     this.app.requestData('events', 'nextEvents', body),
        //     this.app.requestData('recs', 'featured'),
        //     this.app.requestData('audios', 'featured'),
        //     this.app.requestData('videos', 'featured')
        // ])
        //     .then(res => Promise.all(res.map(x => x.json())))
        //     .then(([items, rec, audio, video]) => {
        //         if (items.hasOwnProperty('errorData')) {
        //             const errorMessage = items.message;
        //             items = null;
        //             throw new Error(errorMessage);
        //         }
        //         events = items
        //             .map(i => {
        //                 const venue = i.venue.split(' ').join('+').trim();
        //                 const location = i.location.split(' ').join('+').trim();
        //                 const mapCoordinates = `https://www.google.com/maps/embed/v1/place?key=${this.app.gApi}&q=${venue},${location}`;
        //                 const date = new Date(i.dateTime);
        //                 const dateTranslated = `${this.app.months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
        //                 const timeTranslated = `${this.app.fixTime(date.getHours())}:${this.app.fixTime(date.getMinutes())}`;
        //                 return Object.assign(i, { date: dateTranslated, time: timeTranslated, mapCoordinates });
        //             });
        //         featuredRec = rec[0];
        //         featuredAudio = audio[0];
        //         featuredVideo = video[0];
        //     })

}