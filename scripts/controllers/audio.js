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
            this.app.spinner();
            this.app.navbarChanger(50, 'bg-light');
        });

}