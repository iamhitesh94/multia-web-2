<template>
	<div class="call-to-action-section">
		<div class="container">
			<div data-scroll class="call-to-action-block coman-effect">
				<h2>{{title}}</h2>
				<div v-if="image.sourceUrl" class="img">
					<span :style="{ backgroundImage: `url(${image.sourceUrl})` }"></span>
				</div>
				<div v-if="link.url" class="see-all-links">
					<NuxtLink :to="link.url" class="primary-btn">{{link.title}}</NuxtLink>
				</div>
			</div>
		</div>
	</div>    
</template>

<script>
export default {
	name: 'CallToAction',
	props:{
		title:{
			type: String,
			default(){
				return ''
			}
		},
		image:{
			type: Object,
			default(){
				return {}
			}
		},
		link:{
			type: Object,
			default(){
				return {}
			}
		}
	}
}
</script>

<style lang="scss">
.call-to-action-section{ padding: 0 0 0px; }
.call-to-action-block{ max-width: 1088px;  margin: 71px auto 0; display: block; position: relative;  
	h2{@include laptopH2; color: $white;font-style: italic; position: absolute; left: -3px; top: -83px; z-index: 3; }
	.img { 
		span { display: block; width: 100%; opacity: 0.7; min-height: 560px; position: relative; z-index: 1; background-position: center center; background-size: cover; background-repeat: no-repeat;    }
	}
	.see-all-links{ z-index: 2; position: absolute; left: 0px; top: 0px; padding: 0px; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; 
		a{
			width: auto; min-width: 0px;
		}
	}
}
</style>