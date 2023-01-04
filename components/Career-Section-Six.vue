<template>
	<div class="Clients-section-6"  >
		  
		  <div class="clients-svg-rays">
			 
<div class="clients-svg-rays-inner" >
 

<svg  id="Layer_1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="2378.8px" height="1222.1px" viewBox="0 0 2378.8 1222.1" style="enable-background:new 0 0 2378.8 1222.1;"
	 xml:space="preserve">
<style type="text/css">
	.st0-rays{fill:#222222;}
	.st1-rays{display:none;stroke:#222222;stroke-width:3;}
</style>
<path class="st0-rays" d="M1187.6,1222V43.1l-100.1,1174.4l-3-0.3L1185.2,36.4L984.6,1203.7l-3-0.5L1182.2,35.8l-299,1145l-2.9-0.8
	l299-1145L784.2,1148.9l-2.8-1l395.2-1114L688.3,1108.3l-2.7-1.2L1173.9,32.6L596.2,1059.3l-2.6-1.5L1171.3,31l-662.8,971.1
	l-2.5-1.7l662.9-971.3L426.1,937.3l-2.3-1.9L1166.7,27L349.5,865.4l-2.2-2.1l817.3-838.5L279.2,787l-2-2.3l885.6-762.1L216,702.8
	l-1.8-2.4l947-680.4l-1001,593l-1.5-2.6l1001.2-593L112.2,518.6l-1.3-2.7L1158.7,14.6L72.4,420.3l-1.1-2.8L1157.7,11.8L41,318.8
	l-0.8-2.9L1157,8.9L18.4,214.9l-0.5-2.9L1156.5,6L4.7,109.4l-0.3-3L1156.2,3H0l0-3l1189.1,0l0.5,0l1189.2,0v3H1222.6l1151.8,103.3
	l-0.3,3L1222.3,5.9l1138.6,206l-0.5,2.9L1221.8,8.8l1116.9,307.1l-0.8,2.9l-1116.7-307l1086.4,405.7l-1.1,2.8L1220.2,14.6
	L2268,515.9l-1.3,2.7L1219.1,17.4l1001.1,593l-1.5,2.6L1217.6,20l946.9,680.3l-1.8,2.4L1215.9,22.5l885.6,762.4l-2,2.3L1214.1,25
	l817.3,838.5l-2.1,2.1L1212.1,27.2L1955,935.5l-2.3,1.9L1209.9,29.2l662.8,971.2l-2.5,1.7L1207.4,30.9l577.9,1026.8l-2.6,1.5
	L1205,32.5L1693.3,1107l-2.7,1.2L1202.3,33.9l395.1,1114l-2.8,1L1199.4,35l299.1,1145l-2.9,0.8l-299-1144.9l200.6,1167.3l-3,0.5
	L1193.6,36.4l100.7,1180.8l-3,0.3L1190.6,36.7V1222H1187.6z"/>
<path class="st1-rays" d="M3643.8,1651.4v638.8h-638.2v-638.8c0-173.1,142.9-313.5,319.1-313.5
	C3500.9,1337.9,3643.8,1478.3,3643.8,1651.4z"/>
</svg>

</div>

		</div>
		<!-- eslint-disable vue/no-v-html -->
		<div class="home-about-inner">
			<div class="about-door"></div>
			<div v-if="image.sourceUrl" class="door-img" :style="{ backgroundImage: `url(${image.sourceUrl})` }"></div>
			<div class="home-about-text">
				<div v-if="text" class="text">
					<h3 v-html="text"></h3>
				</div>
				<div v-if="link.url" class="abouts-btn">
					<NuxtLink :to="link.url">{{link.title}}</NuxtLink>
				</div>
			</div>
		</div>
		<!-- eslint-enable vue/no-v-html -->
	</div>
</template>

<script>

export default {
	name: 'CareerTestamentSec',
	props:{
		image:{
			type: Object,
			default(){
				return {
					sourceUrl: ''
				}
			}
		},
		text:{
			type: String,
			default(){
				return ''
			}
		},
		link:{
			type: Object,
			default(){
				return {}
			}
		}
	} 
}


</script>

<style lang="scss">
.Clients-section-6{ position: relative; padding: 588px  0 0 0; margin: 0px 0 200px; display: block; width: 100%;
	.clients-svg-rays{ position: relative; left: 50%; top: 0px; transform: translateX(-50%); margin: 0px 0 0 0;    display: flex; justify-content: center; 
		.clients-svg-rays-inner{ width: 2378px; 
			svg{ width: 2378px;  height: auto;  transform: scale(0); transform-origin: center top; opacity: 0;transition: all 1s ease-in-out;   }
		}

		
	}
	.home-about-inner{ position: absolute; top: 0px;; left:50%; transform: translateX(-50%);  bottom: 0px; width: 871px;  height: 1553px;  
		 overflow: hidden;border-radius:1000px; 
		 .door-img{ 
			min-height: 585px;
			background-position: center center;
			display: block;
			width: 100%;
			position: relative;
			z-index: 2;
			opacity: 0;
			transition: all 0.3s ease-in-out;

		 }
		 .about-door{ z-index: 1; width: 100%; border-radius:1000px; display: block; position: absolute; border: 3px solid $gyay222222;  left: 0px; top: 0px; height:0; background: $black; opacity: 0;transition: all 0.3s ease-in-out; 
		transition: all 0.8s ease-in-out; opacity: 0; 
		 
		}
		 .home-about-text{ 
			width: 100%;
			position: relative;
			z-index: 3;
			text-align: center;
			padding: 160px 57px;
			
			.text{
				padding: 0 0 60px;
				h3{
					@include laptopH3;
					color: $white;
					opacity: 0;
			transition: all 0.3s ease-in-out;
				}
			}
			.abouts-btn{ margin:0px 0 0 0; justify-content: center; display: flex;align-items: center; 
				opacity: 0;
			transition: all 0.3s ease-in-out;    
				a{  color: $green16A15E; background: $black; border: $green16A15E solid 2px; border-radius: 100px;; height: 60px; display: flex;  align-items: center; justify-content: center; font-size: $h4-laptop-fs; text-transform: uppercase; padding: 4px 20px 0;  
				&:hover { color: $white; border-color: $white;   }
				}
			}
		 }
		 
		
	}
} 
 

.Clients-section-6.is-inview .clients-svg-rays svg{ opacity: 1;  transform: scale(1); transition-delay: 0.5s;  }
.Clients-section-6.is-inview  .about-door{ height: 100%; opacity: 1; transition-delay: 1.5s; }
.Clients-section-6.is-inview  .door-img{opacity: 1;   transition-delay: 1.7s;    }
.Clients-section-6.is-inview .home-about-text .text h3{ opacity: 1; transition-delay: 1.8s;  }
.Clients-section-6.is-inview .home-about-text .abouts-btn{ opacity: 1; transition-delay: 2s;  }
</style>
