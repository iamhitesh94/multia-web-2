<template>
	<div class="intership-section-3">
		<div class="container">
			<!-- eslint-disable vue/no-v-html -->
			<div data-scroll class="intership-doing-block coman-effect-delay-2">
				<div v-html="content"></div>
				<div class="join-links">
					<NuxtLink class="primary-btn-green" :to="link.url" :target="link.target">{{link.title}}</NuxtLink>
				</div>
			</div>
			<!-- eslint-enable vue/no-v-html -->
		</div>
	</div>
</template>

<script>
export default {
	name: 'IntershipContentSec',
	props:{
		content:{
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
.intership-section-3{
	padding: 200px  0 0 0 ;
	.intership-doing-block{
		max-width: 894px;
		margin: 0 auto;
		display: block;
		width: 100%;
		text-align: center;

		h3{
			@include laptopH3;
			color: $white;
			padding: 0 0 60px;
			span{
				font-style: italic;
			}
		}
		p{
			@include bodyText1;
			margin: 0px;
			padding: 0px;
			color: $white;
			+ p{ margin: 30px 0 0 0; }
		}
		.join-links{
			display: flex;
			justify-content: center;
			padding: 60px 0 0 0;
		}
	}
}
</style>