<template>
	<div class="career-section-3">
		<!-- eslint-disable vue/no-v-html -->
		<div class="container">
			<h2 class="coman-effect" data-scroll v-html="title"></h2>
		</div>
		<div class="home-latest-news-outer coman-effect-delay-2" data-scroll>
			<div v-for="(job, inx) in jobs" :key="inx" class="letest-news-row">
				<div class="defult-title">
					{{job.title}}
				</div>
				<div class="hover-block">
					<NuxtLink :to="job.uri">
						<div class="brand-slider-row">
							<div v-for="(slideTexts, inxslide) in job.jobDetail.slidingText" :key="inxslide" class="brand-slider-first" v-html="get_slide_html(slideTexts)"></div>
						</div>
					</NuxtLink>
				</div>
			</div>
		</div>
		<!-- eslint-enable vue/no-v-html -->
	</div>
</template>

<script>
export default {
	name: 'CareerJobsSecs',
	props:{
		title:{
			type: String,
			default(){
				return ''
			}
		},
		jobs:{
			type: Array,
			default(){
				return []
			}
		}
	},
	methods:{
		get_slide_html(slideTexts){
			let html = "";
			if(slideTexts.slide.length > 0){
				for(let i = 0; i < slideTexts.slide.length; i++){
					const slide = slideTexts.slide[i];
					if(slide.hasTextimage === 'Text'){
						html += '<div class="brand-title">'+slide.text+'</div>';
					}else{
						html += '<div class="brand-title"><img src="'+slide.image.sourceUrl+'" alt=""></div>';
					}
					
				}
			}
			return html;
		},
	}
}
</script>

<style lang="scss">
#__layout > div > div > div.career-section-3 {
	background: $chremF3F1EC;
	padding: 2px 0 0 0;
	margin: -2px 0 0 0;
	h2 {
		width: 100%;
		text-align: center;
		@include laptopH2;
		padding: 0 0 101px;
		span {
			font-style: italic;
		}
	}
	.home-latest-news-outer{
		background: $white;
	}
	.letest-news-row {
		width: 100%;
		position: relative;
		display: block;
		will-change:background-position;
		background:linear-gradient(to bottom, $white 0%, $white 50%, $blue7A89E2 50%);
		background-size: 100% 200%;
		background-position: 0 0;
		border-top:3px solid #d1d1d1;
		padding: 54px 0;
		.defult-title {
			display: flex;
			align-items: center; 
			font-family: "freight-display-pro",serif; 
			justify-content: center;  
			font-size: $h3-laptop-fs; 
			line-height: 1.1; 
			color:$gyay121212;
			span {
				font-style: italic;
			}
		}
		.hover-block {
			visibility: hidden;
			opacity: 0; 
			transition: all 0.3s ease-in-out; 
			position: absolute; 
			left: 0px; 
			top: 0px; 
			height: 100%; 
			display: flex; 
			align-items: center; 
			width: 100%;
			background: none;
		}
		.brand-slider-row { 
			.brand-slider-first {
				.brand-title { display: flex; padding: 0 15px;  line-height: 1.2;    white-space: nowrap;   align-items: center; font-size:$h3-laptop-fs ; color:$gyay121212; 
					i {
						width: 202px;
						height: 109px;
						display: inline-block;
						border-radius: 150px;
						background-position: center center;
						background-size: cover;
						background-repeat: no-repeat;
					}
				}
			}
		}
		&:hover .hover-block { opacity: 1; visibility:visible;}
	}
}
</style>