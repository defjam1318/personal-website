export function audio() {
    const headerColor = 'light';
    const media = 'active';
    let audios = [];
    // $(window).unbind('scroll');


    // this.app.requestData('audios', 'getAll')
    // .then(res => res.json())
    // .then(items => {
    //     if (items.hasOwnProperty('errorData')) {
    //         const errorMessage = items.message;
    //         items = null;
    //         throw new Error(errorMessage);
    //     }
    //         audios = items.slice();
    //     })
    this.app.db.collection('audios').get()
        .then(qs => {
            qs.forEach(doc => {
                if (doc.exists) {
                    audios.push(doc.data());
                }
            });
        })
        .catch(err => {
            console.error(err);
        }).finally(() => {
            const el = this.app.audio({ audios, headerColor, media });
            this.swap(el);
            $(window).scrollTop(0);
            this.app.spinner();
            // this.app.navbarChanger(50, 'bg-light');
        });

}