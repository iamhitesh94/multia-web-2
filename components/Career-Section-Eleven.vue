<template>
	<div class="career-section-11">
		<div class="container">
			<div class="career-join-block">
				<!-- eslint-disable vue/no-v-html -->
				<h2 data-scroll class="coman-effect" v-html="title"></h2>
				<p data-scroll class="coman-effect-delay-2" v-html="text"></p>
				<!-- eslint-enable vue/no-v-html -->
				<div v-if="link.url" data-scroll class="join-links coman-effect-delay-2">
					<NuxtLink :to="link.url" class="primary-btn-green">{{link.title}}</NuxtLink>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CareerCallToAction',
	props:{
		title:{
			type: String,
			default(){
				return ''
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
		}
	}
}
</script>

<style lang="scss">
.career-section-11{ 
	padding: 200px 0 0px 0;
	.career-join-block{
		max-width:864px;
		margin: 0 auto;
		display: block;
		width: 100%;
		text-align: center;

		 h2{
			@include laptopH2;
			width: 100%;
			text-align: center;
			color: $white;
			padding: 0 0 40px;
			span{
				font-style: italic;

			}

		 }

		 p{
			@include bodyText1;
			margin: 0px;
			padding: 0px;
			text-align: center;
			max-width: 640px;
			display:inline-block;
		 }
		 .join-links{ 
			display: flex;
			justify-content: center;
			padding: 40px 0 0;
		 } 
	}
}
</style>