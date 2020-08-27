export function gallery() {
    const headerColor = 'light';
    const media = 'active';
    let pics;
    $(window).unbind('scroll');
    
    this.app.requestData('images', 'getAll')
    .then(res => res.json())
        .then(items => {
            if (items.hasOwnProperty('errorData')) {
                const errorMessage = items.message;
                items = null;
                throw new Error(errorMessage);
            }
            pics = items.reduce((a, c, i) => {
                c.index = i;
                return a.concat(c);
            }, []);
        })
        .catch(err => {
            console.error(err);
        }).finally(() => {
            const indexCount = pics.length - 1;
            $(window).scrollTop(0);
            const el = this.app.gallery({ pics, headerColor, media });
            this.swap(el);
            this.app.navbarChanger(50, 'bg-light');
            this.app.carouselControl(indexCount);
        });
}