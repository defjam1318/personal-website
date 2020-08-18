export function gallery() {
    const headerColor = 'light';
    const media = 'active';
    let pics;
    $(window).scrollTop(0);
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
            const indexes = pics.reduce((a, _c, i) => a.concat(i), []);
            const el = this.app.gallery({ pics, indexes, headerColor, media });
            this.swap(el);
            this.app.navbarChanger(50, 'bg-light');
            document.querySelector('.carousel-inner').addEventListener('contextmenu', (e) => {
                if (e.target.nodeName === 'IMG') {
                    e.preventDefault();
                }
            });
        });


    // try {
    //     this.items = await (await this.app.requestData('images', 'getAll')).json();
    //     this.items = this.items.reduce((a, c, i) => {
    //         c.index = i;
    //         return a.concat(c);
    //     }, []);
    //     console.log(this.items);
    //     // this.app.toggleBox('loadingBox');
    //     if (this.items.hasOwnProperty('errorData')) {
    //         const errorMessage = this.items.message;
    //         this.items = null;
    //         throw new Error(errorMessage);
    //     }
    //     // this.items.sort((a, b) => b.peopleInterested - a.peopleInterested);
    //     // this.partial('../../templates/cinema.hbs', { username, items, search });
    //     this.indexes = this.items.reduce((a, _c, i) => a.concat(i), []);
    // } catch (err) {
    //     // this.app.toggleBox('errorBox', err);
    //     console.error(err);
    // }

    // this.partial('../../templates/gallery.hbs').then(() => {
    //     this.app.navbarChanger(50, 'bg-light');
    //     document.querySelector('.carousel-inner').addEventListener('contextmenu', (e) => {
    //         if (e.target.nodeName === 'IMG') {
    //             e.preventDefault();
    //         }
    //     })
    // });
}