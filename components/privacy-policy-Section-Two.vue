<template>
	<div v-if="content" class="PrivacyPolicy-section-2">
		<div class="container">
			<div data-scroll class="defult-page-block coman-effect" v-html="content"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'PolicyContent',
	props:{
		content:{
			type: String,
			default(){
				return ''
			}
		}
	}
}
</script>

<style lang="scss">
#__layout > div > div > div.PrivacyPolicy-section-2{ 
	padding: 200px 0 200px 0;
	background: $chremF3F1EC;
	.defult-page-block{
		display: block;
		width: 100%;
		max-width: 864px;
		margin: 0 auto;

		h4{
			@include laptopH4;
			color: $gyay121212;
			margin: 0px;
			padding: 60px 0 30px;
		}
		p{
			@include bodyText2;
			color: $gyay121212;
			margin: 0px;
			padding: 0px;
			+ ul{ padding-top: 30px; }
			+ ol{ padding-top: 30px; }
			+ p{ padding: 30px 0 0 0; }
			a{
				color: $gyay121212;
				text-decoration: underline;	
			}
		}
		ul{
			margin:0 ;
			padding: 0 0 0 18px; 
			li{ 
				@include bodyText2;
			    color: $gyay121212;
				margin: 0px;
				padding: 0 0 0 5px;
				display: list-item;
				list-style-type: disc;
				list-style-position: outside;

					a{
						color: $gyay121212;
						text-decoration: underline;	
					}
			}
			 + p{ padding-top: 30px;; }
		}
		ol{
			margin:0 ;
			padding: 0 0 0 18px; 
			li{ 
				@include bodyText2;
			    color: $gyay121212;
				margin: 0px;
				padding: 0 0 0 5px;
				display: list-item;
				list-style-type: decimal;
				list-style-position: outside;
						a{
							color: $gyay121212;
							text-decoration: underline;	
						}
			}
			 + p{ padding-top: 30px;; }
		}
	}
}
</style>