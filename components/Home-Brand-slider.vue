<template>
   <div class="brand-slider-outer">
		<div class="brand-slider-row">
			<div v-for="(slide, idx) in slider" v-bind:key="idx" class="brand-slider-first">
				<div v-for="(text, idx) in slide.slide" v-bind:key="idx" v-html="text.title" class="brand-title"></div>
			</div>
		</div>
   </div>
</template>

<script>
export default {
	name: 'HomeBrandSlider',
	props:{
		slider:[]
	} 
}
</script>

<style lang="scss">
.brand-slider-outer{ display: block; width: 100%; overflow: hidden; }
.brand-slider-first{ display: flex; align-items: center;
	 .brand-title{display: flex;  line-height: 1.2;    white-space: nowrap;   align-items: center; font-size:$h1-laptop-fs ; color: $gyay555555; 
	 span{ color: $white; }
	 }
}

.brand-slider-row{ 
	--duration: 15s;
	width: 100vw;
	transition: all .2s ease-in-out;
	left: 0;
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	white-space: nowrap;
	animation: marquee calc(6 * var(--duration)) linear infinite;
	animation-play-state: paused;
	contain: layout;
	animation-direction: reverse;
		.brand-slider-first{ 
			display: flex; 
			align-items: center;
			animation: marquee calc(3 * var(--duration)) linear infinite;
			white-space: nowrap;
		 
				.brand-title{display: flex;  line-height: 1.2;    white-space: nowrap;   align-items: center; font-size:$h1-laptop-fs ; 
		font-family: "freight-display-pro",serif; color: $gyay555555;  padding: 0 1vw 0 0;
				span{ 
						color: $white; 
						font-style: italic;
						padding: 0 1vw; display: inline-block;
					}
		          }
        }	
}
 
@keyframes marquee {
	0% {
		transform: translate3d(0%, 0, 0)
	}
	100% {
		transform: translate3d(-100%, 0, 0)
	}
}
 @media (min-width: 1600px) and (max-width: 2100px) {
 .brand-slider-row .brand-slider-first .brand-title{ font-size: $h3-desktop-fs; }

}

</style>
