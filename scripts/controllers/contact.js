export function contact() {
    const headerColor = 'light';
    const contact = 'active';
    $(window).unbind('scroll');
    // try {
    //     this.items = await (await this.app.requestData('getAll')).json();
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
    //     alert(err);
    // }

    $(window).scrollTop(0);
    const el = this.app.contact({ headerColor, contact });
    this.swap(el);
    this.app.navbarChanger(50, 'bg-light');
}