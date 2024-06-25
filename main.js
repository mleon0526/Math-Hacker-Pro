
//navbar settings---------------------------------------------------------------------------------------------------------------

let prevScrollpos = window.scrollY;
window.onscroll = function() {
    let currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-62px";
    }
    prevScrollpos = currentScrollPos;

};

let navbarButton = document.getElementById('navbarButton');

navbarButton.addEventListener('click', function(){
    if (navbarButton.classList.contains('fixed')) {
        navbarButton.classList.remove('fixed');
    } else {
        navbarButton.classList.add('fixed');
    }
});


/* window.onbeforeunload = function () {
    resetPythagoreanCalcValues();
    resetVolumeValues();  // When the page is refreshed, reset all of the inputs of the volume section
    resetAreaValues();  // When the page is refreshed, reset all of the inputs of the area section
    resetConverterValues();  // When the page is refreshed, reset all of the inputs of the converter section
    resetTrigonometricValues();
}; */



