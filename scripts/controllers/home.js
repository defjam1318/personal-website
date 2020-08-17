export function home() {
    const headerColor = 'dark';
    const home = 'active';
    const miniBio = this.app.bio[0];
    $(window).unbind('scroll');

    function fixTime(num) {
        if (num.toString().length < 2) {
            return `0${num}`
        }
        return num;
    }

    this.app.requestData('events', 'sort')
        .then(res => res.json())
        .then(items => {
            if (items.hasOwnProperty('errorData')) {
                const errorMessage = items.message;
                items = null;
                throw new Error(errorMessage);
            }
            const events = items.slice(0, 3)
                .map(i => {
                    const date = new Date(i.dateTime);
                    const dateTranslated = `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`;
                    const timeTranslated = `${fixTime(date.getHours())}:${fixTime(date.getMinutes())}`;
                    return Object.assign(i, { date: dateTranslated, time: timeTranslated });
                });
            const latest = events[0];
            const el = this.app.home({ miniBio, headerColor, home, events, latest });
            this.swap(el);
            this.app.navbarChanger(200, 'bg-dark');
        })
        .catch(err => {
            console.error(err);
        });

}