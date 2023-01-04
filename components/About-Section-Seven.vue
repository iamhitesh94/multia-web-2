<template>
	<div class="abouts-section-7" >
		  <div class="container">
				<!-- eslint-disable vue/no-v-html -->
				<div class="our-work-text coman-effect" data-scroll v-html="text" ></div>
				<div class="second-row coman-effect-delay-2" data-scroll >
				<div class="partner-logos">
					<div v-for="(slide, idx) in images" :key="idx" class="partner-logos-box">
						<!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
						<div v-for="(logoimgs, idxlogoimgs) in slide" v-if="logoimgs != 'Template_AboutPage_Aboutoptions_brandsSecImages'" :key="idxlogoimgs" class="partner-logo">
							<span v-for="(logo, idxlogo) in logoimgs" :key="idxlogo" class="brand-img"><img :src="logo.image.sourceUrl" alt=""></span>
						</div>
						<!-- eslint-enable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
					</div>
				</div>
				<!-- eslint-enable vue/no-v-html -->
			</div>
			<div v-if="link.url" class="see-all-links  coman-effect-delay-2" data-scroll>
				<a :href="link.url" :target="link.target"  class="primary-btn">{{link.title}}</a>
			</div>
		  </div>
	</div>
</template>

<script>
export default {
	name: 'AboutClinetSection',
	props:{
		images:{
			type: Array,
			default() {
				return []
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
.abouts-section-7{ padding: 200px 0; 
	.our-work-text{ padding: 0 0 90px; text-align: center; max-width: 644px; margin: 0 auto; display: block;   
		h3{ @include H3; font-size: $h3-laptop-fs; color: $white; padding: 0 0 40px;;}
		p{ margin: 0px; padding: 0px; @include bodyText1; }
	}
	.second-row{border: 3px solid $gyay222222; margin: 0px 0 0px 0;
		.partner-logos{ display: flex; 
			.partner-logos-box{ position: relative; width: 25%; border-left: 3px solid $gyay222222; display: flex; justify-content: center; align-items: center; min-height: 328px;
				.partner-logo{ position: relative; 
					  span{ position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%); opacity: 0; transition: all 0.5s ease-in-out; 
					 	
					  }
					  span.active{ opacity: 1; }
				}
			  &:first-child{ border: 0px; }
			}
			
		}
	}
	.see-all-links { padding: 70px 0 0 0;
		 a{ padding-top: 14px;; }
	}
}
 
 
</style>
