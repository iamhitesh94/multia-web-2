<template>
	<div class="abouts-section-6 v2" >
		 <div class="about-team-images">
			<div class="img-1">
				<span data-scroll :style="{ backgroundImage: `url(/assets/img/team-image-1.jpg)` }"></span>
			</div>
			<div class="img-2">
				<span data-scroll :style="{ backgroundImage: `url(/assets/img/team-image-2.jpg)` }"></span>
			</div>
			<div class="img-3">
				<span data-scroll :style="{ backgroundImage: `url(/assets/img/team-image-3.jpg)` }"></span>
			</div>
		 </div>
		 <div class="container">
		 <div class="about-team-text coman-effect" data-scroll>
				<h2>Our <span> Team</span></h2>
				<p>We are a diverse group of people who love to learn and create together, growing as we go.</p>
				<div class="see-all-links">
					<a href="#" class="primary-btn">know our team</a>
				</div>
		 </div>
		 </div>
	</div>
</template>

<script>
export default {
  name: 'NuxtError' 
}
</script>

<style lang="scss">
 #__layout > div > div.abouts-section-6.v2{ padding: 200px 0; background: $chremF3F1EC;
  .about-team-images{ display: flex; position: relative; 
	.img-1{ width: 27.6%; display: block; margin: 24.51vw 5.8% 0 0; 
		span{ padding: 112.56% 0 0 0; display: block; width: 100%; background-position: center center; background-size: cover; background-repeat: no-repeat; 
			transform: translateY(50px); opacity: 0; transition: all 0.5s ease-in-out;
			&.is-inview{  opacity: 1; transform: translateY(0); transition-delay: 0.3s; }
		}
	}
	.img-2{ width: 33.3%; display: block; margin: 0 5.8% 0 0; 
		span{ padding: 139.085% 0 0 0; display: block; width: 100%; background-position: center center; background-size: cover; background-repeat: no-repeat;
			transform: translateY(50px); opacity: 0; transition: all 0.5s ease-in-out;
			&.is-inview{  opacity: 1; transform: translateY(0); transition-delay: 0.2s; }
		}
	}
	.img-3{ width: 27.6%; display: block; margin:31.73vw 0% 0 0; 
		span{ padding: 108.58% 0 0 0; display: block; width: 100%; background-position: center center; background-size: cover; background-repeat: no-repeat; 
			transform: translateY(50px); opacity: 0; transition: all 0.5s ease-in-out;
			&.is-inview{  opacity: 1; transform: translateY(0); transition-delay: 0.4s; }
		}
	}
  }
  .about-team-text{ padding: 14px 0 0 0; margin:  0 auto; display: block; max-width: 669px; width: 100%; text-align: center;  
	h2{
		@include  H2; font-size:$h2-laptop-fs ; color: $black010101; padding: 0 0 60px;;
		span{ font-style: italic; }
	}
	p{ max-width: 423px; margin: 0 auto; display: block; @include bodyText1; font-family: 'Sora-Regular';   padding: 0px;; color: $black010101;}
	.see-all-links{ padding: 60px 0 0 0; 
		.primary-btn{color: $black010101; border-color:$black010101 ; padding-top: 14px;}
	}
	.see-all-links {
		a{
			font-family: 'Sora-Light';
			&:hover{ color: $green16A15E;border-color: $green16A15E;}
		}
	}
  }
 } 

 
</style>
