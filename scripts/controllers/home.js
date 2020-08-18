export function home() {
    const headerColor = 'dark';
    const home = 'active';
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
                    const date = new Date(i.dateTime);
                    const dateTranslated = `${this.app.months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
                    const timeTranslated = `${this.app.fixTime(date.getHours())}:${this.app.fixTime(date.getMinutes())}`;
                    return Object.assign(i, { date: dateTranslated, time: timeTranslated });
                });
            latest = events[0];
        })
        .catch(err => {
            console.error(err);
        })
        .finally(() => {
            const el = this.app.home({ miniBio, headerColor, home, events, latest });
            this.swap(el);
            this.app.navbarChanger(200, 'bg-dark');
        });

}