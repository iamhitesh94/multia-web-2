<template>
	 <div class="abouts-section-1">
		<!-- eslint-disable vue/no-v-html -->
		<div class="container" >
			<div v-if="image || text" class="images-block"  >
				<div class="img"     >
					<span  :style="{ backgroundImage: `url(${image.sourceUrl})` }"  data-scroll data-scroll-speed="2" ></span>
				</div>
				<div v-if="text != ''" class="about-text"   >
					<p v-html="text"></p>
				</div>
			</div>
			<div v-if="storyText || storyLink" class="about-story-block"  data-scroll>
				<h3 v-html="storyText"></h3>
				<div class="see-all-links">
					<a :href="storyLink.url" :target="storyLink.target" class="primary-btn">{{storyLink.title}}</a>
				</div>
			</div>
		</div>
		<!-- eslint-enable vue/no-v-html -->
	 </div>
</template>

<script>
export default {
	name: 'AboutBannerSec',
	props:{
		image:{
			type: Object ,
			default() {
				return {}
			}
		},
		text:{
			type: String,
			default() {
				return ""
			}
		},
		storyText:{
			type: String,
			default() {
				return ""
			}
		},
		storyLink:{
			type: Object,
			default() {
				return {}
			}
		}
	}
}
</script>

<style lang="scss">
.abouts-section-1{  padding: 0 0 200px;  display: block; width: 100%;
	.images-block{  position: relative;;
	 	width: 100%; max-width: 880px; margin: 0 auto; display: block; position: relative;
		.img  { width: 100%; display: block; position: relative; height: 1298px; overflow: hidden; border-radius: 440px 440px 0 0;
			    transform:translateY(80px); opacity: 0;
    		    transition: all 0.5s ease-in-out;
			span{ display: block; width: 100%; position: absolute; left: 0px; top: -200px;  bottom: -200px;  background-position: center center; background-size: cover; background-repeat: no-repeat;  border-radius: 0px 0 0; overflow: hidden;
			&::after{ position: absolute; left: 0px;  top: 0px; width: 100%; height: 100%; content: ''; background:$gyay121212 ;  opacity: 0.4;  }
			}
		}
		.about-text{ width: 100%;  position: absolute; left: -105px; top: 110px; max-width: 753px;
			transform:translateY(80px); opacity: 0;
    		    transition: all 0.5s ease-in-out;

			p{ font-family: "freight-display-pro",serif;font-size: 36px;line-height: 46px; margin: 0px; padding: 0px;;}
			&.is-inview{transform:translateY(0px); opacity: 1; transition-delay: 1s;   }
		}
	}
	.about-story-block{ padding: 200px 0 0 0; max-width: 834px; margin: 0 auto; display:block; width: 100%; text-align: center;
			transform:translateY(80px); opacity: 0;
    		    transition: all 0.5s ease-in-out;
		h3{ font-size: $h3-laptop-fs; padding: 0 0 60px;}
		.primary-btn{  padding-top: 14px;; }
		.see-all-links{ margin: 0px; padding: 0px;; }
		&.is-inview{transform:translateY(0px); opacity: 1; transition-delay: 0.5s;   }

	}

}
html.is-ready .abouts-section-1 .images-block .img{  opacity: 1;    transition-delay: 1s; transform: translate3d(0, 0, 0);}
html.is-ready .abouts-section-1 .images-block  .about-text{  opacity: 1;    transition-delay: 1.4s; transform: translate3d(0, 0, 0);}

</style>
