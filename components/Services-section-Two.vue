<template>
	<div v-if="leftTitle !== '' || rightTitle !== '' || leftContent !== '' || rightContent !== ''" class="services-section-2"  >
		  <div class="container">
			 	 <div class="customers-block ">
					<div v-if="leftTitle !== '' || rightTitle !== ''" class="customers-block-inner coman-effect" data-scroll>
						<div v-if="leftTitle !== ''" class="left-colum-cus">
							<h4 v-html="leftTitle"></h4>
						</div>
						<div v-if="rightTitle !== ''" class="right-colum-cus">
							<h4 v-html="rightTitle"></h4>
						</div>
					</div>
					
					<div v-if="leftContent !== '' || rightContent !== ''" class="customers-block-carcle" data-scroll>
						<div class="round-1"  data-scroll></div>
						<div class="round-2"  data-scroll></div>
						<div v-if="leftContent !== ''" class="left-colum-cus" v-html="leftContent">
						</div>
						<div v-if="rightContent !== ''" class="right-colum-cus" v-html="rightContent">
						</div>
					</div>
				 </div>  
		  </div>
	</div>
</template>
<script>
export default {
	name: 'ServiceCircleSec',
	props:{
		leftTitle:{
			type: String,
			default(){
				return ''
			}
		},
		leftContent:{
			type: String,
			default(){
				return ''
			}
		},
		rightTitle:{
			type: String,
			default(){
				return ''
			}
		},
		rightContent:{
			type: String,
			default(){
				return ''
			}
		}
	},
}


</script>

<style lang="scss">
 .customers-block{
	max-width: 1088px;
	margin: 0 auto; 
	display: block;
	.customers-block-inner{ 
		padding: 0 0 60px;
		display: flex; align-items: center;
			.left-colum-cus{
				 width: 50%;
			}
			.right-colum-cus{
				width: 50%;
			}
			h4{
				 @include laptopH4;
				display: block;
				width: 100%;
				text-align: center;
				color: $white;
			}
	 }
	 .customers-block-carcle{
		width: 100%;
		display: flex;
		justify-content: space-between;
		position: relative;
		.round-1{ 
			position: absolute;
			left: 50%;
			top: 0;
			width: 640px;
			height: 640px;
			border-radius: 100%;
			border: $gyay555555 solid 3px;
			transform: translateX(-50%);
			opacity: 0;
			transition: all 1s ease-in-out;
		 }
		 .round-2{ 
			position: absolute;
			right: 50%;
			top: 0;
			width: 640px;
			height: 640px;
			border-radius: 100%;
			border: $white solid 3px;
			transform: translateX(50%);
			opacity: 0;
			transition: all 1s ease-in-out;
		 }
		 .left-colum-cus{
			 width: 416px; 
			 min-height: 640px;
			 padding: 0 0 0 112px;
			 display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			 

		 }
		 .right-colum-cus{
			 width: 416px; 
			 min-height: 640px;
			 padding: 0 112px 0 0px;
			  display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			 

		 }
		 h6{
			@include bodyText1;
			width: 100%;
			text-align: center;
			color: $pinkF6B3DC;
			padding: 0 0 30px;
			opacity: 0;
			transition: all 1s ease-in-out;

		 }
		 ul{
			width: 100%;
			display: block;
			opacity: 0;
			transition: all 1s ease-in-out;
			li{
				 @include laptopH4;
				width: 100%;
				padding: 30px 0;
				text-align: center;
				color: $white;
				 + li{ 
					border-top: $gyay222222 solid 3px;
				  }
			}
		 }
		 &.is-inview{
			.round-1{
				opacity: 1;
				transition-delay: 1s;
				&.is-inview{
					left: 0px;
					transform: none;
					transition-delay: 2s;
				}
			
				 
			}
			.round-2{
				opacity: 1;
				transition-delay: 0.8s;
				left: auto;
				&.is-inview{
					left: auto;
					right: 0px;
					transform: none;
					transition-delay: 2s;
				} 
				 
			}
				 h6{
				opacity: 1;
				transition-delay: 2.8s;
			}	
			ul{
				opacity: 1;
				transition-delay: 2.8s;
			}
		 }
	

	 }
 }
 
</style>
