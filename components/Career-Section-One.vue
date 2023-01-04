<template>
    <div class="career-section-main">
		<div v-if="title || subTitle" class="career-section-1">
			<div class="container">
				<h1>
					<div v-if="title" class="hidden-line">
						<span>{{title}}</span>
					</div>
					<div v-if="subTitle" class="hidden-line">
						<span class="white" v-html="subTitle"></span>
					</div>
				</h1>
			</div>
		</div>
		<div v-if="content || images" class="career-section-2">
			<div class="about-team-images coman-effect" data-scroll>
				<div v-for="(image,inx) in images" :key="inx" :class="`img-${inx+1}`">
					<span :style="{ backgroundImage: `url(${image.image.sourceUrl})` }"></span>
				</div>
			</div>
			<div class="container">
				<div class="about-team-text coman-effect-delay-2" v-html="content" data-scroll>
				</div>
			</div>
		</div>
	</div> 
</template>

<script>
export default {
	name: 'CareerTitleSec',
	props:{
		title: {
			type: String,
			default(){
				return ''
			}
		},
		subTitle: {
			type: String,
			default(){
				return ''
			}
		},
		content: {
			type: String,
			default(){
				return ''
			}
		},
		images: {
			type: Array,
			default(){
				return []
			}
		}
	}
}
</script>

<style lang="scss">
.career-section-1 { 
	padding: 220px 0 239px 0;
	h1{
		@include desktopH1;
		color: $gyay555555;
		text-align: center;
		.hidden-line{
			position: relative;
			display: block;
			overflow: hidden;
			padding: 0 0 50px;
		}
		span{
			display: block;   
			transform: translate3d(0, -120%, 0);
    		transition: transform .9s cubic-bezier(0.23, 1, 0.32, 1);
		}
		span.white{
			color: $white;
			font-style: italic;
		}
		strong{
			font-weight: normal;
			font-style: italic;
			color: $white;
		}
	}
}
html.is-ready .career-section-1  h1 .hidden-line span { transition-delay: 0s; transform: translate3d(0, 0, 0);}
html.is-ready .career-section-1  h1 .hidden-line:nth-child(2) span{ transition-delay: 0.135s; }
.career-section-2{
	background: $chremF3F1EC;
	position: relative;
	display: block;
	padding: 0 0 200px;
	 
	&::after{ position: absolute; left: 0px; top: -5px; width: 100%; height: 28.54vw; content: ''; background: $gyay121212;  z-index: 1;}
  .about-team-images{ display: flex; position: relative; position: relative; z-index: 5; 
	.img-1{ width: 27.1%; display: block; margin: 12.5vw 6.3% 0 0; 
		span{ padding: 112.56% 0 0 0; display: block; width: 100%; background-position: center center; background-size: cover; background-repeat: no-repeat;  }
	}
	.img-2{ width: 33.3%; display: block; margin: 0 6.3% 0 0; 
		span{ padding: 121.875% 0 0 0; display: block; width: 100%; background-position: center center; background-size: cover; background-repeat: no-repeat;  }
	}
	.img-3{ width: 27.1%; display: block; margin:18.05vw 0% 0 0; 
		span{ padding: 112.56% 0 0 0; display: block; width: 100%; background-position: center center; background-size: cover; background-repeat: no-repeat;  }
	}
  }
  .about-team-text{
	padding: 90px 0 0 0;
	max-width: 871px;
	margin: 0 auto;
	display: block;
	text-align: center;	
		h3{
			@include laptopH3;
			color: $gyay121212;
			padding: 0 10% 60px;
		}
		p{
			@include bodyText1;
			color: $gyay121212;
			margin: 0px;
			padding: 0px;
			 + p{ padding: 24px 0 0 0;  }
		}
  }
}
</style>