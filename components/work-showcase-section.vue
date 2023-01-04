<template>
    <div class="work-showcase-section">
	    <div v-if="(projects.length > 0)" class="work-showcase-block">
            <div id="swiper" class="swiper">
                <div class="swiper-wrapper">
                    <div v-for="(project, inx) in projects" :key="inx" class="swiper-slide">
                        <div class="slider-box">
                            <div class="image">
                                <img :src="project.featuredImage.node.sourceUrl" :alt="project.featuredImage.node.title">
                            </div>
                            <div class="image-caption">
                                <NuxtLink :to="project.uri"><h3>{{project.title}}</h3></NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="work-toggle-switch">
            <NuxtLink class="switch-btn" to="/Type-Of-Work-listing">Grid</NuxtLink>
            <NuxtLink class="switch-btn" to="/Work-Showcase">Showcase</NuxtLink>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectSlider',
    props:{
        projects:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style lang="scss">
.work-showcase-section { width:100%; min-height:100vh; position:relative; display:flex; flex-direction:column; justify-content:center; padding:160px 0 100px 0;}
.work-showcase-block { width:100%; position:relative;}
.work-showcase-block .swiper { width:100%;}
.work-showcase-block .swiper .swiper-wrapper { align-items:center;}
.work-showcase-block .swiper .swiper-slide { width:416px;}
.work-showcase-block .swiper .swiper-slide .slider-box { width:100%; position:relative;}
.work-showcase-block .swiper .swiper-slide .slider-box .image { width:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; overflow:hidden; opacity:0.7; transition:all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);}
.work-showcase-block .swiper .swiper-slide .slider-box .image img { width:230px; max-width:100%; height:270px; display:block; object-fit:cover;}
.work-showcase-block .swiper .swiper-slide .slider-box .image-caption { width:100%; display:block; text-align:center; opacity:0; visibility:hidden; transition:all 1s cubic-bezier(0.075, 0.82, 0.165, 1); margin:30px 0 0 0;}
.work-showcase-block .swiper .swiper-slide .slider-box .image-caption h3 { font-family: "freight-display-pro",serif; font-size:36px; color:#FFFFFF; font-weight:400; line-height:1.2; margin:0; padding:0;}
.work-showcase-block .swiper .swiper-slide.swiper-slide-active .slider-box .image { opacity:1; border-radius:1000px;}
.work-showcase-block .swiper .swiper-slide.swiper-slide-active .slider-box .image img { border-radius:1000px; width:100%; height:416px;}
.work-showcase-block .swiper .swiper-slide.swiper-slide-active .slider-box .image-caption { opacity:1; visibility:visible;}
.work-showcase-block .swiper .swiper-slide-shadow-left,
.work-showcase-block .swiper .swiper-slide-shadow-right { background-image:none;}
.work-toggle-switch { width:auto; display:flex; flex-wrap:wrap; border:3px solid #555555; border-radius:100px; position:fixed; right:60px; bottom:70px; z-index:100; margin:0; padding:0;}
.work-toggle-switch .switch-btn { width:auto; min-width:90px; position:relative; z-index:1; display:block; font-family: "TT Norms Pro"; font-size:18px; color:#555555; text-transform:uppercase; text-align:center; line-height:1; margin:0; padding:9px 15px 7px 15px;}
.work-toggle-switch .switch-btn:before { content:""; background:#16A15E; border-radius:100px; opacity:0; visibility:hidden; position:absolute; top:-3px; right:-3px; bottom:-3px; left:-3px; z-index:-1;}
.work-toggle-switch .switch-btn.nuxt-link-active { color:#FFFFFF;}
.work-toggle-switch .switch-btn.nuxt-link-active:before { opacity:1; visibility:visible;}
</style>