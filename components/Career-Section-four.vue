<template> 
    <div class="career-section-4">
		<div class="container">
			<div class="about-testmonials coman-effect-delay-2" data-scroll>
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
						<!-- eslint-disable vue/no-v-html -->
						<div v-for="(review, inx) in reviews" :key="inx" class="about-testi-block">
							<div class="text" v-html="review.content"></div>
							<div class="name">
								{{review.title}} <span v-if="review.reviewOption.designation">{{review.reviewOption.designation}}</span>
							</div>
						</div>
						<!-- eslint-enable vue/no-v-html -->
					</carousel>
					<div class="slider-counter"></div>	
				</div>
			</div>
		</div>
	</div> 
</template>

<script>
export default {
	name: 'CareerReviewSec',
	props:{
		reviews:{
			type: Array,
			default(){
				return []
			}
		}
	} 
}
</script>

<style lang="scss">
.career-section-4{ padding: 200px 0 0 0;
.about-testmonials{   min-height: 0px;; display: block; width: 100%; 
		.about-testmonials-inner{ padding: 92px 0 0 0; max-width: 864px; margin: 0 auto ; display: block; width: 100%; 
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
</style>