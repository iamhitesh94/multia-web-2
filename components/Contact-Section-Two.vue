<template>
	<div class="contact-section-4">
		<!-- eslint-disable vue/no-v-html -->
		<div v-if="images.length > 0" class="about-team-images">
			<div v-for="(image, inx) in images" :key="inx" :class="`img-${inx+1}`">
				<span :style="{ backgroundImage: `url(${image.image.sourceUrl})` }"></span>
			</div>
		</div>
		<div class="container">
			<div class="about-team-text">
				<h2 data-scroll class="coman-effect" v-html="callSecTitle"></h2>
				<p data-scroll class="coman-effect-delay-2" v-html="callSecText"></p>
				<div data-scroll class="see-all-links coman-effect-delay-2">
					<a href="#" class="primary-btn">be a part of multia</a>
				</div>
			</div>
		</div>
		<!-- eslint-enable vue/no-v-html -->
	</div>
</template>

<script>
export default {
	name: 'ContactFormImageSec',
	props:{
		images:{
			type: Array,
			default(){
				return []
			}
		},
		callSecTitle:{
			type: String,
			default(){
				return ''
			}
		},
		callSecText:{
			type: String,
			default(){
				return ''
			}
		},
		callSecLink:{
			type: Object,
			default(){
				return {}
			}
		}
	}
}
</script>

<style lang="scss">
#__layout > div > div > div.contact-section-4{ position: relative; padding: 0 0 200px 0; background: $chremF3F1EC;
 &::after{ position: absolute; left: 0px; top: 0px; width: 100%; height: 28.54vw; content: ''; background: $gyay121212;  z-index: 1;}
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
  .about-team-text{ padding: 14px 0 0 0; margin:  0 auto; display: block; max-width: 669px; width: 100%; text-align: center;  
	h2{
		@include  H2; font-size:$h2-laptop-fs ; color: $gyay121212; padding: 0 0 60px;;
		span{ font-style: italic; }
	}
	p{ max-width:100%; margin: 0 auto; display: block; @include bodyText1;   padding: 0px;; color: $gyay121212;}
	.see-all-links{ padding: 60px 0 0 0; 
		.primary-btn{color: $gyay121212; border-color:$gyay121212 ; padding-top: 14px;}
	}
	.see-all-links {
		a{
			&:hover{ color: $green16A15E;border-color: $green16A15E;}
		}
	}
  }
}
</style>