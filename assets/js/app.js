//Typing banner
var typed = new Typed('.text-changed', {
    strings: ['', 'team.', 'startup.', 'business.',],
    typeSpeed: 90,
    backSpeed: 30,
    backDelay: 2500,
    loop: true
});

let menuButton = $('button.navbar-toggler');
let iconMenu = $('span.navbar-toggler-default');
let iconClose = $('span.navbar-toggler-toggled');
let isOpen = true;

let navbarItem = $('.nav-item-link');
let itemList = $('.hs-mega-menu');
let width = $(window).width();
let allowClick = false;

$(document).ready(function () {
    let id = 0;
    let currentId = 0;
    //Check hover effect navbar item 
    let checkHoverClick = () => {
        if (width < 991) {
            navbarItem.removeClass('hover');
            allowClick = true;
        }
        else {
            navbarItem.addClass('hover');
            allowClick = false;
            itemList.eq(currentId).removeClass('d-block');

        }
    };
    //Check devices can hover ?
    checkHoverClick();
    //Resize envent
    $(window).resize(() => {
        width = $(window).width();
        checkHoverClick();
    });

    // Menu click
    menuButton.click(() => {
        iconMenu.toggleClass('display-none');
        iconClose.toggleClass('display-none');
    });

    //Navbar item click
    navbarItem.click(function () {
        if (allowClick === true) {
            id = $(this).data("id");
            if (currentId == id) {
                itemList.eq(currentId).toggleClass('d-block');
            }
            else {
                itemList.eq(currentId).removeClass('d-block');
                itemList.eq(id).addClass('d-block');
                currentId = id;
            }
        }
    });
});