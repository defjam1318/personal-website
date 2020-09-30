export function carouselControl(indexCount) {

    function toggleControls(e) {
        e.preventDefault();
        $(`#caption-${currentIndex}`).css('opacity') == 0
            ? [$(`#caption-${currentIndex}`), $('.control-prev'), $('.control-next')].forEach(i => $(i).animate({ opacity: 1 }, 300))
            : [$(`#caption-${currentIndex}`), $('.control-prev'), $('.control-next')].forEach(i => $(i).animate({ opacity: 0 }, 300))
        return;
    }

    $('.gallery').contextmenu((e) => {
        e.preventDefault();
    });
    $('#image-0').removeClass('hidden').click(toggleControls);
    $('#caption-0').removeClass('hidden');
    let currentIndex = 0;
    $('.control-prev').click((e) => {
        e.stopPropagation();
        $(`#image-${currentIndex}`).addClass('hidden');
        $(`#caption-${currentIndex}`).addClass('hidden');

        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = indexCount;
        }
        $(`#image-${currentIndex}`).removeClass('hidden');
        $(`#caption-${currentIndex}`).removeClass('hidden');
        $(`#image-${currentIndex}`).click(toggleControls);
        
    });
    $('.control-next').click((e) => {
        e.stopPropagation();
        $(`#image-${currentIndex}`).addClass('hidden');
        $(`#caption-${currentIndex}`).addClass('hidden');
        currentIndex++;
        if (currentIndex > indexCount) {
            currentIndex = 0;
        }
        $(`#image-${currentIndex}`).removeClass('hidden');
        $(`#caption-${currentIndex}`).removeClass('hidden');
        $(`#image-${currentIndex}`).click(toggleControls);
    });
}