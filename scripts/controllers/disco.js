export function disco() {
    const headerColor = 'light';
    const disco = 'active';
    let recs = [];
    $(window).unbind('scroll');

    this.app.db.collection('recs').orderBy('featured', 'desc').get()
        .then(qs => {
            qs.forEach(doc => {
                if (doc.exists) {
                    recs.push(doc.data());
                }
            });
            recs = recs.reduce((a, c, i) => {
                if (i % 2 === 0) {
                    a.push([c]);
                    return a;
                }

                a[Math.floor(i / 2)].push(c);
                return a;
            }, []);
        }).catch(err => {
            console.error(err);
        }).finally(() => {
            $(window).scrollTop(0);
            console.log(recs);
            const el = this.app.disco({ recs, headerColor, disco });
            this.swap(el);
            this.app.navbarChanger(50, 'bg-light');
        });

}