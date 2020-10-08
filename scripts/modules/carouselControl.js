export function carouselControl(indexCount) {
    let isHidden = false;
    function toggleControls(e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        isHidden
            ? [$(`#caption-${currentIndex}`), $('.control-prev'), $('.control-next')].forEach(i => $(i).animate({ opacity: 1 }, 300))
            : [$(`#caption-${currentIndex}`), $('.control-prev'), $('.control-next')].forEach(i => $(i).animate({ opacity: 0 }, 300));
        isHidden = !isHidden;
        return;
    }

    $('.gallery').on('contextmenu',(e) => {
        e.preventDefault();
    });
    $('#image-0').removeClass('hidden').on('click touch', toggleControls);
    $('#caption-0').removeClass('hidden');
    let currentIndex = 0;
    $('.control-prev').click((e) => {
        e.stopImmediatePropagation();
        $(`#image-${currentIndex}`).addClass('hidden');
        $(`#caption-${currentIndex}`).addClass('hidden');
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = indexCount;
        }
        $(`#image-${currentIndex}`).removeClass('hidden');
        $(`#caption-${currentIndex}`).removeClass('hidden');
        $(`#caption-${currentIndex}`).css('opacity', 1);
        if (isHidden) {
            $('.control-prev').css('opacity', 1);
            $('.control-next').css('opacity', 1);
            isHidden = false;
        }
        $(`#image-${currentIndex}`).on('click touch', toggleControls);

    });
    $('.control-next').click((e) => {
        e.stopImmediatePropagation();
        $(`#image-${currentIndex}`).addClass('hidden');
        $(`#caption-${currentIndex}`).addClass('hidden');
        currentIndex++;
        if (currentIndex > indexCount) {
            currentIndex = 0;
        }
        $(`#image-${currentIndex}`).removeClass('hidden');
        $(`#caption-${currentIndex}`).removeClass('hidden');
        $(`#caption-${currentIndex}`).css('opacity', 1);
        if (isHidden) {
            $('.control-prev').css('opacity', 1);
            $('.control-next').css('opacity', 1);
            isHidden = false;
        }
        $(`#image-${currentIndex}`).on('click touch', toggleControls);
    });
}