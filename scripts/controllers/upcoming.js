export function upcoming() {
    const headerColor = 'light';
    const calendar = 'active';
    let events;
    $(window).unbind('scroll');

    const today = new Date();
    const body = {
        month: today.getMonth(),
        day: today.getDate(),
        year: today.getFullYear(),
        size: 10
    };
    
    this.app.requestData('events', 'nextEvents', body)
    .then(res => res.json())
        .then(items => {
            if (items.hasOwnProperty('errorData')) {
                const errorMessage = items.message;
                items = null;
                throw new Error(errorMessage);
            }
            events = items
            .map(i => {
                const venue = i.venue.split(' ').join('+').trim();
                const location = i.location.split(' ').join('+').trim();
                const mapCoordinates = `https://www.google.com/maps/embed/v1/place?key=${this.app.gApi}&q=${location},${venue}`;
                const date = new Date(i.dateTime);
                const dateTranslated = `${this.app.months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
                const timeTranslated = `${this.app.fixTime(date.getHours())}:${this.app.fixTime(date.getMinutes())}`;
                return Object.assign(i, { date: dateTranslated, time: timeTranslated, mapCoordinates });
            });
        })
        .catch(err => {
            console.error(err);
        })
        .finally(() => {
            $(window).scrollTop(0);
            const el = this.app.upcoming({ headerColor, calendar, events });
            this.swap(el);
            this.app.modalEdit();
            this.app.navbarChanger(50, 'bg-light');
        });
}