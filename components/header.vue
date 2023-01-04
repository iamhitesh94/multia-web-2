<template>
	<div class="header-main-outer">
		<header class="header">
			<div class="container">
				<div class="header-top flxrow">
					<div class="logo"><NuxtLink to="/"><img v-bind:src="themesettings.mainLogo.sourceUrl" alt=""></NuxtLink></div>
					<div class="header-right">
						<div class="main-nav"> 
							<!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
							<ul v-for="(menu, idx) in menus" v-if="menu.locations[0] === 'HEADER_MENU'" :id="menu.name" v-bind:key="idx" class="nav">
								<li v-for="item in menu.menuItems.edges" v-bind:key="item.node.id" :id="item.node.id"><NuxtLink v-bind:to="item.node.uri">{{item.node.label}}</NuxtLink></li>
							</ul>
							<!-- eslint-enable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
						</div>
						<div class="humburg-menu">
							<a href="javascript:void(0);">
								<span class="shape-white"></span>
								<span class="shape-black"></span>
								<span class="shape-black-2"></span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</header>
		<div class="menu-outer">
			<div class="container">
				<div class="menu-outer-inner">
					<div class="menu-colum-left">
						<div class="menu-block-left">
							<div class="menu-block-sub">
								<div class="m-logo"><img src="/assets/img/multia-logo-m.svg" alt=""> </div>
								<div class="menu-block-nav">
									<!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
									<ul v-for="(menu, idx) in menus" v-if="menu.locations[0] === 'TOGGLE_MENU'" :id="menu.name" v-bind:key="idx" class="nav">
										<li v-for="item in menu.menuItems.edges" v-bind:key="item.node.id" :id="item.node.id"><NuxtLink v-bind:to="item.node.uri">{{item.node.label}}</NuxtLink></li>
									</ul>
									<!-- eslint-enable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
								</div>
								<div v-if="themesettings.readLink.url != ''" class="read-links">
									<a :href="themesettings.readLink.url"><i><img src="/assets/img/plus.svg" alt=""></i><span>{{themesettings.readLink.title}}</span></a>
								</div>
								<div class="menu-text-round">
									<img src="/assets/img/menu-text.svg" alt="">
									<!-- <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
										width="380px" height="564.3px" viewBox="0 0 380 564.3" style="enable-background:new 0 0 380 564.3;" xml:space="preserve">
									<style type="text/css">
										.st0-menu{     opacity: 0;  stroke:#222222;stroke-width:3;}
										.st1-menu{font-family:'ArialMT';}
										.st1-menu{ fill:#555; font-size: 32px;}
										.st2-menu{font-size:32px;}
									</style>
									<path id="P1" class="st0-menu" d="M353.3,520.9L353.3,520.9H21.5v-332C21.5,99,95.8,26,187.4,26c91.5,0,165.7,72.8,165.9,162.5
										C353.3,188.6,353.3,520.8,353.3,520.9z"/>
									<text class="st1-menu">
										<textPath id="P2" href="#P1">
										Connecting Brands &#38; People. Connecting Brands  &#38; People. Connecting Brands &#38;  People. Connecting Brands &#38;  People.    Connecting Brands &#38; People. Connecting Brands  &#38; People. Connecting Brands &#38;  People. Connecting Brands &#38;  People.
										<animate 
											attributeName="startOffset"
											attributeType="XML"
											values="0;-380"
											keyTimes= "0;1"
											dur="2s"
											fill="freeze"
											repeatCount="1000"/>
										</textPath>
									</text>
									<animateMotion>
										<mpath href="#P2" />
									</animateMotion>
									</svg>-->

									<!--<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
										width="420px" height="545.2px" viewBox="0 0 420 545.2" style="enable-background:new 0 0 420 545.2;" xml:space="preserve">

									<style type="text/css">
										.st0-menu{  opacity: 0;  stroke:#222222;stroke-width:3;}
										.st1-menu{ fill:#555; font-size: 32px; color:#555; font-family:'ArialMT';}
										.st2-menu{font-size:32px;}
									</style>
									<path id="P1" class="st0-menu" d="M382.4,553.2L382.4,553.2h-350V213c0-94.8,78.4-171.8,175-171.8c96.5,0,174.8,76.8,175,171.4
										C382.4,212.7,382.4,553,382.4,553.2z"/>
									<text class="st1-menu">
										<textPath id="P2" href="#P1">
										Connecting Brands &#38; People. Connecting Brands  &#38; People. Connecting Brands &#38;  People. Connecting Brands &#38;  People.    Connecting Brands &#38; People. Connecting Brands  &#38; People. Connecting Brands &#38;  People. Connecting Brands &#38;  People.
										<animate 
											attributeName="startOffset"
											attributeType="XML"
											values="0;-380"
											keyTimes= "0;1"
											dur="6s"
											fill="freeze"
											repeatCount="1000000000"/>
										</textPath>
									</text>
									<animateMotion>
										<mpath href="#P2" />
									</animateMotion>
									</svg> -->
								</div>
							</div>
						</div>
					</div>
					<div class="menu-colum-right">
						<div class="img-over">
							<img src="/assets/img/menu-bg-border.svg" alt=""> 
						</div>
						<div class="back-image-main">
							<div class="back-imgaes-list">
								<div class="back-img-new imagebox_big"> <img v-bind:src="themesettings.toggleMenuBgImage.sourceUrl" alt=""></div>
							</div>
						</div>
						<div class="menurotete-text">
							<div v-for="(slide, idx) in themesettings.toggleMenuSlideText" v-bind:key="idx" class="menurotete-first">
								<div v-for="(text, idxtext) in slide.slide" v-bind:key="idxtext" class="rotete-text">{{text.text}}</div>
							</div>
						</div>
						<div class="fornt-image-main">
							<div class="fornt-imgaes-list">
								<div class="fornt-img imagebox">
									<div class="in_image">
										<img v-bind:src="themesettings.toggleMenuImage.sourceUrl" alt="">
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  	</div>
</template>

<script>
export default {
    name: 'NuxtError',
	// data() {
    //     return {
    //         lmS: null
    //     };
    // },
    props: {
		themesettings:[],
		menus:[],
        error: {
            type: Object,
            default: null
        }
    },
    computed: {
        statusCode() {
            return (this.error && this.error.statusCode) || 500
        },
        message() {
            return this.error.message || 'Error'
        }
    },
    // methods: {
    //     toggleBodyClass(addRemoveClass, className) {
    //         const el = document.documentElement;
    //         if (addRemoveClass === 'addClass') {
    //         	el.classList.add(className);
    //         } else {
    //         	el.classList.remove(className);
    //         }
    //     },
    // },
    // mounted() {
	// 	this.lmS = new this.LocomotiveScroll({
    //         el: document.querySelector("#js-scroll"),
    //         smooth: true,
    //     });

    //     this.lmS.on('call', func => {
    //         if (func === "w3n-counter") {
    //             jQuery(".w3n-counter").each(function() {
    //                 var $this = jQuery(this),
    //                 countTo = $this.attr('data-count');
    //                 jQuery({ countNum: $this.text()}).animate({
    //                     countNum: countTo
    //                 },
    //                 {
    //                     duration: 2000,
    //                     easing:'linear',
    //                     step: function() {
    //                         $this.text(Math.floor(this.countNum));
    //                     },
    //                     complete: function() {
    //                         $this.text(this.countNum);
    //                     }
    //                 });
    //             });
    //         }
    //     });

    //     setTimeout(() => {
    //         this.toggleBodyClass('addClass', 'is-ready');
    //     }, 500);
    // },
    // destroyed() {
	// 	this.lmS.destroy();
    //     this.toggleBodyClass('removeClass', 'is-ready');
    // }
}
</script>

<style lang="scss">
.header{ z-index: 11; position: absolute; left: 0px; top: 0px; width: 100%; }
.header-top {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 52px 0;
	.logo {
		display: block; 
		a { display: block;
			img {display: block;}
		}
  	}
	.header-right{ 
		display: flex;
		align-items: center;
		.humburg-menu {
			margin: 0 0 0 10px;
			display: block;
			a {
				z-index: 15;
				display: block;
				position: relative;
				width: 46.67px;
				height: 40px;    
				span.shape-white { position: absolute; left: 0px; top: 0px; width:32px; height: 100%;background: url(/assets/img/menu-shape-white.svg) no-repeat center center; z-index: 2; transition: all 0.3s ease-in-out;  }
				span.shape-black { position: absolute; right: 0px; top: 0px; width:32px; height: 20px;background: url(/assets/img/menu-shape-black.svg) no-repeat right top; z-index: 1;   transition: all 0.3s ease-in-out;}
				span.shape-black-2 {position: absolute; right: 0px;top: 50%;width:32px;height: 20px;background: url(/assets/img/menu-shape-black-2.svg) no-repeat right top; z-index: 3;   transition: all 0.3s ease-in-out;}
			}
		}
		ul.nav {
			display: flex; 
			align-items: center;
			li { margin: 0 0 0 10px; 
				a { color: $white;  min-width: 97px; display: flex; align-items: center; justify-content: center;    padding: 0px; font-size: 20px; font-weight: 400;  font-family: "freight-display-pro",serif; transition: none;  
				&:hover{ font-style: italic; letter-spacing: 0; }
				}
			}
		}
	}
}
.menu-outer{ display: none;   position: fixed; left: 0px; z-index: 10; top: 0px;width: 100%; height: 100vh; background: $gyay121212; 
  .menu-outer-inner{ justify-content: center;     height: 100vh; display: flex; align-items: center; 
    .menu-colum-left{width:664px ; min-height: 721px; background: url(../static/assets/img/menu-bg-border.svg) no-repeat left top; 
      display: flex; align-items: center; justify-content: center;      

      .menu-block-sub{ position: relative; width: 331px; border: $gyay222222 solid 3px; padding: 85px 0 0 0;; min-height: 494px;; background: $black;          border-radius: 300px 300px 0 0;   
        .m-logo{ padding: 0 0 56px;; display: block; width: 100%; text-align: center;
          img{ max-height: 34px; width: auto; }
        }
        .menu-block-nav{ display: block; width: 100%;
          ul{  display: flex; align-items: center; flex-wrap: wrap; 
            li{ width: 50%; border-top:$gyay222222 solid 3px ; 
             &:nth-child(2n+0){ border-left: $gyay222222 solid 3px;  } 
             a{@include  bodyText1;  display: flex ;align-items: center; justify-content: center; min-height: 75px;; color: $white;    
               line-height: 1;
               font-family: "freight-display-pro",serif;
               &:hover{  font-style: italic; }
             }
            }
          }
        }
        .read-links{ position: absolute; left: 0px ;top: calc(100% + 28px) ; width: 100%; display: flex; align-items: center; justify-content: center;  
          a{ display: flex; align-items: center; justify-content: center; color: $white; text-transform: uppercase; font-size: 18px;;  
             i{ margin: 0 8px 0 0; }
           }
        }
        .menu-text-round{ position: absolute; left: -36px; top: -37px; pointer-events: none; }
      }
    }
    .menu-colum-right{ overflow: hidden; width:664px ; margin: 0 0 0 -3px;; min-height: 721px; display: block;  position: relative;
      .img-over{ pointer-events: none; z-index: 4; position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; }
      .back-image-main{ position: absolute; left:3px; right: 3px; top: 0px;  height: 100%; z-index: 1;  
          .back-imgaes-list{ position: relative;display: flex;align-items: center; justify-content: center; width: 100%;  height: 100%;  
            .back-img{ position: absolute; left: 0px; top: 0px; height: 100%;  display: flex;align-items: center; justify-content: center; width: 100%; background-repeat: no-repeat;  background-size: cover; background-position: center center;  height: 100%; opacity: 0; transition: all 0.3s ease-in-out;  
            &.active{ opacity: 1;    }
            }
          }
      } 
       .fornt-image-main{ position: absolute; left:50%; right: auto; width: 331px; height: 494px; top: 50%;  z-index: 3;  transform: translate(-50%,-50%);   
          .fornt-imgaes-list{border-radius: 300px 300px 0 0;  overflow: hidden; position: relative;display: flex;align-items: center; justify-content: center; width: 100%;  height: 100%;  
            .fornt-img{ position: absolute; left: 0px; top: 0px; height: 100%;  display: flex;align-items: center; justify-content: center; width: 100%; background-repeat: no-repeat; border-radius: 300px 300px 0 0;  background-size:  cover; background-position: center center;   opacity: 1; z-index: 2;       transition: all 5s ease-in-out;  
            &.active{ opacity: 1; z-index: 3;        }
            }
          }
      }
     }
  }
}
.menurotete-text{ 
	--duration: 10s;
	width: 100vw; height: 100%;
	transition: all .2s ease-in-out;
	left: 0; z-index: 2;
	position: absolute; left: 0px; top: 0;   
	display: flex;
	flex-direction: row;
	justify-content: center;
	white-space: nowrap;
	animation: marquee calc(6 * var(--duration)) linear infinite;
	animation-play-state: paused;
	contain: layout; align-items: center;
	animation-direction: reverse;
		.menurotete-first{ 
			display: flex; 
			align-items: center;
			animation: marquee calc(3 * var(--duration)) linear infinite;
			white-space: nowrap; 	animation-play-state: paused;
		 
				.rotete-text{@include laptopH2;   font-style: italic; display: flex; align-items: center; white-space:nowrap; color: $white;  padding: 0 1vw 0 0;}
         line-height: 110%;}	
}
/*.imagebox_wrap { width: 331px; height: 494px; margin: 0 auto; border-radius: 300px 300px 0 0; overflow: hidden; position: absolute; left:50%;  top: 50%; z-index: 5;   transform: translate(-50%,-50%);}
        .imagebox { width: 0; height: 0; position: absolute; right: 0; bottom: 0; border-radius:300px 300px 0 0; overflow: hidden;
            transition: all ease-in-out 2s;
        }
        .imagebox .in_image { border-radius: 300px 300px 0 0; width: 331px; height: 494px; position: absolute; right: 0; bottom: 0; border-radius:300px 300px 0 0; overflow: hidden;}
        .imagebox .in_image img { object-fit: cover; width: 100%; height: 100%;}
        .imagebox.active { width: 331px; height: 494px;}
        .imagebox.zindex { z-index: 2;}

        .big_image_wrap { position: absolute; left:3px; top: 3px; right: 3px; bottom: 3px; overflow: hidden;}
        .big_image_wrap .imagebox_big { position: absolute; height: 150%; top: 0; right: 0; left: 0; opacity: 0; visibility: hidden;
            transition: all ease-in-out 1s;
        }
        .big_image_wrap .imagebox_big img { object-fit: cover; width: 100%; height: 100%;}
        .big_image_wrap .imagebox_big.active { animation: first-animation 7s infinite linear;}
        .big_image_wrap .imagebox_big.zindex { opacity: 1; visibility: visible; z-index: 2;}
        @keyframes first-animation {
            from {
                transform: translateY(0px);
            }
            to {
                transform: translateY(-10vh);
            }
        }*/

.menu-colum-right:hover .menurotete-text{    animation-play-state: running;}
.menu-colum-right:hover .menurotete-text .menurotete-first{animation-play-state: running; }
.header-top .header-right .humburg-menu a.active  span.shape-white{ z-index: 1; transform: translateX(15px); }
.header-top .header-right .humburg-menu a.active     span.shape-black{ opacity: 0.7; z-index: 2; transform: translateX(-15px); }
.header-top .header-right .humburg-menu a.active    span.shape-black-2{opacity: 0.7; z-index: 2; transform: translateX(-15px); }
body.menuOpen .header{ z-index:inherit ; }
.has-scroll-smooth body.menuOpen #js-scroll{ overflow: hidden; transform: none !important; }

.coman-effect{ transform: translateY(50px); opacity: 0; transition: all 0.5s ease-in-out;  }
.coman-effect.is-inview{ opacity: 1; transform: translateY(0); transition-delay: 0.2s;  } 
.coman-effect-delay-2{transform: translateY(50px); opacity: 0; transition: all 0.5s ease-in-out; }
.coman-effect-delay-2.is-inview{ opacity: 1; transform: translateY(0); transition-delay: 0.4s;  }

.coman-effect-delay-3{transform: translateY(50px); opacity: 0; transition: all 0.5s ease-in-out; }
.coman-effect-delay-3.is-inview{ opacity: 1; transform: translateY(0); transition-delay: 0.6s;  }
.coman-effect-delay-4{transform: translateY(50px); opacity: 0; transition: all 0.5s ease-in-out; }
.coman-effect-delay-4.is-inview{ opacity: 1; transform: translateY(0); transition-delay: 0.8s;  }
.coman-effect-delay-5{transform: translateY(50px); opacity: 0; transition: all 0.5s ease-in-out; }
.coman-effect-delay-5.is-inview{ opacity: 1; transform: translateY(0); transition-delay: 1s;  }

.coman-effect-inview{ transform: translateY(50px); opacity: 0; transition: all 0.5s ease-in-out;}
html.is-ready .coman-effect-inview { opacity: 1; transform: translateY(0); transition-delay: 0.2s;  } 


html{ background: $gyay121212;}
html body {         opacity: 0; visibility: hidden; transition: all 0.3s ease-in-out;  }
html.is-ready body  { opacity: 1; visibility:visible; }

/*html body #js-scroll{ opacity: 0;  visibility: hidden; transition: all 0.3s ease-in-out; }
html.is-ready body #js-scroll{ opacity: 1; visibility: hidden; }*/

@media (min-width: 1600px) and (max-width: 2100px) {
.header  .header-top{ padding: 62px 0; }
.home-banner .banner-text-home .explore-link a{ font-size: 36px;; }
}


/*.wrappper {  height: 100vh; display: flex; align-items: flex-end; justify-content: center; display: none;}
.imagebox_wrap { width: 50vw; height: 89vh; margin: 0 auto; border-radius: 1000px 1000px 0 0; overflow: hidden; position: relative; z-index: 5;}
.imagebox { width: 0; height: 0; position: absolute; right: 0; bottom: 0; border-radius:1000px 1000px 0 0; overflow: hidden;
transition: all ease-in-out 2s;
}
.imagebox .in_image { border-radius: 0px; width: 50vw; height: 89vh; position: absolute; right: 0; bottom: 0;  overflow: hidden;}
.imagebox .in_image img { object-fit: cover; object-position:center center;  width: 100%; height: 100%;}
.imagebox.active {width: 50vw; height: 89vh;}
.imagebox.zindex { z-index: 2;}

.big_image_wrap { position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden;}
.big_image_wrap .imagebox_big { position: absolute; height: 150vh; top: 0; right: 0; left: 0; opacity: 0; visibility: hidden;
transition: all ease-in-out 3s;
}
.big_image_wrap .imagebox_big img { object-fit: cover; width: 100%; height: 100%;}
.big_image_wrap .imagebox_big.active { animation: first-animation 7s infinite linear;}
.big_image_wrap .imagebox_big.zindex { opacity: 1; visibility: visible; z-index: 2;}
@keyframes first-animation {
from {
transform: translateY(0px);
}
to {
transform: translateY(-10vh);
}
}*/
</style>