export function navbarChanger(height, className) {
    var lastScrollTop = 0;
    $(window).scroll(function (event) {
        var st = $(this).scrollTop();
        const navbar = document.querySelector('#navbar-scroll');
        if (st > height) {
            navbar.classList.add(className);
            navbar.classList.remove('border-bottom');
        } else {
            navbar.classList.remove(className);
            navbar.classList.add('border-bottom');
        }
        lastScrollTop = st;
    });
}