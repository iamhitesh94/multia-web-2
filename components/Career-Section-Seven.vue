<template>
	<div class="career-section-7">
		<div class="container">
			<div class="what-we-offer">
				<!-- eslint-disable vue/no-v-html -->
				<h2 class="coman-effect" data-scroll v-html="title"></h2>
				<div class="grow-block-inner">
					<div v-if="leftContent.length" class="left-col">
						<div v-for="(row,inx) in leftContent" :key="inx" class="grow-box coman-effect-delay-2" data-scroll>
							<h3 v-html="row.title"></h3>
							<p v-html="row.content"></p>
						</div>
					</div>
					<div v-if="rightContent.length" class="right-col">
						<div v-for="(row,inx) in rightContent" :key="inx" class="grow-box coman-effect-delay-2" data-scroll>
							<h3 v-html="row.title"></h3>
							<p v-html="row.content"></p>
						</div>
					</div>
				</div>
				<!-- eslint-enable vue/no-v-html -->
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CareerGrowSection' ,
	props:{
		title:{
			type: String,
			default(){
				return ''
			}
		},
		leftContent:{
			type: Array,
			default(){
				return []
			}
		},
		rightContent:{
			type: Array,
			default(){
				return []
			}
		}
	}
}
</script>

<style lang="scss">
.career-section-7{ 
	padding: 0px 0;
	.what-we-offer{
		 width: 100%;
		 max-width: 1098px;
		 display: block;
		 margin: 0 auto;
		 h2{
			@include laptopH2;
			color: $white;
			span{
				 font-style: italic;
			}
		 }	
		 .grow-block-inner{
			display: flex;
			justify-content: space-between;
			.left-col{
				max-width: 416px;
			}
			.right-col{
				max-width: 416px;
				padding: 100px 0 0 0;
			}
			.grow-box{
				padding: 200px 0 0 0;
				h3{
					@include laptopH3;	
					color: $white;
					padding: 0 0 40px;
					span{
						font-style: italic;
						&.green{color: $green16A15E;}
						&.purple{color: $blue7A89E2;}
						&.Yellow{color: $orangeEBBC52;}
						&.pink{color: $pinkF6B3DC;}
					}

				}
				p{
					@include bodyText1;
					margin: 0px;
					padding: 0px;
				}
			}
		 }
	}
}
</style>