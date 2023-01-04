<template>
	<div class="career-section-9">
		 <div class="container">
			<div class="careear-quote-block">
				<h3 class="coman-effect" data-scroll>“{{text}}”</h3>
				<h4 class="coman-effect-delay-2" data-scroll>{{name}}</h4>
			</div>
		 </div>
	</div>
</template>
<script>
export default {
  	name: 'CareerQouteSection',
	props:{
		text:{
			type: String,
			default(){
				return ""
			}
		},
		name:{
			type: String,
			default(){
				return ""
			}
		}
	}
}
</script>

<style lang="scss">
.career-section-9{ 
	padding: 0 0 200px 0;
	 .careear-quote-block{
		max-width: 976px;
		margin: 0 auto;
		display: block;
		text-align: center;
		h3{
			@include laptopH3;
			color: $white;
			padding: 0 0 60px;
		}
		h4{
			@include laptopH4;
			color: $white;
			padding: 0 0 0px;
		}
	}
}
</style>