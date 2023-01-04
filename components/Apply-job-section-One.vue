<template>
	<div class="appy-job-Section-1">
		<div class="container">
			<div class="page-title">
				<h1>
					<div v-for="(line,inx) in lines" :key="inx" class="hidden-line"><span :class="{ 'white': line.isWhiteText }" v-html="line.line"></span></div>
				</h1>
				<div v-html="content"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ApplyJobHeader',
	props:{
		content: {
			type: String,
			default() {
				return ''
			}
		},
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
 .appy-job-Section-1{ padding: 200px 0 90px; 
	.page-title {
		 max-width: 1088px; margin: 0 auto;
		 display: block; width: 100%;
		h1 { @include laptopH1; display: block; width: 100%;   text-align: center; padding:  0 0 150px;
			color:$gyay555555;
			.hidden-line {
				position: relative;
				display: block;
				overflow: hidden;
				padding: 0 0 50px 0;
			}
			i { color: $white;}
			span {
				display: block;   
				transform: translate3d(0, -120%, 0);
    			transition: transform .9s cubic-bezier(0.23, 1, 0.32, 1);
			}
		}
		h3 {
			@include laptopH3;
			color: $white;
			text-align: center;
			opacity: 0;
			transition: all  1s cubic-bezier(0.23, 1, 0.32, 1);
			display: block;
			transform: translateY(120px);
		}
	}
 }
html.is-ready .appy-job-Section-1 .page-title h1 .hidden-line span{ transition-delay: 0s; transform: translate3d(0, 0, 0);}
html.is-ready .appy-job-Section-1 .page-title h3  { opacity: 1; transition-delay: 0.5s; transform: translate3d(0, 0, 0);}
</style>