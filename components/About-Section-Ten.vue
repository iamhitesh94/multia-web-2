<template>
	<div class="abouts-section-7" >
		  <div class="container">
				<div class="our-work-text coman-effect" v-html="get_combined_html(icon,text)" data-scroll></div>
				<div class="second-row coman-effect-delay-2" data-scroll>
				<div class="partner-logos">
					<div v-for="(slide, idx) in images" v-bind:key="idx" class="partner-logos-box">
						<!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
						<div v-if="logoimgs != 'Template_AboutPage_Aboutoptions_multiversitySecImages'" v-for="(logoimgs, idxlogoimgs) in slide" v-bind:key="idxlogoimgs" class="partner-logo">
							<span v-for="(logo, idxlogo) in logoimgs" v-bind:key="idxlogo" class="brand-img"><img v-bind:src="logo.image.sourceUrl" alt=""></span>
						</div>
						<!-- eslint-enable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
					</div>
				</div>
			</div>
			 
		  </div>
	</div>
</template>

<script>
export default {
	name: 'AboutMultiversitySection',
	props:{
		icon:{
			type: Object,
			default() {
				return {}
			}
		},
		text:{
			type: String,
			default() {
				return ''
			}
		},
		images:{
			type: Array,
			default() {
				return []
			}
		},
	},methods:{
		get_combined_html(icon,text){
			let html = '';
			if(icon.sourceUrl !== undefined){
				html += '<div class="icon"><img src="'+icon.sourceUrl+'" alt=""></div>';
			}

			if(text !== ''){
				html += text;
			}

			return html;
		}
	}
}
</script>

<style lang="scss">
.abouts-section-7{ padding: 200px 0; 
	.our-work-text{ padding: 0 0 90px; text-align: center; max-width: 690px; margin: 0 auto; display: block;   
		h3{ @include H3; font-size: $h3-laptop-fs; color: $white; padding: 0 0 40px;;}
		p{  margin: 0px; padding: 0 40px; @include bodyText1; }
		.icon{ padding: 0 0 60px;; }
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
	.see-all-links {
		 a{ padding-top: 14px;; }
	}
}
 
 
</style>
