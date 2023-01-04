<template>
	<div v-if="images.length > 0" class="intership-section-2">
		<div class="container">
			<div class="intership-images-block">
				<div v-for="(image, inx) in images" :key="inx" data-scroll :class="`intership-img-${inx+1} coman-effect`">
					<div class="img" :style="{ backgroundImage: `url(${image.image.sourceUrl})` }">
						<img src="/assets/img/intership-img-1.jpg" alt="">
					</div>
					<h4>{{image.text}}</h4>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'IntershipImageSec' ,
	props:{
		images:{
			type: Array,
			default(){
				return []
			}
		}
	}
}
</script>

<style lang="scss">
.intership-images-block{ 
	display: flex;
	flex-wrap: wrap;
	 
	 .intership-img-1{
		 width:36.7%;
		 margin: 11.11vw 0 0 0;
		 .img{
			padding: 142.045% 0 0 0;
			display: block;
			width: 100%;
			background-position: center center;
			background-size: cover;
			background-repeat: no-repeat;
			position: relative;
			img{
				display: none;
				width: 100%;
			}
		  }
		  h4{
			@include laptopH4;
			color: $white;
			padding: 30px 0 0 0;
		  }
		 
	    }

		.intership-img-2{
		 width:36.7%; margin-left: auto;
		 .img{
			padding: 142.045% 0 0 0;
			display: block;
			width: 100%;
			background-position: center center;
			background-size: cover;
			background-repeat: no-repeat;
			position: relative;
			img{
				display: none;
				width: 100%;
			}
		  }
		    h4{
			@include laptopH4;
			color: $white;
			padding: 30px 0 0 0;
		  }
		 
	    }
		.intership-img-3{
		 width:52.2%; margin-top: 142px; margin-right: 5.7vw; margin-left: auto;
		 .img{
			padding: 74.46% 0 0 0;
			display: block;
			width: 100%;
			background-position: center center;
			background-size: cover;
			background-repeat: no-repeat;
			position: relative;
			img{
				display: none;
				width: 100%;
			}
		  }
		    h4{
			@include laptopH4;
			color: $white;
			padding: 30px 0 0 0;
		  }
		 
	    }
		 
}
</style>