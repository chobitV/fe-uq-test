

// =============================================================================
// SKILLS
// =============================================================================

var ifSkillsAnimate = false;

function skillsAnimate() {

    const skillsBlock = document.querySelector(".js-skills");
    const skillsBox = skillsBlock.querySelectorAll(".skills-box");
    const skillsPercentage = ".skills-box__prcnt";
    const skillsLine = ".skills-line__bg";

    skillsBox.forEach(function(item, i) {
        let percentage = item.getAttribute("data-percentage");
        let elPercentage = item.querySelector(skillsPercentage);
        let elLine = item.querySelector(skillsLine);

        move(elPercentage, percentage);
        moveLine(elLine, percentage);
    });

    // move percentage
    function move(el, value) {
        var i = 0;
        var interval = setInterval(frame, 10);

        function frame() {
            if (i >= value || i >= 100) {
              clearInterval(interval);
            } else {
                i++;
                el.innerHTML = i * 1  + '%';
            }
        }
    }

    // move line
    function moveLine(el, width) {
        el.style.width = width + '%';
    }

    return ifSkillsAnimate = true;
}

// skillsAnimate();

window.sectionAboutAnimate = function() {
    if (!ifSkillsAnimate) {
        skillsAnimate();
    }
};

// end SKILLS






// =============================================================================
// SUB MENU
// =============================================================================

var mainNav = document.querySelector('#navMenu'),
    linkHasSubMenu = mainNav.querySelectorAll('.sub-menu__item--has-child, .menu__item--has-child');

var subMenu = '.sub-menu';

var subMenuClose = 'sub-menu--close',
    subMenuActive = 'sub-menu--active';


// menu link - event
linkHasSubMenu.forEach(function(item, i) {

    // mouseover
    item.addEventListener('mouseenter', function(e) {
        let getSubMenu = item.querySelector(subMenu);
        getSubMenu.classList.remove(subMenuClose);
        getSubMenu.classList.add(subMenuActive);
    });

    // mouseout
    item.addEventListener('mouseleave', function(e) {
        let getSubMenu = item.querySelector(subMenu);
        getSubMenu.classList.add(subMenuClose);
        getSubMenu.classList.remove(subMenuActive);
    });
});

// end SUB MENU





// =============================================================================
// MOBILE MENU
// =============================================================================

var navBtn = document.getElementById('navBtn'),
    navMenu = document.getElementById('navMenu'),
    navBtnClose = document.getElementById('navBtnClose');

var navOpen = 'open',
    navClose = 'close';

// nav btn - click
if(navBtn) {
    navBtn.addEventListener('click', function() {
        if ( this.classList.contains(navClose) ) {
            globalNavOpen();
        } else {
            globalNavClose();
        }
    });
};

// nav btn close - click
if(navBtnClose) {
    navBtnClose.addEventListener('click', function() {
        globalNavClose();
    });
};

// open all nav elements
function globalNavOpen() {
    openNav(navBtn);
    openNav(navMenu);
}

// close all nav elements
function globalNavClose() {
    closeNav(navBtn);
    closeNav(navMenu);
}

// open nav el
function openNav(el) {
    el.setAttribute('style', 'will-change: transform;');

    setTimeout(function() {
        el.classList.remove(navClose);

        if (!el.classList.contains(navClose)) {
            el.classList.add(navOpen);
        }
    }, 100);
}

// close nav el
function closeNav(el) {
    el.classList.add(navClose);

    setTimeout(function() {
        el.removeAttribute('style');
    }, 100);
}

// clear nav el
function clearNav() {
    navBtn.classList.remove(navOpen);
    navMenu.classList.remove(navOpen);
    globalNavClose();
}

// check if mobile nav open
function checkIfNavOpen() {
    if (document.getElementById('navMenu').classList.contains(navOpen)) {
        return true;
    }
}

// end NAV
