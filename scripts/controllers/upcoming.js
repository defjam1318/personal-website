export function upcoming() {
    const headerColor = 'light';
    const calendar = 'active';
    let events;

    this.app.requestData('events', 'sort')
        .then(res => res.json())
        .then(items => {
            if (items.hasOwnProperty('errorData')) {
                const errorMessage = items.message;
                items = null;
                throw new Error(errorMessage);
            }
            events = items
                .map(i => {
                    const date = new Date(i.dateTime);
                    const dateTranslated = `${this.app.months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
                    const timeTranslated = `${this.app.fixTime(date.getHours())}:${this.app.fixTime(date.getMinutes())}`;
                    return Object.assign(i, { date: dateTranslated, time: timeTranslated });
                });
        })
        .catch(err => {
            console.error(err);
        })
        .finally(() => {
            const el = this.app.upcoming({ headerColor, calendar, events });
            this.swap(el);
            this.app.navbarChanger(50, 'bg-light');
        });
}