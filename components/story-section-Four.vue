<template>
	<div class="story-section-4">
		<div class="container">
			<div v-if="(content !== '' && image.sourceUrl)" class="story-blcok-multia">
				<div class="story-blcok-multia-inner">
					<div data-scroll class="left-col-text coman-effect" v-html="content">
					</div>
					<div data-scroll class="right-col-img coman-effect-delay-2">
						<div class="shape_1">
							<span></span>
						</div>
						<div class="img">
							<img :src="image.sourceUrl" alt="">
						</div>
					</div>
				</div>
			</div>
			<div v-if="(scinceText !== '' && scinceLink.url)" data-scroll class="multia-scinces-block coman-effect">
				<div v-html="scinceText"></div>
				<div v-if="scinceLink.url" class="ct-links">
					<NuxtLink :to="scinceLink.url" class="primary-btn">{{scinceLink.title}}</NuxtLink>
				</div>
			</div>
		</div>
		<div  v-if="(lines.length > 0)" class="guideline-slider-row">
			<div v-for="(slide, inx) in lines" :key="inx" class="guideline-slider-inner">
				<div v-for="(text, slideInx) in slide.slide" :key="slideInx" class="guideline-title" v-html="text.text"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'StoryQouteSec' ,
	props:{
		lines:{
			type:Array,
			default(){
				return []
			}
		},
		content:{
			type:String,
			default(){
				return ''
			}
		},
		image:{
			type:Object,
			default(){
				return {}
			}
		},
		scinceText:{
			type:String,
			default(){
				return ''
			}
		},
		scinceLink:{
			type:Object,
			default(){
				return {}
			}
		}
	}
}
</script>

<style lang="scss">
.story-section-4{
	padding: 0 0 70px;
.story-blcok-multia{ 
	margin: 0 auto; display: block; width: 100%;
	.story-blcok-multia-inner{
		width: 100%; display: flex;
		justify-content: center;
		.left-col-text{
			max-width: 560px;
			padding: 185px 0 0 0;
			h3{
				@include laptopH3;
				color: $white;
				padding: 0 0 60px;
				span{font-style: italic; }
			}
			h4{
			@include laptopH4;
			color: $white;

			}
		}
		.right-col-img{ position: relative; margin: 0 0 0 -106px; display: block ; width: 804px; 
			.shape_1  { 
				z-index: 1;
				position: absolute; right: 0px;
				top: 0px; width: 657px; height: 657px; 
				border-radius: 100%;
				border: 1px solid rgba(196, 196, 196, 0.2);;
				display: flex;
				align-items: center; justify-content: center; 
				span{ width: 450px; height: 450px; 
					background: linear-gradient(180deg, #494647 0%, rgba(73, 70, 71, 0) 100%);
					border-radius: 100%; display: block;
				}
			 }
			 .img{ min-height: 968px; padding: 186px 186px 0 0; width: 100%; text-align: right; position: relative; z-index: 2; }
		}

	}
}
.multia-scinces-block{ display: block;
	width: 100%; text-align: center;
	margin: 0 auto;
	padding: 122px 0 200px 0;
	max-width: 833px;;
	h3{
		@include laptopH3;
		color: $white; padding: 0 0 60px;
		span{ font-style: italic; }
	}
	p{ margin: 0px; padding: 0px;; }
	.ct-links{ 
		display: flex; align-items: center; justify-content: center; padding: 60px 0 0 0;
	}
}
.guideline-slider-row{
	 .guideline-slider-inner{
		.guideline-title{
			span{ font-style: normal; }
		}
	 }
}
}
</style>