<template>
	<div class="page-title-outer">
		<div class="container">
			<div class="page-title">
				<!-- eslint-disable vue/no-v-html -->
				<h1><div class="hidden-line"><span v-html="title"></span></div></h1>
				<!-- eslint-enable vue/no-v-html -->
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'PageTitleSec',
	props:{
		title:{
			type: String,
			default: '',
		}
	}
}
</script>

<style lang="scss">
.page-title-outer{ padding: 200px 0 90px; 
	.page-title {
		h1{@include  H1; display: block; width: 100%; font-size: $h1-laptop-fs; text-align: center;
			color:$gyay555555 ;
			.hidden-line{
				position: relative;
				display: block;
				overflow: hidden;
			}
			i{ color: $white; }
			span{ display: block;   
				transform: translate3d(0, -120%, 0);
    			transition: transform .9s cubic-bezier(0.23, 1, 0.32, 1);
			}
		}
	}
}
html.is-ready .page-title-outer .page-title  h1 .hidden-line span { transition-delay: 0s; transform: translate3d(0, 0, 0);}
html.is-ready .page-title-outer .page-title  h1 .hidden-line:nth-child(2) span { transition-delay: 0.135s; }
html.is-ready .page-title-outer .page-title  h1 .hidden-line:nth-child(3) span { transition-delay: 0.27s; }
html.is-ready .page-title-outer .page-title  h1 .hidden-line:nth-child(4) span { transition-delay: 0.27s; }
</style>