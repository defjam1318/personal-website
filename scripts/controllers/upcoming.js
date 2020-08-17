export function upcoming() {
    const headerColor = 'light';
    const calendar = 'active';

    
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
    
    const el = this.app.upcoming({ headerColor, calendar });
    this.swap(el);
    this.app.navbarChanger(50, 'bg-light');
}