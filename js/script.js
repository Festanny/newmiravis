// href
$("body").on('click', '[href*="#"]', function (e) {
	var fixed_offset = $('header nav').height();
	$('html,body').stop().animate({
		scrollTop: $(this.hash).offset().top - fixed_offset
	}, 1000);
	e.preventDefault();
});

// scroll fixed nav
$(window).scroll(function () {
	if ($(window).width() > 799) {
		if ($(window).scrollTop() > 0) {
			$('header nav').addClass('fixed');
		} else {
			$('header nav').removeClass('fixed');
		}
	}
});
if ($(window).width() <= 799) {
	$('header nav').addClass('fixed');
}

// animation block
function onEntry(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
			change.target.classList.add('el-show');
		}
	});
}
let options = {
	threshold: [0.3]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.el');

for (let elm of elements) {
	observer.observe(elm);
}

// Up btn
$(window).scroll(function() {
    if ($(this).scrollTop() > 250) {
		$('#upButton').css({
			opacity: 1,
			pointerEvents: 'auto'
		});
    } else {
        $('#upButton').css({
			opacity: 0.3,
			pointerEvents: 'none'
		}).stop(true, false);
    }
});
$('#upButton').click(function() {
    $('html, body').stop().animate({
        scrollTop: 0
    }, 1000);
});

// offset top
$(window).scroll(function () {
	if ($(window).scrollTop() >= $('#section1').offset().top - 60) {
		$('#fast1').addClass('active');
	}
	else {
		$('#fast1').removeClass('active');
	}
	if ($(window).scrollTop() >= $('#section2').offset().top - 60) {
		$('#fast2').addClass('active');
		$('#fast1').removeClass('active');
	}
	else {
		$('#fast2').removeClass('active');
	}
	if ($(window).scrollTop() >= $('#section3').offset().top - 60) {
		$('#fast3').addClass('active');
		$('#fast2').removeClass('active');
	}
	else {
		$('#fast3').removeClass('active');
	}
	if ($(window).scrollTop() >= $('#section4').offset().top - 60) {
		$('#fast4').addClass('active');
		$('#fast3').removeClass('active');
	}
	else {
		$('#fast4').removeClass('active');
	}
	if ($(window).scrollTop() >= $('#section5').offset().top - 60) {
		$('#fast5').addClass('active');
		$('#fast4').removeClass('active');
	}
	else {
		$('#fast5').removeClass('active');
	}
	if ($(window).scrollTop() >= $('#section6').offset().top - 60) {
		$('#fast6').addClass('active');
		$('#fast5').removeClass('active');
	}
	else {
		$('#fast6').removeClass('active');
	}
	if ($(window).scrollTop() >= $('#section7').offset().top - 60) {
		$('#fast7').addClass('active');
		$('#fast6').removeClass('active');
	}
	else {
		$('#fast7').removeClass('active');
	}
	if ($(window).scrollTop() >= $('#section8').offset().top - 60) {
		$('#fast8').addClass('active');
		$('#fast7').removeClass('active');
	}
	else {
		$('#fast8').removeClass('active');
	}
});

// open desc site
function openSite(evt, nameSite) {
    var i, tabcontent, tablinks;
    tabcontent = document.querySelectorAll(".site .info-block .info");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.querySelectorAll(".site .info-block .name span");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    document.getElementById(nameSite).style.display = "block";
    evt.currentTarget.className += "active";
}

// carousel-portfolio
$(document).ready(function(){
	$('.carousel-portfolio').slick({
		dots: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000
		});
});

// carousel-reviews
$(document).ready(function(){
	$('.carousel-reviews').slick({
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000
		});
});

// Label shift
let inputClick = $('.order .block-form .inputRel input'),
	labelFocus = $('.order .block-form .inputRel .labelUp');

function labelUp(evt) {
	inputClick[evt].classList.remove('invalid');
	labelFocus[evt].classList = "labelFocus";
}
function labelDown(evt) {
	if (inputClick[evt].value == '') {
		labelFocus[evt].classList = "labelUp";
		if (labelFocus[evt].innerHTML != 'E-mail') {
			inputClick[evt].classList.add('invalid');
		}
	}
}