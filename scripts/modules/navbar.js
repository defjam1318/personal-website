export function navbarChanger(height, className) {
    let lastScrollTop = 0;
    let scrolling = false;
    const navbar = document.querySelector('#navbar-scroll');

    $(window).scroll(function () {
        scrolling = true;
    });

    const interval = setInterval(function () {
        if (scrolling) {
            scrolling = false;
            var st = $(this).scrollTop();
            if (st > height) {
                navbar.classList.add(className);
                navbar.classList.add('border-bottom');
            } else {
                navbar.classList.remove(className);
                navbar.classList.remove('border-bottom');
            }
            lastScrollTop = st;
        }
    }, 100);
}