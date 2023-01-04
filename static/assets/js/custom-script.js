 
$(document).ready(function() {
	'use strict';

	jQuery(".select").niceSelect();
 
	$(function() {
		const allSpanElements = document.querySelectorAll('.over-img-block');
		allSpanElements.forEach((spanElement) => {
			//console.log(spanElement);
			// Here comes the Code that should be executed on every Element, e.g.
			//spanElement.innerHTML = "This Content will appear on every span Element now";
			var lis_count = $(spanElement).find('.box').length;
			var active_li_index = 0;
			setInterval(function() {
				if ($(spanElement).find('.box.red').index() == lis_count - 1)
					active_li_index = 0;
				else
					active_li_index++;
					$(spanElement).find('.box.red').removeClass('red');
					$(spanElement).find('.box').eq(active_li_index).addClass('red');
			}, 500);
		});
	});

	$(function() {
		const allSpanElements = document.querySelectorAll('.partner-logo');
		allSpanElements.forEach((spanElement) => {
			//console.log(spanElement);
			// Here comes the Code that should be executed on every Element, e.g.
			//spanElement.innerHTML = "This Content will appear on every span Element now";
			var lis_count = $(spanElement).find('span').length;
			var active_li_index = 0;
			setInterval(function() {
				if ($(spanElement).find('.brand-img.active').index() == lis_count - 1)
					active_li_index = 0;
				else
					active_li_index++; 
					$(spanElement).find('.brand-img.active').removeClass('active');
					$(spanElement).find('.brand-img').eq(active_li_index).addClass('active');
			}, 2500);
		});
	});

	/*|| Menu js ST ||*/	
	jQuery(".humburg-menu a").on("click",function(e) {
		e.preventDefault();
		jQuery(this).toggleClass("active");
		jQuery("body").toggleClass("menuOpen");
		jQuery(".menu-outer").slideToggle(400);
		//$("body").toggleClass("scrolldesable");
	});

	jQuery(".details-vedio-block .vdi-box a").on("click",function(e) {
		e.preventDefault();
		jQuery(".details-vedio-block").toggleClass("active");
		jQuery(".vedio-block-hide").toggleClass("active");
		 ;
		//$("body").toggleClass("scrolldesable");
	});
	jQuery(".details-vedio-block .vedio-block-hide .close-btn-vdi a").on("click",function(e) {
		e.preventDefault();
		jQuery(".details-vedio-block").removeClass("active");
		jQuery(".vedio-block-hide").removeClass("active");
		 ;
		//$("body").toggleClass("scrolldesable");
	});
	 
		jQuery(".abouts-btn a").on("click",function(e) {
			e.preventDefault();
			jQuery(".home-about-inner").toggleClass("active");
			 
			 ;
			//$("body").toggleClass("scrolldesable");
		});
   
	
	
 
	let tabChange = function() {
		let tabs = jQuery('.imagebox_wrap');
		let tablink = jQuery('.imagebox.active');
		let nextClick = jQuery(tablink).next().length 
			? jQuery(tablink).next('.imagebox')
			: tablink.filter(':first-child');
		nextClick.addClass('active');
		jQuery(tablink).removeClass('zindex');
		setTimeout(function() {
			jQuery(tablink).removeClass('active');
		}, 2000);
		let nextClass = jQuery(tablink).next().length 
			? jQuery(tablink).next('.imagebox') 
			: tabs.find('.imagebox').filter(':first-child');
		nextClass.addClass('active zindex');
	}
	setInterval(tabChange, 5000);

	let tabChangeBig = function() {
		let tabs = jQuery('.big_image_wrap');
		let tablink = jQuery('.imagebox_big.active');
		let nextClick = jQuery(tablink).next().length 
			? jQuery(tablink).next('.imagebox_big')
			: tablink.filter(':first-child');
		nextClick.addClass('active');
		jQuery(tablink).removeClass('zindex');
		setTimeout(function() {
			jQuery(tablink).removeClass('active');
		}, 2000);
		let nextClass = jQuery(tablink).next().length 
			? jQuery(tablink).next('.imagebox_big') 
			: tabs.find('.imagebox_big').filter(':first-child');
		nextClass.addClass('active zindex');
	}
	setInterval(tabChangeBig, 5000); 

	const actualBtn = document.getElementById('actual-btn');
	const fileChosen = document.getElementById('file-chosen');
	actualBtn.addEventListener('change', function(){
		fileChosen.textContent = this.files[0].name
	});
});

// More performant version using translate3D is here: https://codepen.io/walpolea/pen/xxWjRjX
initializeHoverLists();
function initializeHoverLists() {
  	const movingUp = () => {
		document.documentElement.style.setProperty("--animation-in", "hover-up");
		document.documentElement.style.setProperty("--animation-out", "unhover-up");
	};
	const movingDown = () => {
		document.documentElement.style.setProperty("--animation-in", "hover-down");
		document.documentElement.style.setProperty("--animation-out", "unhover-down");
	};
  	if (!window.lastHovered) {
		const lists = document.querySelectorAll(".home-latest-news-outer");
		const effectEls = document.querySelectorAll(".letest-news-row");

		effectEls.forEach((li) => {
			const activeEvents = ["mouseenter", "focus"];
			const deactiveEvents = ["mouseleave", "blur"];

			//On Hover/Focus
			activeEvents.forEach((event) => {
				li.addEventListener(event, (e) => {
				//is the current above or below the last?
				if (e.currentTarget === window.lastHovered) {
					e.offsetY < e.currentTarget.offsetHeight * 0.5
					? movingDown()
					: movingUp();
				} else {
					e.currentTarget.offsetTop > window.lastHovered?.offsetTop
					? movingDown()
					: movingUp();
				}
				window.lastHovered = e.currentTarget;
				});
			});

			//On MouseOut/Blur
			deactiveEvents.forEach((event) => {
				li.addEventListener(event, (e) => {
					effectEls.forEach((li) => li.classList.remove("last"));
					e.currentTarget.classList.add("last");
				});
			});
		});
  	}
}

// Swiper Function Start
var swiper = new Swiper("#swiper", {
	effect: "coverflow",
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: "auto",
	coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth: 280,
		modifier: 1,
		slideShadows: true,
	},
	loop: true,
	spaceBetween: 0,
});
// Swiper Function End


 