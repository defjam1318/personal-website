export function spinner() {
    $('.embed-responsive iframe').each(function() {
        $(this).on('load', function() {
            $(this).parent().find('.spinner-border').hide();
        });
    });
}