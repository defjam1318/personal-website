export function modalEdit() {
    $('#eventModal').on('show.bs.modal', function (event) {
        const button = $(event.relatedTarget);
        const eventName = button.data('event-name');
        const groupName = button.data('group-name');
        const alt = button.data('alt');
        const mapCoordinates = button.data('map-coordinates');
        const date = button.data('date');
        const time = button.data('time');
        const startDate = new Date(button.data('date-time') * 1000); 
        const endDate = new Date(startDate);
        endDate.setHours(endDate.getHours() + 2);
        const dateTime = startDate.toISOString().replace(/-|:|\.\d\d\d/g,"");
        const dateTimeEnd = endDate.toISOString().replace(/-|:|\.\d\d\d/g,"");
        const eventUrl = button.data('event-url');
        const modal = $(this);
        const href = `http://www.google.com/calendar/render?action=TEMPLATE&text=${eventName}&dates=${dateTime}/${dateTimeEnd}&details=${groupName}&location=${button.data('location')}&trp=false&sprop=&sprop=name:`;
        modal.find('.modal-footer a').attr('href', href);
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
            iFrame.on('load', function () {
                modal.find('.spinner-border').hide('fast');
                $(this).show('slow', 'ease-in');
            });
        }
        modal.find('.card-title').text(groupName);
        modal.find('.card-text').text(`${date} - ${time}`);
        modal.find('#tix').attr('href', eventUrl);
        return;
    });

    $('#eventModal').on('hide.bs.modal', function (e) {
        const modal = $(this)
        modal.find('.modal-title').empty();
        modal.find('#alt').empty();
        modal.find('#embed > iframe').attr('src', '');
        modal.find('.card-title').empty();
        modal.find('.card-text').empty();
        modal.find('#tix').attr('href', '');
        return;
    });
}