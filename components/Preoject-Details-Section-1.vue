<template>
	<div class="project-inner-section-1">
		<div class="project-inner-img" :style="{ backgroundImage: `url(${get_image(image, featureImage)})` }">
			<div class="container" >
				<div class="banner-text">
					<h1>
						<!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
						<div v-if="(lines.length > 0)" v-for="(line, inx) in lines" :key="inx" class="hidden-line">
							<span :class="`${line.isItalic ? 'italic-font' : ''}`">{{line.text}}</span>
						</div>
						<!-- eslint-enable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
						<div v-if="(!lines)" class="hidden-line">
							<span>{{title}}</span>
						</div>
					</h1>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'ProjectBannerSection',
	props:{
		title:{
			type: String,
			default(){
				return ''
			}
		},
		lines:{
			type: Array,
			default(){
				return []
			}
		},
		image:{
			type: Object,
			default(){
				return {}
			}
		},
		featureImage:{
			type: Object,
			default(){
				return {}
			}
		}
	},
	methods:{
		get_image(image, featureImage){
			if(image !== null  && image.sourceUrl !== undefined){
				return image.sourceUrl;
			}else if(featureImage !== null && featureImage.sourceUrl !== undefined){
				return featureImage.sourceUrl;
			}else{
				return '';
			}
		}
	} 
}
</script>

<style lang="scss">
.project-inner-img {
	width: 100%;  
	display: block;
	min-height: 100vh;
	background-position: center center;
	background-size: cover;
	background-repeat: no-repeat;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	&::after {
		position: absolute;
		left: 0px;
		top: 0px;
		width: 100%;
		height: 100%;
		content:'';
		background: $gyay121212;
		opacity: 0.2;
		pointer-events: none;
		z-index: 1;
	}
	.banner-text {
		width: 100%;
		position: relative;
		z-index: 5;
		text-align: center;
		h1 {
			@include laptopH1;
			color: $white;
			.hidden-line {
				position: relative;
				display: block;
				overflow: hidden;
				padding: 0 0 30px 0;
			}
			span {
				display: block;   
				transform: translate3d(0, -120%, 0);
				transition: transform .9s cubic-bezier(0.23, 1, 0.32, 1);
			}
			.italic-font {
				font-style: italic;
			}
		}
	}
}
html.is-ready .project-inner-img .banner-text h1 span { transition-delay: 0s; transform: translate3d(0, 0, 0);}
html.is-ready .project-inner-img .banner-text h1 .hidden-line:nth-child(2) span { transition-delay: 0.135s;}
html.is-ready .project-inner-img .banner-text h1 .hidden-line:nth-child(3) span { transition-delay: 0.27s;}
</style>