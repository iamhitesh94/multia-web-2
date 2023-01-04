<template>
	<div class="intership-section-1">
		<div class="container">
			<h1>
				<!-- eslint-disable vue/no-v-html -->
				<div v-for="(line,inx) in lines" :key="inx" class="hidden-line" v-html="line.line"></div>
				<!-- eslint-enable vue/no-v-html -->
			</h1>
		</div>
	</div>
</template>

<script>
export default {
	name: 'IntershipBannerSec',
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
.intership-section-1 { 
	padding: 200px 0 200px 0;
	h1{
		@include desktopH1;
		color: $gyay555555;
		text-align: center;
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
		span.white{
			color: $white;
			font-style: italic;
		}
		strong{
			font-weight: normal;
			font-style: italic;
			color: $white;
		}
	}
}
html.is-ready .intership-section-1 h1 span { transition-delay: 0s; transform: translate3d(0, 0, 0);}
html.is-ready .intership-section-1 h1 .hidden-line:nth-child(2) span { transition-delay: 0.135s; }
html.is-ready .intership-section-1 h1 .hidden-line:nth-child(3) span { transition-delay: 0.27s; }
</style>