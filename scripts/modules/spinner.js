export function spinner() {
    $('.embed-responsive iframe').each(function() {
        $(this).hide();
        $(this).on('load', function() {
            $(this).parent().find('.spinner-border').hide('fast');
            $(this).show();
        });
    });
}