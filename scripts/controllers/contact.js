export function contact() {
    const headerColor = 'light';
    const contact = 'active';
    $(window).unbind('scroll');
    $(window).scrollTop(0);
    const el = this.app.contact({ headerColor, contact });
    this.swap(el);
    this.app.navbarChanger(50, 'bg-light');

    $('#message').keydown(function (e) {
        setTimeout(() => {
            const textLength = e.target.textLength;
            $('#c-count').text(`${textLength}/500`);
        }, 50);
    });
}