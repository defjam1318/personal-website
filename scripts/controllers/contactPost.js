export function contactPost(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    const body = { name: $('#name').val(), email: $('#email').val(), subject: $('#subject').val(), message: $('#message').val() }
    if (!body.name || !body.email || !body.subject || !body.message) {
        $('.alert-danger').show('fast').text('Please fill out all fields');
        setTimeout(() => {
            $('.alert-danger').hide('fast')
        }, 2500);
        return;
    }
    if (!body.email.includes('@') || !body.email.includes('.')) {
        $('.alert-danger').show('fast').text('Invalid email address');
        setTimeout(() => {
            $('.alert-danger').hide('fast')
        }, 2500);
        return;
    }
    $('button').attr('disabled', true);
    $('.form-control').each(function () {
        $(this).val('');
    });
    $('#c-count').text('0/500');
    $('.alert-info').show();

    fetch('https://us-central1-toma-iliev.cloudfunctions.net/sendEmail', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) })
        .then(res => res.json())
        .then(data => {
            $('.alert-info').hide();
            $('button').removeAttr('disabled');
            if (!data.messageId) {
                throw new Error(data.message);
            } else {
                $('.alert-success').show();
                setTimeout(() => {
                    $('.alert-success').hide('fast')
                }, 2500);   
            }
        }).catch(err => {
            $('.alert-info').hide();
            $('button').removeAttr('disabled');
            $('.alert-danger').show().text(err.message);
            setTimeout(() => {
                $('.alert-danger').hide('fast');
            }, 2500);
        });
}