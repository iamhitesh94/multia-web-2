<template>
	<div class="career-section-3-new">
		<div class="container">
			<div class="careear-program-block">
				<div class="careear-program-block-inner">
					<!-- eslint-disable vue/no-v-html -->
					<div class="careear-program-left coman-effect-delay-2" data-scroll>
						<div class="img" :style="{ backgroundImage: `url(/assets/img/program-img.jpg)` }"></div>
						<div class="text-inner">
							<div v-html="text"></div>
							<div v-if="link.url" class="program-links">
								<NuxtLink :to="link.url" :class="`primary-btn-green`">{{link.title}}</NuxtLink>
							</div>
						</div>
					</div>
					<div class="careear-program-right coman-effect-delay-2" data-scroll>
						<div class="img" :style="{ backgroundImage: `url(/assets/img/program-img-2.jpg)` }"></div>
					</div>
					<!-- eslint-enable vue/no-v-html -->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CareerInternship' ,
	props:{
		leftImage:{
			type: Object,
			default(){
				return {}
			}
		},
		rightImage:{
			type: Object,
			default(){
				return {}
			}
		},
		text:{
			type: String,
			default(){
				return ''
			}
		},
		link:{
			type: Object,
			default(){
				return {}
			}
		},
	}
}
</script>

<style lang="scss">
.career-section-3-new{ padding: 200px 0 0 0; }
 .careear-program-block{ 
	max-width: 1088px;
	margin: 0 auto;
	display: block;
	.careear-program-block-inner{
		display: flex; 
		justify-content: space-between;
	
	.careear-program-left{
		max-width: 757px;
		 .img{
			max-width: 640px;
			min-height: 460px;
			display: block;
			background-position: center center;
			background-size: cover;
			background-repeat: no-repeat;
		 }
		 .text-inner{
			padding: 58px 0 0 0;
			h2{
				@include laptopH2;
				color: $white;
				padding: 0 0 62px;;
				span{
					 font-style: italic;
				}
			}
			p{
				@include bodyText1;
				margin: 0px;
				padding: 0px;
			}
			.program-links{
				padding: 60px 0 0 0;
				 display: flex; 
				 align-items: flex-start;
			}
		 }
	}
	.careear-program-right{
		width: 303px;
		padding: 150px 0 0 0;
		.img{
			width: 100%;
			max-width: 100%;
			min-height: 390px;
			display: block;
			background-position: center center;
			background-size: cover;
			background-repeat: no-repeat;
		 }
	}
	}
 }
</style>
