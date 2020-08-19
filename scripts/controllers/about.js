export function about() {
    const headerColor = 'light';
    const about = 'active';
    $(window).scrollTop(0);
    const bio = this.app.bio;
    $(window).unbind('scroll');
    const el = this.app.about({ headerColor, about, bio });
    this.swap(el);

    this.app.navbarChanger(50, 'bg-light');
}