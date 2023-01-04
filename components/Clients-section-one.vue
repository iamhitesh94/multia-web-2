<template>
	<div class="Clients-section-1"  >
		  <div class="container">
				<div class="Clients-top-block">
					<h1>
						<div v-for="(line,inx) in lines" :key="inx" class="hidden-line"><span v-bind:class="{'white': line.hasWhiteText,}">{{line.line}}</span></div>
					</h1>
					<div data-scroll class="text coman-effect-inview">
						<h4 v-html="text"></h4>
					</div>
				</div>  
		  </div>
	</div>
</template>

<script>
export default {
	name: 'ClientPageTitle',
	props:{
		lines:{
			type: Array,
			default(){
				return []
			}
		},
		text:{
			type: String,
			default(){
				return ''
			}
		}
	}
}
</script>

<style lang="scss">
.Clients-section-1{
	padding: 200px 0 60px 0;
	text-align: center;
	h1 {
		@include laptopH1;
		color: $gyay555555;
			
			text-align: center;
		.hidden-line{
			position: relative;
			display: block;
			overflow: hidden;
		}
		span {
			display: inline-block;
			margin-top: -1.3%;
			padding: 0 0 0% ;
			transform: translate3d(0, -120%, 0);
			transition: transform .9s cubic-bezier(0.23, 1, 0.32, 1);
		}
		span.white{ 
			color: $white;
			font-style:italic;
		}
	}
	.text {
		padding: 100px 0 0 0;
		max-width: 833px;
		width: 100%;
		margin: 0 auto;
		display: block; 
		h4 {
			@include laptopH4;
			color: $white;
		}
	}
}
html.is-ready .Clients-section-1 h1 span{ transition-delay: 0s; transform: translate3d(0, 0, 0);}
html.is-ready .Clients-section-1 h1 .hidden-line:nth-child(2) span{ transition-delay: 0.135s; }
html.is-ready .Clients-section-1 h1 .hidden-line:nth-child(3) span{ transition-delay: 0.27s; }
</style>