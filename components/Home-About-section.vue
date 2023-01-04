<template>
   <div class="home-about-outer"  >
		<div class="about-svg-rays">
			 
<div class="about-svg-rays-inner" >
			<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="2378.8px" height="1222.1px" viewBox="0 0 2378.8 1222.1" style="enable-background:new 0 0 2378.8 1222.1;"
	 xml:space="preserve">
<style type="text/css">
	.st0-rays{fill:#222222;}
	.st1-rays{display:none;stroke:#222222;stroke-width:3;}
</style>
<path class="st0-rays" d="M1191.2,0v1178.9L1291.3,4.5l3,0.3l-100.7,1180.8L1394.2,18.3l3,0.5l-200.6,1167.4l299-1145l2.9,0.8l-299,1145
	L1594.6,73.1l2.8,1l-395.2,1114l488.3-1074.4l2.7,1.2l-488.3,1074.5l577.7-1026.7l2.6,1.5L1207.5,1191l662.8-971.1l2.5,1.7
	l-662.9,971.3l742.8-908.2l2.3,1.9l-742.9,908.4l817.2-838.4l2.2,2.1l-817.3,838.5l885.4-762.2l2,2.3L1216,1199.4l946.8-680.2
	l1.8,2.4L1217.6,1202l1001-593l1.5,2.6l-1001.2,593l1047.7-501.2l1.3,2.7l-1047.8,501.3l1086.3-405.7l1.1,2.8l-1086.4,405.7
	l1116.7-307l0.8,2.9l-1116.8,307l1138.6-206l0.5,2.9l-1138.6,206l1151.8-103.4l0.3,3l-1151.8,103.4h1156.2v3H1189.7h-0.5H0v-3
	h1156.2L4.4,1115.7l0.3-3l1151.8,103.4l-1138.6-206l0.5-2.9l1138.6,206L40.1,906.1l0.8-2.9l1116.7,307L71.2,804.5l1.1-2.8
	l1086.3,405.7L110.8,706.1l1.3-2.7l1047.6,501.2l-1001.1-593l1.5-2.6l1001.1,593L214.3,521.7l1.8-2.4l946.8,680.2L277.3,437.1l2-2.3
	l885.4,762.2L347.4,358.5l2.1-2.1l817.2,838.4L423.8,286.5l2.3-1.9l742.8,908.2L506.1,221.6l2.5-1.7l662.8,971.2L593.5,164.3
	l2.6-1.5l577.7,1026.7L685.5,115l2.7-1.2l488.3,1074.3L781.4,74.1l2.8-1L1179.4,1187L880.3,42l2.9-0.8l299,1144.9L981.6,18.8l3-0.5
	l200.6,1167.3L1084.5,4.8l3-0.3l100.7,1180.8V0H1191.2z"/>
<path class="st1-rays" d="M3643.8,1651.4v638.8h-638.2v-638.8c0-173.1,142.9-313.5,319.1-313.5
	C3500.9,1337.9,3643.8,1478.3,3643.8,1651.4z"/>
</svg>

</div>

		</div>

		<div class="home-about-inner">
			<div class="about-door"></div>
			<div class="home-about-text">
				<div v-if="text" class="text">
					<h3>{{text}}</h3>
				</div>
				<div class="abouts-btn">
					 <button v-on:click="say()">{{btnLink.title}}</button>
					  
				</div>
			</div>
		</div>
   </div>
</template>

<script>
export default {
  	name: 'HomeAbout',
	props:{
		text:[],
		btnLink: []
	},
	methods: {
		say() {
			jQuery(".home-about-inner").toggleClass("active");
			const current = this;
			setTimeout(function () {
				current.$router.push(this.btnLink.url);
			}, 1100);
		}
	}
}
</script>

<style lang="scss">
.home-about-outer{  z-index: 10;  position: relative; margin: 120px 0 220px; display: block; width: 100%;
	.about-svg-rays{ position: relative;  display: flex; justify-content: center; 
		.about-svg-rays-inner{ width: 2378px; 
			svg{ width: 2378px;  height: auto;  transform: scale(0); transform-origin: center bottom; opacity: 0;transition: all 1s ease-in-out;   }
		}

		
	}
	.home-about-inner{ position: absolute; left: 50%; transform: translateX(-50%);  bottom: 0px; width: 638px; min-height: 922px;  
		.about-door{ z-index: 1; width: 100%; border-radius: 319px 319px 0 0; display: block; position: absolute; border: 3px solid $gyay222222;  left: 0px; bottom: 0px; height:0; background: $black; opacity: 0;transition: all 0.4s ease-in-out; 
			transition: all 0.8s ease-in-out; opacity: 0;  transform-origin: center center;
		&::after{ width: 3px; height: 0; z-index: 10; position: absolute; background: $gyay222222; left: 50%; bottom: 0px; bottom: 0px; content: ''; margin: 0 0 0 -1px;;  transition: all 0.8s ease-in-out;  }
		}
		.home-about-text{  padding: 173px 80px 0; position: relative; z-index: 2; width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: center; transition: all 0.3s ease-in-out;   
		  
			h3{@include  H3; color: $white; padding: 28px 0 31px; background: $black;  text-align: center; line-height: 1.1; font-size: $h3-laptop-fs; 
				 transition: all 0.3s ease-in-out; opacity: 0;
			}
			.abouts-btn{ margin: 87px 0 0 0; transition: all 0.3s ease-in-out; opacity: 0;    justify-content: center; display: flex;align-items: center;
				transition: all 0.3s ease-in-out; opacity: 0;  
				button{  color: $white; background: $black; border: $white solid 2px; border-radius: 100px;; height: 60px; display: flex;  align-items: center; justify-content: center; font-size: $h4-laptop-fs; text-transform: uppercase; padding: 4px 20px 0;  
				&:hover { color: $green16A15E; border-color: $green16A15E;   }
				}
			}
		}
		
	}
} 
.home-about-outer.is-inview .about-svg-rays svg{ opacity: 1;  transform: scale(1); transition-delay: 0.2s;  }
.home-about-outer.is-inview  .about-door{ height: 100%; opacity: 1; transition-delay: 1s; }
.home-about-outer.is-inview  .about-door::after{ height: 100%;  transition-delay: 1.2s;    }
.home-about-outer.is-inview .home-about-text h3{ opacity: 1; transition-delay: 1.8s;  }
.home-about-outer.is-inview .home-about-text .abouts-btn{ opacity: 1; transition-delay: 2.2s;  }
.home-about-inner.active  .about-door{ z-index: 1000; transition: all 1s ease-in-out; transition-delay: 0s; border-color: $black; transform: scale(5);   }
.home-about-inner.active  .about-door::after{ transition-delay: 0s; opacity: 0; }
.home-about-inner.active .home-about-text{ opacity: 0; }
</style>
