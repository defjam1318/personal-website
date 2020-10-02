export function video() {
    const headerColor = 'light';
    const media = 'active';
    let vids = [];
    // $(window).unbind('scroll');

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
            const el = this.app.video({ vids, headerColor, media });
            this.swap(el);
            $(window).scrollTop(0);
            this.app.spinner();
            $('.yt-embed').on('click', this.app.loadEmbed);
            // this.app.navbarChanger(50, 'bg-light');
        });


}