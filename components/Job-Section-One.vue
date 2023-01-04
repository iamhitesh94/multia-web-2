<template>
	<div class="job-section-1">
		<div class="container">
			<!-- eslint-disable vue/no-v-html -->
			<div class="job-section-block">
				<h2>
					<div v-for="(line, inx) in lines" :key="inx" class="hidden-line"><span v-html="line.text"></span></div>
				</h2>
				<p v-html="text"></p>
			</div>
			<!-- eslint-enable vue/no-v-html -->
		</div>
	</div>
</template>

<script>
export default {
	name: 'JobDetailBannerSec',
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
.job-section-1 { 
	padding: 200px 0; 
	.job-section-block {
		max-width: 982px;
		margin: 0 auto;
		display: block;
		h2 {
			@include laptopH2;
			color: $gyay555555;
			padding:0 0 60px 0;
			.hidden-line {
				position: relative;
				display: block;
				overflow: hidden;
				padding:0 0 20px 0;
			}
			span {
				display: block;
				color: $gyay555555;
				transform: translate3d(0, -120%, 0);
    			transition: transform .9s cubic-bezier(0.23, 1, 0.32, 1);
				&.white{ color: $white;}
			}
			strong{
				font-weight: normal;
				color: $white;
			}
		}
		p {
			@include bodyText1;
			margin: 0px;
			padding: 0px;
			opacity: 0;
			transition: all  1s cubic-bezier(0.23, 1, 0.32, 1);
			transform: translateY(120px);
		}
	}
}
html.is-ready .job-section-1 .job-section-block h2 span { transition-delay: 0s; transform: translate3d(0, 0, 0);}
html.is-ready .job-section-1 .job-section-block h2 .hidden-line:nth-child(2) span { transition-delay: 0.135s;}
html.is-ready .job-section-1 .job-section-block p { opacity:1; transition-delay:0.5s; transform:translate3d(0, 0, 0);}
</style>