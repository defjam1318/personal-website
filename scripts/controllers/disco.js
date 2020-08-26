export function disco() {
    const headerColor = 'light';
    const disco = 'active';
    let recs;
    $(window).unbind('scroll');

    this.app.requestData('recs', 'getAll')
    .then(res => res.json())
        .then(items => {
            if (items.hasOwnProperty('errorData')) {
                const errorMessage = items.message;
                items = null;
                throw new Error(errorMessage);
            }
            recs = items.slice();
        })
        .catch(err => {
            console.error(err);
        }).finally(() => {
            $(window).scrollTop(0);
            const el = this.app.disco({ recs, headerColor, disco });
            this.swap(el);
            this.app.navbarChanger(50, 'bg-light');
        });
}