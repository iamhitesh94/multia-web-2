<template>
	<div class="abouts-section-7 v2" >
		  <div class="container">
				<div class="our-work-text coman-effect" data-scroll>
						<h3>Our work speaks for 50+ brands</h3>
						<p>We are a diverse group of people who love to learn and create together, growing as we go.</p>
				</div>
				<div class="second-row coman-effect-delay-2" data-scroll >
				<div class="partner-logos">
					<div class="partner-logos-box">
						<div class="partner-logo">
							<span class="brand-img"><img src="/assets/img/partner-logo-1.svg" alt=""></span>
							<span class="brand-img"><img src="/assets/img/partner-logo-2.svg" alt=""></span>
							<span class="brand-img"><img src="/assets/img/partner-logo-1.svg" alt=""></span>
							<span class="brand-img"><img src="/assets/img/partner-logo-2.svg" alt=""></span>
						</div>
						
					</div>
					<div class="partner-logos-box">
						<div class="partner-logo">
							<span class="brand-img"><img src="/assets/img/partner-logo-2.svg" alt=""></span>
							<span class="brand-img"><img src="/assets/img/partner-logo-1.svg" alt=""></span>
							<span class="brand-img"><img src="/assets/img/partner-logo-2.svg" alt=""></span>
							<span class="brand-img"><img src="/assets/img/partner-logo-1.svg" alt=""></span>
						</div>
					</div>
					<div class="partner-logos-box">
						<div class="partner-logo">
							<span class="brand-img"><img src="/assets/img/partner-logo-1.svg" alt=""></span>
							<span class="brand-img"><img src="/assets/img/partner-logo-2.svg" alt=""></span>
							<span class="brand-img"><img src="/assets/img/partner-logo-1.svg" alt=""></span>
							<span class="brand-img"><img src="/assets/img/partner-logo-2.svg" alt=""></span>
						</div>
					</div>
					<div class="partner-logos-box">
						<div class="partner-logo">
							<span class="brand-img"><img src="/assets/img/partner-logo-2.svg" alt=""></span>
							<span class="brand-img"><img src="/assets/img/partner-logo-1.svg" alt=""></span>
							<span class="brand-img"><img src="/assets/img/partner-logo-2.svg" alt=""></span>
							<span class="brand-img"><img src="/assets/img/partner-logo-1.svg" alt=""></span>
						</div>
					</div>
				</div>
			</div>
			<div class="see-all-links  coman-effect-delay-2" data-scroll>
					<a href="#" class="primary-btn">know our story</a>
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
	.our-work-text{ padding: 0 0 90px; text-align: center; max-width: 644px; margin: 0 auto; display: block;   
		h3{ @include H3; font-size: $h3-laptop-fs; color:$lightyellow; padding: 0 0 40px;;}
		p{  margin: 0px; padding: 0px; @include bodyText1; font-family: 'Sora-Light'; color: $lightyellow;  }
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
	.see-all-links { padding: 70px 0 0 0;
		 a{ padding-top: 14px;; border-color: $lightyellow; color: $lightyellow;   font-family: 'Sora-Light';  
		 &:hover{ color: $green16A15E; border-color: $green16A15E;  }
		}
	}
}
 
 
</style>
