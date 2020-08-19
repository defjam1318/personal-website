export function audio() {
    const headerColor = 'light';
    const media = 'active';
    let audios;
    $(window).unbind('scroll');
    
    this.app.requestData('audios', 'getAll')
    .then(res => res.json())
    .then(items => {
        if (items.hasOwnProperty('errorData')) {
            const errorMessage = items.message;
            items = null;
            throw new Error(errorMessage);
        }
            audios = items.slice();
        })
        .catch(err => {
            console.error(err);
        }).finally(() => {
            $(window).scrollTop(0);
            const el = this.app.audio({ audios, headerColor, media });
            this.swap(el);
            this.app.navbarChanger(50, 'bg-light');
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