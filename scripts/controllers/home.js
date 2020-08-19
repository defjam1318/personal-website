export function home() {
    const headerColor = 'dark';
    const home = 'active';
    const isHome = ' home';
    const miniBio = this.app.bio[0];
    let events;
    let latest;
    $(window).unbind('scroll');


    this.app.requestData('events', 'sort')
        .then(res => res.json())
        .then(items => {
            if (items.hasOwnProperty('errorData')) {
                const errorMessage = items.message;
                items = null;
                throw new Error(errorMessage);
            }
            events = items.slice(0, 3)
                .map(i => {
                    const venue = i.venue.split(' ').join('+').trim();
                    const location = i.location.split(' ').join('+').trim();
                    const mapCoordinates = `https://www.google.com/maps/embed/v1/place?key=${this.app.gApi}&q=${location},${venue}`;
                    const date = new Date(i.dateTime);
                    const dateTranslated = `${this.app.months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
                    const timeTranslated = `${this.app.fixTime(date.getHours())}:${this.app.fixTime(date.getMinutes())}`;
                    return Object.assign(i, { date: dateTranslated, time: timeTranslated, mapCoordinates });
                });
            latest = events[0];
        })
        .catch(err => {
            console.error(err);
        })
        .finally(() => {
            $(window).scrollTop(0);
            const el = this.app.home({ miniBio, headerColor, home, events, latest, isHome });
            this.swap(el);
            this.app.modalEdit();
            this.app.navbarChanger(50, 'bg-dark');
        });

}