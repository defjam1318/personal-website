export function loadEmbed(e) {
    const target = $(e.target);
    const container = target.closest('.video-placeholder');
    if (target.hasClass('channel-image') || !container.length) { return; }
    container.toggleClass('video-placeholder');
    const link = container.data('yt-url');
    container.html(`<iframe class="card-img-top" src="${link}"
    frameborder="0" allow="autoplay 'src'; encrypted-media; fullscreen;" ></iframe>`);
    setTimeout(() => {
        container.trigger('click');
    }, 3000);
}