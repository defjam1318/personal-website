export function audio() {
    const headerColor = 'light';
    const media = 'active';
    $(window).unbind('scroll');

    this.app.requestData('audios', 'getAll')
        .then(res => res.json())
        .then(items => {
            if (items.hasOwnProperty('errorData')) {
                const errorMessage = items.message;
                items = null;
                throw new Error(errorMessage);
            }
            const el = this.app.audio({ items, headerColor, media });
            this.swap(el);
        })
        .catch(err => {
            console.error(err);
        });


    // try {
    //     this.items = await (await this.app.requestData('audios', 'getAll')).json();
    //     // this.app.toggleBox('loadingBox');
    //     if (this.items.hasOwnProperty('errorData')) {
    //         const errorMessage = this.items.message;
    //         this.items = null;
    //         throw new Error(errorMessage);
    //     }
    //     // this.items.sort((a, b) => b.peopleInterested - a.peopleInterested);
    //     // this.partial('../../templates/cinema.hbs', { username, items, search });
    // } catch (err) {
    //     // this.app.toggleBox('errorBox', err);
    //     console.error(err);
    // }


}