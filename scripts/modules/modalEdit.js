export function modalEdit() {
    $('#eventModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var eventName = button.data('event-name');
        var groupName = button.data('group-name');
        var alt = button.data('alt');
        var mapCoordinates = button.data('map-coordinates');
        var date = button.data('date');
        var time = button.data('time');
        var eventUrl = button.data('event-url');
        var modal = $(this)
        modal.find('.modal-title').text(eventName);
        const altEl = modal.find('#alt');
        const embedEl = modal.find('#embed');
        const iFrame = embedEl.find('iframe');
        if (alt) {
            altEl.show().text(alt);
            embedEl.hide();
        } else {
            // altEl.show().text('Loading map...');
            modal.find('.spinner-border').show();
            altEl.hide();
            embedEl.show();
            iFrame.attr('src', mapCoordinates);
            iFrame.on('load', function() {
                modal.find('.spinner-border').hide('fast');
                $(this).show('slow', 'ease-in');
            });
        }
        modal.find('.card-title').text(groupName);
        modal.find('.card-text').text(`${date} - ${time}`);
        modal.find('#tix').attr('href', eventUrl);
        return;
    });

    $('#eventModal').on('hide.bs.modal', function(e) {
        var modal = $(this)
        modal.find('.modal-title').empty();
        modal.find('#alt').empty();
        modal.find('#embed > iframe').attr('src', '');
        modal.find('.card-title').empty();
        modal.find('.card-text').empty();
        modal.find('#tix').attr('href', '');
        return;
    });
}