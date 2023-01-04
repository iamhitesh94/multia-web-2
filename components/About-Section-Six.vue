<template>
	<div class="abouts-section-6" >
		 <div class="about-team-images">
			<div v-for="(image, inx) in images" :key="inx" :class="`img-${inx+1}`">
				<span data-scroll :style="{ backgroundImage: `url(${image.image.sourceUrl})` }"></span>
			</div>
		 </div>
		 <div class="container">
		 <div class="about-team-text coman-effect" data-scroll>
				<h2 v-html="title"></h2>
				<p v-html="text"></p>
				<div v-if="link.url" class="see-all-links">
					<a :href="link.url" :target="link.target"  class="primary-btn">{{link.title}}</a>
				</div>
		 </div>
		 </div>
	</div>
</template>

<script>
export default {
	name: 'AboutTeamSection',
	props:{
		images:{
			type: Array,
			default() {
				return []
			}
		},
		title:{
			type: String,
			default() {
				return ''
			}
		},
		text:{
			type: String,
			default() {
				return ''
			}
		},
		link:{
			type: Object,
			default() {
				return {}
			}
		},
	},
}
</script>

<style lang="scss">
 #__layout > div > div > div.abouts-section-6{ padding: 200px 0; background: $chremF3F1EC;
  .about-team-images{ display: flex; position: relative; 
	.img-1{ width: 27.6%; display: block; margin: 24.51vw 5.8% 0 0; 
		span{ padding: 112.56% 0 0 0; display: block; width: 100%; background-position: center center; background-size: cover; background-repeat: no-repeat; 
			transform: translateY(50px); opacity: 0; transition: all 0.5s ease-in-out;
			&.is-inview{  opacity: 1; transform: translateY(0); transition-delay: 0.3s; }
		}
	}
	.img-2{ width: 33.3%; display: block; margin: 0 5.8% 0 0; 
		span{ padding: 139.085% 0 0 0; display: block; width: 100%; background-position: center center; background-size: cover; background-repeat: no-repeat;
			transform: translateY(50px); opacity: 0; transition: all 0.5s ease-in-out;
			&.is-inview{  opacity: 1; transform: translateY(0); transition-delay: 0.2s; }
		}
	}
	.img-3{ width: 27.6%; display: block; margin:31.73vw 0% 0 0; 
		span{ padding: 108.58% 0 0 0; display: block; width: 100%; background-position: center center; background-size: cover; background-repeat: no-repeat; 
			transform: translateY(50px); opacity: 0; transition: all 0.5s ease-in-out;
			&.is-inview{  opacity: 1; transform: translateY(0); transition-delay: 0.4s; }
		}
	}
  }
  .about-team-text{ padding: 14px 0 0 0; margin:  0 auto; display: block; max-width: 669px; width: 100%; text-align: center;  
	h2{
		@include  H2; font-size:$h2-laptop-fs ; color: $gyay121212; padding: 0 0 60px;;
		span{ font-style: italic; }
	}
	p{ max-width: 423px; margin: 0 auto; display: block; @include bodyText1;   padding: 0px;; color: $gyay121212;}
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
