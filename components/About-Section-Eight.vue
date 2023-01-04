<template>
	<div class="abouts-section-8" :style="{ backgroundImage: `url(/assets/img/about-testmonials-bg.jpg)` }">
		<div class="container">
			<div class="about-testmonials coman-effect" data-scroll>
				<div class="about-testmonials-inner">
					<carousel
						:items="1"
						:loop="false"
						:autoplay="false"
						:nav="true"
						:dots="true"
						:rewind="false"
						:responsive = "{
							0:{items:1},576:{items:1},768:{items:1},1200:{items:1},1500:{items:1} 
						}"
					>
						<div v-for="(review, inx) in reviews" :key="inx" class="about-testi-block">
							<div class="text" v-html="review.content"></div>
							<div class="name">
								{{review.title}} <span v-if="review.reviewOption.designation">{{review.reviewOption.designation}}</span>
							</div>
						</div>
					</carousel>
					<div class="slider-counter"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AboutReviews',
	props:{
		reviews:{
			type: Array,
			default() {
				return []
			}
		},
	}
}
</script>

<style lang="scss">
#__layout > div > div > div.abouts-section-8{ padding: 00px 0; background-position: center center; background-repeat: no-repeat; background-size: cover; 
	.about-testmonials{ background: $gyay121212; border-radius:  1000px 1000px 0 0; min-height: 1096px;; display: block; width: 100%; 
		.about-testmonials-inner{ padding: 316px 0 0 0; max-width: 864px; margin: 0 auto ; display: block; width: 100%; 
			.about-testi-block { text-align: center;
				.text { padding: 0 0 64px;
					p{@include laptopH3; letter-spacing: -1px; line-height: 1.1; color: $white; margin: 0px ; padding: 0px;  
					span{ font-style: italic; }
					}
				}
				.name{  font-size: $h4-laptop-fs;  font-family: "freight-display-pro",serif; 
					span{ display: block; padding: 30px 0 0 0; @include bodyText1;}
				 }
			}
		}
	} 
}
.about-testmonials-inner{
 .owl-dots {
		counter-reset: slides-num; /* Initialize counter. */ 
    position: absolute;
    top: 100%;
    left: 50%;
    margin-top: 15px;
		span{ display: none !important; }
		&:after {
			content:"0" counter(slides-num); 
			display: inline-block;
			font-size: 20px;
			font-weight:400; 
			vertical-align: middle;
      padding-left: 5px; margin-left: 5px;
		}
	}

	.owl-dot {
    display: inline-block;
		counter-increment: slides-num;  
    margin-right: 6.5px;

		span {
			display: none;
		}

		&.active {

			&:before {
				content:"0"  counter(slides-num)  " / " ; 
				display: inline-block; min-width: 37px;;
				vertical-align: middle;
        font-size: 20px;
        position: absolute;
        left: 0;
        top: 0; color: $gyay555555;
			}
		}
	}
	}

.about-testmonials-inner{  
	.owl-theme {
		.owl-nav{ 
		  margin: 0px; width: 165px;  	 position: absolute; left: 50%; transform: translateX(-50%);   top: -85px;   display: flex; align-items: center;  justify-content: space-between;
		  button{ margin: 0px; padding: 0px; height: 12px; width: 19px;; background: url(/assets/img/right-arrow.svg) no-repeat center center !important;
		  &.owl-prev{  background: url(/assets/img/left-arrow.svg) no-repeat center center !important; } 
		 	span{ display: none; } 
		  }
		}
		.owl-dots{ position: absolute;   left: 0px; top: -92px; display: flex; align-items: center; width: 70px;  left: 50%;  margin: 0 0 0 -35px;; @include bodyText2;    }
	}
}
</style>