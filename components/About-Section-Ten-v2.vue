<template>
	<div class="abouts-section-7 v2" >
		  <div class="container">
				<div class="our-work-text coman-effect" data-scroll>
						<div class="icon"><img src="/assets/img/about-icon-2.svg" alt=""></div>
						<h3>The Multiversity Group</h3>
						<p>Multiversity is a conglomerate of different businesses, all unified by our deep interest in enabling
 learning and our desire to contribute to a thriving community.</p>
				</div>
				<div class="second-row coman-effect-delay-2" data-scroll>
				<div class="partner-logos">
					<div class="partner-logos-box">
						<div class="partner-logo">
							<span class="brand-img"><img src="/assets/img/about-brand-1.svg" alt=""></span>
							<span class="brand-img"><img src="/assets/img/about-brand-2.svg" alt=""></span>
							<span class="brand-img"><img src="/assets/img/about-brand-3.svg" alt=""></span>
							<span class="brand-img"><img src="/assets/img/about-brand-4.svg" alt=""></span>
						</div>
						
					</div>
					<div class="partner-logos-box">
						<div class="partner-logo">
							<span class="brand-img"><img src="/assets/img/about-brand-2.svg" alt=""></span>
							<span class="brand-img"><img src="/assets/img/about-brand-1.svg" alt=""></span>
							<span class="brand-img"><img src="/assets/img/about-brand-4.svg" alt=""></span>
							<span class="brand-img"><img src="/assets/img/about-brand-3.svg" alt=""></span>
						</div>
					</div>
					<div class="partner-logos-box">
						<div class="partner-logo">
							<span class="brand-img"><img src="/assets/img/about-brand-3.svg" alt=""></span>
							<span class="brand-img"><img src="/assets/img/about-brand-4.svg" alt=""></span>
							<span class="brand-img"><img src="/assets/img/about-brand-2.svg" alt=""></span>
							<span class="brand-img"><img src="/assets/img/about-brand-1.svg" alt=""></span>
						</div>
					</div>
					<div class="partner-logos-box">
						<div class="partner-logo">
							<span class="brand-img"><img src="/assets/img/about-brand-4.svg" alt=""></span>
							<span class="brand-img"><img src="/assets/img/about-brand-2.svg" alt=""></span>
							<span class="brand-img"><img src="/assets/img/about-brand-1.svg" alt=""></span>
							<span class="brand-img"><img src="/assets/img/about-brand-3.svg" alt=""></span>
						</div>
					</div>
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
.abouts-section-7.v2{ padding: 200px 0; 
	.our-work-text{ padding: 0 0 90px; text-align: center; max-width: 690px; margin: 0 auto; display: block;   
		h3{ @include H3; font-size: $h3-laptop-fs; color: $lightyellow; padding: 0 0 40px;;}
		p{  margin: 0px; padding: 0 40px; @include bodyText1; color: $lightyellow; font-family: 'Sora-Light';  }
		.icon{ padding: 0 0 60px;; }
	}
	.second-row{border: 3px solid $gyay222222; margin: 0px 0 0px 0;
		.partner-logos{ display: flex; 
			.partner-logos-box{ position: relative; width: 25%; border-left: 3px solid $gyay222222; display: flex; justify-content: center; align-items: center; min-height: 328px;
				.partner-logo{ position: relative; 
					  span{ position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%); opacity: 0; transition: all 0.5s ease-in-out; 
					 	
					  }
					  span.active{ opacity: 1; }
				}
			  &:first-child{ border: 0px; }
			}
			
		}
	}
	.see-all-links {
		 a{ padding-top: 14px;; }
	}
}
 
 
</style>
