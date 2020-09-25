Array.prototype.forEach.call(document.querySelectorAll('.about-parallax'), function(elem) {
    elem.style.backgroundImage = 'url('+elem.getAttribute('data-parallax-image')+')';
})