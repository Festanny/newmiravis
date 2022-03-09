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
		$('#upbutton').css({
			opacity: 1,
			pointerEvents: 'auto'
		});
    } else {
        $('#upbutton').css({
			opacity: 0.3,
			pointerEvents: 'none'
		}).stop(true, false);
    }
});
$('#upbutton').click(function() {
    $('html, body').stop().animate({
        scrollTop: 0
    }, 1000);
});



// fast active
// function fast(count) {
// 	$('header nav .img ul li a')[0].className = "";
//     $('header nav .img ul li a')[1].className = "";
//     $('header nav .img ul li a')[2].className = "";
//     $('header nav .img ul li a')[count].className = "active";
// }

$(window).scroll(function () {
	if ($(window).scrollTop() > $('#about').offset().top - 60) {
		$('#fast1').addClass('active');
	}
	else if ($(window).scrollTop() > $('#whyWe').offset().top - 60) {
		$('#fast2').addClass('active');
	}
});