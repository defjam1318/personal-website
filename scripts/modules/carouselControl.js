export function carouselControl(indexCount) {
    $('.gallery').contextmenu((e) => {
        e.preventDefault();
    });
    $('#image-0').removeClass('hidden');
    $('#caption-0').removeClass('hidden');
    let currentIndex = 0;
    $('.control-prev').click((e) => {
        $(`#image-${currentIndex}`).addClass('hidden');
        $(`#caption-${currentIndex}`).addClass('hidden');

        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = indexCount;
        }
        $(`#image-${currentIndex}`).removeClass('hidden');
        $(`#caption-${currentIndex}`).removeClass('hidden');

    });
    $('.control-next').click((e) => {
        $(`#image-${currentIndex}`).addClass('hidden');
        $(`#caption-${currentIndex}`).addClass('hidden');
        currentIndex++;
        if (currentIndex > indexCount) {
            currentIndex = 0;
        }
        $(`#image-${currentIndex}`).removeClass('hidden');
        $(`#caption-${currentIndex}`).removeClass('hidden');
    });
}