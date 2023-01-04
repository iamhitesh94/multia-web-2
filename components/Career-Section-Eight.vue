<template>
	<div class="career-section-8">
		<div class="brand-slider-row">
			<div v-for="(slide, inx) in images" :key="inx" class="brand-slider-first">
				<div v-for="(image, imginx) in slide.slide"  :key="imginx" class="brand-title-img">
					<span v-if="image.image" :style="{ backgroundImage: `url(${image.image.sourceUrl})` }"></span>	
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CareerSliderSection' ,
	props: {
		images:{
			type: Array,
			default(){
				return []
			}
		}
	}
}
</script>

<style lang="scss">
.career-section-8{ 
	padding: 200px 0;
	.brand-slider-row{ --duration: 8s;}
	.brand-title-img{ 
		 margin: 0 15px;;
		 width: 758px;
		 span{
			display: block;
			width: 100%;
			min-height: 409px;
			border-radius: 500px;
			background-position: center center;
			background-repeat: no-repeat;
			background-size: cover;
		}

	} 
}
</style>