<template>
	<div v-if="(lines.length > 0)" class="story-section-3">
		<div class="guideline-slider-row">
			<div v-for="(slide, inx) in lines" :key="inx" class="guideline-slider-inner">
				<div v-for="(text, slideInx) in slide.slide" :key="slideInx" class="guideline-title" v-html="text.text"></div>
			</div>
		</div>
	</div>
</template>
<script>

export default {
	name: 'StorySlideTextSec',
	props:{
		lines:{
			type:Array,
			default(){
				return []
			}
		}
	}
}


</script>

<style lang="scss">
.guideline-slider-row {
	padding: 0 0 130px;
	display: flex;
	align-items: center;

	.guideline-title {
		display: flex;
		line-height: 1.2;
		white-space: nowrap;
		align-items: center;
		font-size: $h1-laptop-fs ;
		color: $gyay555555;

		span {
			color: $white;
		}
	}
}

.guideline-slider-row {
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

	.guideline-slider-inner {
		display: flex;
		align-items: center;
		animation: marquee calc(3 * var(--duration)) linear infinite;
		white-space: nowrap;

		.guideline-title {
			display: flex;
			line-height: 1.2;
			white-space: nowrap;
			align-items: center;
			font-size: $h1-laptop-fs ;
			font-family: "freight-display-pro", serif;
			color: $gyay555555;
			padding: 0 1vw 0 0;

			span {
				color: $white;
				font-style: italic;
				padding: 0 1vw;
				display: inline-block;
			}
		}
	}
}
</style>
