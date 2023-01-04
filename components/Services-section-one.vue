<template>
	<div class="services-section-1"  >
		<div class="container">
			<div class="services-title">
				<!-- eslint-disable vue/no-v-html -->
				<h1>
					<div v-for="(line,inx) in lines" :key="inx" class="hidden-line" v-html="combine_html(line)"></div>
				</h1>
				<h4 v-html="text"></h4>
				<!-- eslint-enable vue/no-v-html -->
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'ServiceBannerSec',
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
	},
	methods:{
		combine_html(line){
			let html = line.title;
			if(line.hasIcon && line.icon.sourceUrl !== undefined){
				html = html.replace("#icon#", '<i><img src="'+line.icon.sourceUrl+'" alt=""></i>');
			}
			let classNm = '';
			if(line.hasIcon){
				classNm = 'white';
			}
			html = "<span class='"+classNm+"'>"+html+"</span>";
			return html;
		}
	}
}


</script>

<style lang="scss">
 .services-section-1{
	padding: 200px 0 ;
	.services-title{
		display: block;
		width: 100%;
		text-align: center;
		h1{
			width: 100%;
			display: block;
			@include laptopH1;
			color: $gyay555555;
			padding: 0 0 50px;
			.hidden-line{
					position: relative;
				display: block;
				overflow: hidden;
			}
			.hidden-line + .hidden-line{ margin: 60px 0 0 0; }
			span{
				display: flex; 
				align-items: center;
				justify-content: center;
				transform: translate3d(0, -120%, 0);
    			transition: transform .9s cubic-bezier(0.23, 1, 0.32, 1);
				i{
					margin: 0 30px;;
				}
				&.white{ color:$white ; font-style: italic; }
			}
		}
		h4{
			@include laptopH4;
			margin: 0px auto;
			max-width: 1102px;
			padding: 0px;
			color: $white;
			opacity: 0;
			transition: all  1s cubic-bezier(0.23, 1, 0.32, 1);
			display: block;
			transform: translateY(120px);
    			 
		}
	}
 }

  html.is-ready .services-section-1 h1 .hidden-line span { transition-delay: 0s; transform: translate3d(0, 0, 0);}
    html.is-ready .services-section-1 h1 .hidden-line:nth-child(2) span { transition-delay: 0.2s; transform: translate3d(0, 0, 0);}
	html.is-ready .services-section-1 h4{ opacity: 1; transition-delay: 0.5s; transform: translate3d(0, 0, 0);  }
</style>
