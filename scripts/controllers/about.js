export function about() {
    const headerColor = 'light';
    const about = 'active';
    const bio = this.app.bio;
    // $(window).unbind('scroll');
    const el = this.app.about({ headerColor, about, bio });
    this.swap(el);
    window.scroll(0, 0);

    // this.app.navbarChanger(50, 'bg-light');
}