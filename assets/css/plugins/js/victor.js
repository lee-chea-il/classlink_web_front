
// 모달 간 교체 시 스크롤 문제 해결 스크립트
$(document).on('hidden.bs.modal', function (event) {
	if ($('.modal:visible').length) {
		$('body').addClass('modal-open');
	}
});

// 햄버거 버튼, 닫기버튼  토글
$('#mobilemuBtn').on("click", function (e) {
	e.preventDefault();
	$('#mobilemu').animate({ marginLeft: '0px' }, 200);
	$('.mu_cover').fadeIn(150);
});
$('#mobilemuClose').on("click", function (e) {
	e.preventDefault();
	$('#mobilemu').animate({ marginLeft: '-320px' }, 200);
	$('.mu_cover').fadeOut(150);
});
$('.mu_cover').on("click", function (e) {
	e.preventDefault();
	$('#mobilemu').animate({ marginLeft: '-320px' }, 200);
	$('.mu_cover').fadeOut(150);
});
$('.btn_alert').click(function (e) {
	e.preventDefault();
	$('#mobilemu').animate({ marginLeft: '-320px' }, 200);
	$('.mu_cover').fadeOut(150);
});

// 모바일 메뉴 1depth 토글
$(".nav-item>a").click(function () {
	let clickmu = $(this);
	let submenu = $(this).next("ul");
	if (submenu.is(":visible")) {
		clickmu.removeClass('changed');
		submenu.slideUp();
	} else {
		clickmu.addClass('changed');
		submenu.slideDown();
	}
});

// 패스워드 보이기 안보이기
$('#eyeOff').click(function () {
	$('#eyeOff').addClass('hide');
	$('#eyeOn').removeClass('hide');
	$('#password').attr('type', 'text');
});
$('#eyeOn').click(function () {
	$('#eyeOn').addClass('hide');
	$('#eyeOff').removeClass('hide');
	$('#password').attr('type', 'password');
});

// 패스워드 보이기 안보이기2
$('#eyeOff2').click(function () {
	$('#eyeOff2').addClass('hide');
	$('#eyeOn2').removeClass('hide');
	$('#password2').attr('type', 'text');
});
$('#eyeOn2').click(function () {
	$('#eyeOn2').addClass('hide');
	$('#eyeOff2').removeClass('hide');
	$('#password2').attr('type', 'password');
});

// 패스워드 보이기 안보이기3
$('#eyeOff3').click(function () {
	$('#eyeOff3').addClass('hide');
	$('#eyeOn3').removeClass('hide');
	$('#password3').attr('type', 'text');
});
$('#eyeOn3').click(function () {
	$('#eyeOn3').addClass('hide');
	$('#eyeOff3').removeClass('hide');
	$('#password3').attr('type', 'password');
});


// 로그인 화면 오를쪽 영역 height 계산
$(function () {
	let loginRwrapH = $('#loginRwrap').height();
	// console.log($('#loginRwrap').width());
	if (loginRwrapH > 630) {
		$(".right_section").css('display', 'block');
	}
});

// 알림관련 스크립트
$('.btn_alert').click(function () {
	$('#alertPops').toggle();
	$('.alert_cover').toggle();
});
$('.close_alert').click(function () {
	$('#alertPops').hide();
	$('.alert_cover').hide();
});

// goTOP버튼 관련 스크립트
$(window).scroll(function () {
	let sHeight = $(window).scrollTop();
	let wWidth = $(window).width();
	// console.log(sHeight);
	// console.log(swidth);
	if ( sHeight > 400 && wWidth < 576 ) {
		$('.btn_gotop').fadeIn();
		$('.free_trial').fadeIn();
	} else {
		$('.btn_gotop').fadeOut();
		$('.free_trial').fadeOut();
	}	
});	
$('.btn_gotop').click(function() {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth'
	});
});

// 토스트 메세지 관련
function toasts(message) {
	$('.toast').toast('show');
	$('#toastMsg').text(message);
}