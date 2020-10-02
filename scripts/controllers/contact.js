export function contact() {
    const headerColor = 'light';
    const contact = 'active';
    // $(window).unbind('scroll');
    const el = this.app.contact({ headerColor, contact });
    this.swap(el);
    $(window).scrollTop(0);
    // this.app.navbarChanger(50, 'bg-light');

    $('#message').keydown(function (e) {
        setTimeout(() => {
            const textLength = e.target.textLength;
            $('#c-count').text(`${textLength}/500`);
        }, 50);
    });

    $('.form-control').on('focusout', function(e) {
        if (!$(this).val()) {
            $(this).addClass('red-border');
            $(this).siblings('.validation-feedback').show('fast').text('Required filed');
            return;
        }
        if ($(this).is('#email') && !$(this).val().includes('@')) {
            $(this).addClass('red-border');
            $(this).siblings('.validation-feedback').show('fast').text('Enter a valid email address');
            return;
        } 
    });

    $('.form-control').on('focusin', function(e) {
            $(this).removeClass('red-border');
            $(this).siblings('.validation-feedback').hide('fast');
            return;
    });

}