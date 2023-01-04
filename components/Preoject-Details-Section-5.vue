<template>
	<div v-if="text" class="project-inner-section-5">
		<div class="container">
			<div data-scroll class="quote-text coman-effect">
				<h3 v-html="text"></h3>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'ProjectQouteSec',
	props:{
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
.project-inner-section-5{
	padding: 200px 0;
	.quote-text{ max-width: 870px;
		margin: 0 auto;
		display: block;
		width: 100%;
		text-align: center;
		h3{
			@include laptopH3;
			color: $white;
			span{
				font-style: italic;
			}
		}
	} 
}
</style>