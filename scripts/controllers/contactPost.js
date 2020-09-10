export function contactPost() {
    const body = { name, email, subject, message } = this.params;
    if (!name || !email || !subject || !message) {
        $('.alert-danger').show('fast').text('All fields are required');
        setTimeout(() => {
            $('.alert-danger').hide('fast')
        }, 1500);
        return;
    }

    $('button').attr('disabled', true);
    $('.form-control').each(function () {
        $(this).val('');
    });
    $('#c-count').text('0/500');
    $('.alert-info').show();

    this.app.requestData(null, 'sendEmail', body)
        .then(res => res.json())
        .then(data => {
            $('.alert-info').hide();
            $('button').removeAttr('disabled');
            if (data.accepted.length === 1) {
                $('.alert-success').show();
                setTimeout(() => {
                    $('.alert-success').hide('fast')
                }, 1500);
            }
        }).catch(err => {
            $('.alert-info').hide();
            $('button').removeAttr('disabled');
            $('.alert-danger').show().text(err);
            setTimeout(() => {
                $('.alert-danger').hide('fast')
            }, 1500);
        });
}