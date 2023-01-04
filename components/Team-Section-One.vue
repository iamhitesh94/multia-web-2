<template>
	<div class="page-title-outer">
		<div class="container">
			<div class="page-title">
				<h1>
					<div v-for="(line,inx) in lines" :key="inx" class="hidden-line" v-html="line.line"></div>
				</h1>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TeamTitleSec',
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
.page-title-outer {
	padding: 200px 0 200px;
	.page-title {
		h1 {
			@include H1;
			display: block;
			width: 100%;
			font-size: $h1-laptop-fs;
			text-align: center;
			color:$gyay555555;
			font-family: "freight-display-pro",serif;
			.hidden-line {
				position: relative;
				display: block;
				overflow: hidden;
				padding: 0 0 2%;
			}
			i {
				padding: 0 0 0%;
				color: $white;
			}
			span {
				display: inline-block;   
				transform: translate3d(0, -120%, 0);
    			transition: transform .9s cubic-bezier(0.23, 1, 0.32, 1);
			}
		}
	}
}
html.is-ready .page-title-outer .page-title h1 span { transition-delay: 0s; transform: translate3d(0, 0, 0);}
html.is-ready .page-title-outer .page-title h1 .hidden-line:nth-child(2) span { transition-delay: 0.135s;}
</style>