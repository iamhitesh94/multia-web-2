<template>
    <div class="main-outer-loader">
        <div class="wrappper">
            <div class="big_image_wrap">
                <div class="imagebox_big active zindex"><img src="/assets/img/2.jpg" alt=""></div>
                <div class="imagebox_big"><img src="/assets/img/3.jpg" alt=""></div>
                <div class="imagebox_big"><img src="/assets/img/1.jpg" alt=""></div>
            </div>
            <div class="imagebox_wrap">
                <div class="imagebox active">
                    <div class="in_image"><img src="/assets/img/1.jpg" alt=""></div>
                </div>
                <div class="imagebox">
                    <div class="in_image"><img src="/assets/img/2.jpg" alt=""></div>
                </div>
                <div class="imagebox">
                    <div class="in_image"><img src="/assets/img/3.jpg" alt=""></div>
                </div>
            </div>
        </div>
    </div>
  </template>
  <script>
    export default {
      data: () => ({
        loading: false,
      }),
      methods: {
        start() {
          this.loading = true
        },
        finish() {
            // const that = this;
            
            
        },
      },

      mounted() {
        const tabChange = function() {
            const tabs = jQuery('.imagebox_wrap');
            const tablink = jQuery('.imagebox.active');
            const nextClick = jQuery(tablink).next().length 
			? jQuery(tablink).next('.imagebox')
			: tablink.filter(':first-child');
		nextClick.addClass('active');
		jQuery(tablink).removeClass('zindex');
		setTimeout(function() {
			jQuery(tablink).removeClass('active');
		}, 2000);
		const nextClass = jQuery(tablink).next().length 
			? jQuery(tablink).next('.imagebox') 
			: tabs.find('.imagebox').filter(':first-child');
		nextClass.addClass('active zindex');
	}
	setInterval(tabChange, 5000);

	const tabChangeBig = function() {
		const tabs = jQuery('.big_image_wrap');
		const tablink = jQuery('.imagebox_big.active');
		const nextClick = jQuery(tablink).next().length 
			? jQuery(tablink).next('.imagebox_big')
			: tablink.filter(':first-child');
		nextClick.addClass('active');
		jQuery(tablink).removeClass('zindex');
		setTimeout(function() {
			jQuery(tablink).removeClass('active');
		}, 2000);
		const nextClass = jQuery(tablink).next().length 
			? jQuery(tablink).next('.imagebox_big') 
			: tabs.find('.imagebox_big').filter(':first-child');
		nextClass.addClass('active zindex');
	}
	setInterval(tabChangeBig, 5000);
    setTimeout(function() {
                // that.loading = false
                jQuery(".main-outer-loader").remove()
            }, 2000);
      },
    }
  </script>
  <style scoped>
    .wrappper {  height: 100vh; display: flex; align-items: flex-end; justify-content: center; display: block;}
.imagebox_wrap { width: 50vw; height: 89vh; margin: 0 auto; border-radius: 1000px 1000px 0 0; overflow: hidden; position: relative; z-index: 5;}
.imagebox { width: 0; height: 0; position: absolute; right: 0; bottom: 0; border-radius:1000px 1000px 0 0; overflow: hidden;
transition: all ease-in-out 2s;
}
.imagebox .in_image { border-radius: 0px; width: 50vw; height: 89vh; position: absolute; right: 0; bottom: 0;  overflow: hidden;}
.imagebox .in_image img { object-fit: cover; object-position:center center;  width: 100%; height: 100%;}
.imagebox.active {width: 50vw; height: 89vh;}
.imagebox.zindex { z-index: 2;}

.big_image_wrap { position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden;}
.big_image_wrap .imagebox_big { position: absolute; height: 150vh; top: 0; right: 0; left: 0; opacity: 0; visibility: hidden;
transition: all ease-in-out 3s;
}
.big_image_wrap .imagebox_big img { object-fit: cover; width: 100%; height: 100%;}
.big_image_wrap .imagebox_big.active { animation: first-animation 7s infinite linear;}
.big_image_wrap .imagebox_big.zindex { opacity: 1; visibility: visible; z-index: 2;}
@keyframes first-animation {
from {
transform: translateY(0px);
}
to {
transform: translateY(-10vh);
}
}
  </style>
  