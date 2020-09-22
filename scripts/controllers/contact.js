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

    // $('#contact-form').on('submit',  (e) => {
    //     e.stopPropagation();
    //     // const form = e.target;
    //     // fetch(form.action, {
    //     //     method: form.method,
    //     //     body: JSON.stringify(new FormData(form)),
    //     //     headers: { 'content-type': 'application/json'}
    //     // })
    //     // .then(res => res.json())
    //     // .then(data => {
    //     //     $('.alert-info').hide();
    //     //     $('button').removeAttr('disabled');
    //     //     if (data.messageId) {
    //     //         $('.alert-success').show();
    //     //         setTimeout(() => {
    //     //             $('.alert-success').hide('fast')
    //     //         }, 1500);
    //     //     } else {
    //     //         $('.alert-danger').show().text(data.message);
    //     //         setTimeout(() => {
    //     //             $('.alert-danger').hide('fast')
    //     //         }, 1500);
    //     //     }
    //     // }).catch(err => {
    //     //     console.log(err);
    //     //     $('.alert-info').hide();
    //     //     $('button').removeAttr('disabled');
    //     //     $('.alert-danger').show().text(err);
    //     //     setTimeout(() => {
    //     //         $('.alert-danger').hide('fast')
    //     //     }, 1500);
    //     // });
        
    //     setTimeout(() => {
    //         this.redirect('/');
    //     }, 1000);
    // })
}