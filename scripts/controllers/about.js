export function about() {
    const headerColor = 'light';
    const about = 'active';
    $(window).unbind('scroll');
    const bio = this.app.bio;
    const el = this.app.about({ headerColor, about, bio });
    this.swap(el);

    this.app.navbarChanger(50, 'bg-light');
}