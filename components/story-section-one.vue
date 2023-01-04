<template>
	<div v-if="(lines.length > 0)" class="story-section-1"  >
		<div class="container">
			<div class="story_block">
				<h1>
					<div v-for="(line, inx) in lines" :key="inx" class="hidden-line"><span v-html="line.lineText"></span></div>
				</h1>
			</div>	 
		</div>
	</div>
</template>

<script>
export default {
	name: 'StoryBannerSec',
	props: {
		lines:{
			type: Array,
			Default(){
				return []
			}
		}
	}
}
</script>

<style lang="scss">
 .story-section-1 {  padding: 200px 0 200px; 
	.story_block{ justify-content: space-between; text-align: center; flex-direction: column; display: flex; align-items: center; 
		.hidden-line{
			position: relative;
			display: block;
			overflow: hidden;
			&:first-child{
				span{
					padding-bottom: 30px;  margin-top: -30px; 
				} 
			}
		}
		h1 {
			@include laptopH1;
			color: $gyay555555;
			padding: 0 0 60px;
		 	span {
				display: block;   
				transform: translate3d(0, -120%, 0);
    			transition: transform .9s cubic-bezier(0.23, 1, 0.32, 1);
		 		i{
					font-style: italic;
					color: $white;
				}
		 	}
		}
	}
}
html.is-ready .story-section-1 .story_block h1 span { transition-delay: 0s; transform: translate3d(0, 0, 0);}
html.is-ready .story-section-1 .story_block h1 .hidden-line:nth-child(2) span { transition-delay: 0.135s;}
html.is-ready .story-section-1 .story_block h1 .hidden-line:nth-child(3) span { transition-delay: 0.27s;}
html.is-ready .story-section-1 .story_block h1 .hidden-line:nth-child(4) span { transition-delay: 0.35s;}
</style>