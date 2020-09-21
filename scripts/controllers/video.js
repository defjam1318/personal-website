export function video() {
    const headerColor = 'light';
    const media = 'active';
    let vids = [];
    $(window).unbind('scroll');

    // this.app.requestData('videos', 'getAll')
    //     .then(res => res.json())
    //     .then(items => {
    //         if (items.hasOwnProperty('errorData')) {
    //             const errorMessage = items.message;
    //             items = null;
    //             throw new Error(errorMessage);
    //         }
    //         vids = items.slice();
    //     })


    this.app.db.collection('videos').get()
        .then(qs => {
            qs.forEach(doc => {
                if (doc.exists) {
                    vids.push(doc.data());
                }
            });
        })
        .catch(err => {
            console.error(err);
        }).finally(() => {
            $(window).scrollTop(0);
            const el = this.app.video({ vids, headerColor, media });
            this.swap(el);
            this.app.spinner();
            this.app.navbarChanger(50, 'bg-light');
        });


}