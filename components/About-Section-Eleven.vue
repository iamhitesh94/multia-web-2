<template>
	<div class="abouts-section-11">
		  <div class="container">
				<div class="partnership-block coman-effect-delay-2" data-scroll>
					<h2 v-if="title != ''">{{title}}</h2>
					<div v-if="images.sourceUrl" class="img">
						 <span :style="{ backgroundImage: `url(${images.sourceUrl})` }"></span>
					</div>
					<div v-if="link.url != ''" class="see-all-links">
						<a :href="link.url" :target="link.target" class="primary-btn">{{link.title}}</a>
					</div>
				</div>
		  </div>
	</div>    
</template>

<script>
export default {
	name: 'AboutCallToAction',
	props:{
		images:{
			type: Object,
			default() {
				return {}
			}
		},
		title:{
			type: String,
			default() {
				return ''
			}
		},
		link:{
			type: Object,
			default() {
				return {}
			}
		},
	}
}
</script>

<style lang="scss">
.abouts-section-11{ padding: 0 0 20px; }
.partnership-block{ max-width: 1088px;  margin: 71px auto 0; display: block; position: relative;  
	h2{@include laptopH2; color: $white;font-style: italic; position: absolute; left: -3px; top: -83px; z-index: 3; }
	.img { 
		span { display: block; width: 100%; opacity: 0.7; min-height: 560px; position: relative; z-index: 1; background-position: center center; background-size: cover; background-repeat: no-repeat;    }
	}
	.see-all-links{ z-index: 2; position: absolute; left: 0px; top: 0px; padding: 0px; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; }
}
 
</style>
