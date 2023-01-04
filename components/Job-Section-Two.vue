<template>
	<div class="job-section-2">
		<div class="container">
			<!-- eslint-disable vue/no-v-html -->
			<div data-scroll class="looking-section-block coman-effect-delay-2">
				<h3 v-if="title != ''">{{title}}</h3>
				<div class="looking-links">
					<ul>
						<li v-for="(point, inx) in points" :key="inx" ><NuxtLink to="/">{{point.requirementText}}</NuxtLink></li>
					</ul>
				</div>
			</div>
			<!-- eslint-disable vue/no-v-html -->
		</div>
	</div>
</template>

<script>
export default {
	name: 'JobDetailLookingSec',
	props:{
		title:{
			type: String,
			default(){
				return ''
			}
		},
		points:{
			type: Array,
			default(){
				return []
			}
		}
	}, 
}
</script>

<style lang="scss">
.job-section-2{ 
	padding: 0px 0; 
	.looking-section-block{
		max-width: 1170px;
		margin: 0 auto; width: 100%;
		display: block;

		h3{
			@include laptopH3;
			color: $white;
			text-align: center;
			  
		}
		.looking-links{
			padding: 45px 0 0 0;
			 ul{
				display: flex;
				justify-content: center;
				flex-wrap: wrap;
				margin: 0 0px;;
				
				li{
					margin: 15px 7px 15px 8px;
					 
					 a{
						 @include laptopH4;
						 border: $white solid 2px;
						 border-radius: 100px;
						 display: inline-block;
						 color:$white ;
						font-family: 'TT Norms Pro';
						 text-transform: uppercase;
						 padding: 3px 18px 0;
						 display: flex;
						 width: auto;
						 height: 60px;
						 align-items: center;
						 
						 &:hover{
							background: $pinkF6B3DC;
							border-color: $pinkF6B3DC;
                            color:$gyay121212 ;
						 }
					 }
				}
			 }
		}
		 
	}
}
</style>