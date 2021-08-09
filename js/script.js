//SLICK DLIDER
var linkClicked = document.getElementsByClassName('nav-link');
var numClass = linkClicked.length;

for (var i = 0; i < numClass; i++) {
        linkClicked[i].addEventListener('click', function(){
      var onTheMoment = document.getElementsByClassName('active');
            onTheMoment[0].className = onTheMoment[0].className.replace(' active', '');
            this.className += ' active';
    }, false);
}

$('.brand_slide').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 5,
    arrows: false,
    autoplay: true,
    focusOnSelect: true,
    pauseOnHover: false,
    responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
            }
        }
    ]
});