<template>
	<div class="Collaborations-section-1"  >
		  <div class="container">
				<div class="Collaborations-banner-text">
					<h1>
						<!-- eslint-disable vue/no-v-html -->
						<div v-for="(line, inx) in lines" :key="inx" class="hidden-line" v-html="line.line"></div>
						<!-- eslint-enable vue/no-v-html -->
					</h1>
				</div>  
		  </div>
	</div>
</template>

<script>

export default {
	name: 'CollaborationBannerSec',
	props:{
		lines:{
			type: Array,
			default(){
				return []
			}
		}
	} 
}


</script>

<style lang="scss">
 .Collaborations-section-1 {
	padding:180px 0 120px;
	.Collaborations-banner-text { 
		h1 {
			@include laptopH1;
			color: $gyay555555;
			line-height: 1.11;
			text-align: center;
			.hidden-line {
				position: relative;
				display: block;
				overflow: hidden;
			}
			span {
				display: inline-block;
				margin-top: -2%;
				padding: 0 0 2%;
				transform: translate3d(0, -120%, 0);
    			transition: transform .9s cubic-bezier(0.23, 1, 0.32, 1);
			}
			span.white { 
				color: $white;
				font-style:italic;
			}
		}
	}
}
html.is-ready .Collaborations-banner-text h1 span { transition-delay: 0s; transform: translate3d(0, 0, 0);}
html.is-ready .Collaborations-banner-text h1 .hidden-line:nth-child(2) span { transition-delay: 0.135s;}
html.is-ready .Collaborations-banner-text h1 .hidden-line:nth-child(3) span { transition-delay: 0.27s;}
</style>