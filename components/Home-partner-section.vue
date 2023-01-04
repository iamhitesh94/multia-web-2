<template>
  	<div class="home-partner-section">
		<div class="container">
			<div class="partner-block">
				<div class="first-row">
					<div class="first-row-left">
						<div v-if="subTitle" v-html="subTitle" class="sub-text"></div>
						<h2 v-if="title" v-html="title"></h2>
					</div>
					<div class="first-row-right">
						<a v-bind:href="link.url" v-bind:target="link.target">
							<span>{{link.title}}</span>
						</a>
					</div>
				</div>
				<div class="second-row">
					<div class="partner-logos">
						<div v-for="(slide, idx) in logos" v-bind:key="idx" class="partner-logos-box">
							<!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
							<div v-if="logoimgs != 'Page_Homepage_clientsSecLogos'" v-for="(logoimgs, idxlogoimgs) in slide" v-bind:key="idxlogoimgs" class="partner-logo">
								<span v-for="(logo, idxlogo) in logoimgs" v-bind:key="idxlogo" class="brand-img"><img v-bind:src="logo.logo.sourceUrl" alt=""></span>
							</div>
							<!-- eslint-enable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
						</div>
					</div>
				</div>
			</div>
		</div>
  	</div>
</template>

<script>
export default {
	name: 'HomePartnerLogos',
	props:{
		title:[],
		subTitle:[],
		link:[],
		logos:[]
	}
}
</script>

<style lang="scss">
.home-partner-section{ position: relative; z-index: 1; padding: 0 0 200px; }
 .partner-block{ border: 3px solid $gyay222222; display: flex;flex-direction: column; 
	.first-row{ display: flex; 
		.first-row-left{ padding: 0 0 0 107px; display: flex; flex-direction: column; align-items: flex-start; justify-content: center; min-height: 328px; width: 75%; 
			.sub-text{ color: $gyay555555; font-size: 36px;line-height: 40px; font-family: "freight-display-pro",serif; }
			h2{@include  H2; color: $white;   font-style: italic;  font-size: $h2-laptop-fs; 
				span{ font-style: normal; }
			}
		}
		.first-row-right{ padding: 328px 0 0 0; position: relative;  width:25%; 
			a { position: absolute; left: 0px; top: 0px;; height: calc(100% + 4px);   z-index: 10; align-items: center; justify-content: center; width: calc(100% + 2px); text-transform: uppercase; text-align: center; justify-content: center; display: flex; margin: -3px -3px -3px 0; border: 3px solid $gyay222222; color: $white; font-size: 36px; line-height: 100%; 
			span{ max-width: 165px; }
			&:hover{ color: $green16A15E;border-color: $green16A15E;}
			}
		}
		
		
	}
	.second-row{border-top: 3px solid $gyay222222; margin: -2px 0 0 0;
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
 }
  @media (min-width: 1600px) and (max-width: 2100px) {
.home-partner-section{ padding: 0 0 220px; }

}
</style>
