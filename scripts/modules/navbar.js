export function navbarChanger(height, className) {
    // let lastScrollTop = 0;
    // let scrolling = false;
    // const navbar = document.querySelector('#navbar-scroll');

    // $(window).scroll(function () {
    //     scrolling = true;
    // });

    // const interval = setInterval(function () {
    //     if (scrolling) {
    //         scrolling = false;
    //         var st = $(this).scrollTop();
    //         if (st > height) {
    //             navbar.classList.add(className);
    //             navbar.classList.add('border-bottom');
    //         } else {
    //             navbar.classList.remove(className);
    //             navbar.classList.remove('border-bottom');
    //         }
    //         lastScrollTop = st;
    //     }
    // }, 100);


    var scrollPos = $(window).scrollTop(); //Current scroll's position of the window (at the beginning would be 0)
    var navPos = $("nav").offset().top; //Current nav's position (at the beginnig would be wherever you set the nav)
    var navShowing = true; //Indicates whether the nav is currently shown or hidden.
    var navOffset = 72; //Amount of pixels from its current position the nav will be moved to (adjust to size of navbar)
    var navMoveSpeed = 400; //Duration (in ms) of the nav's movement
    let scrolling;

    $(window).scroll(function () {
        var newScroll = $(this).scrollTop();
        if (newScroll > height) {
            $('nav').addClass(className);
        } else {
            $('nav').removeClass(className);
        }
        if (scrolling) { return; }
        if (newScroll > scrollPos) {
            //Scroll down
            if (navShowing) {
                scrolling = true;
                var newNavPos = navPos -= navOffset;
                $("nav").animate({ top: newNavPos }, navMoveSpeed);
                navShowing = false;
                setTimeout(() => {
                    scrolling = false;
                }, navMoveSpeed);
            }
        }
        else {
            //Scroll up
            if (!navShowing) {
                scrolling = true;
                var newNavPos = navPos += navOffset;
                $("nav").animate({ top: newNavPos }, navMoveSpeed);
                navShowing = true;
                setTimeout(() => {
                    scrolling = false;
                }, navMoveSpeed);
            }
        }
        scrollPos = newScroll;
    });
}