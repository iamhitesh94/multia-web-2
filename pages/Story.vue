<template>
    <div id="js-scroll" class="story-page-body" data-scroll-container>
        <div class="story-page-outer ">
            <div class="img">
                <img class="rotate-img-full" src="/assets/img/story-img-rotete.jpg" alt="">
            </div>
        </div>
        <Header :themesettings="themesettings" :menus="menus" data-scroll />
        <storySectionOne v-if="storypage.bannerSecTitleLines" :lines="storypage.bannerSecTitleLines" data-scroll />
        <storySectionTwo v-if="(storypage.storyBlocksBlocks || storypage.lines || storypage.storyBlocks2Blocks)" :blocks="storypage.storyBlocksBlocks" :lines="storypage.lines" :blocks-two="storypage.storyBlocks2Blocks" data-scroll />
        <storySectionThree v-if="storypage.texts" :lines="storypage.texts" data-scroll />
        <storySectionFour v-if="(storypage.qouteSecContent || storypage.qouteSecImage || storypage.bottomSlidingTextSecTexts || storypage.scienceSecContent || storypage.scienceSecButtonLink)" :image="storypage.qouteSecImage" :content="storypage.qouteSecContent" :lines="storypage.bottomSlidingTextSecTexts" :scince-text="storypage.scienceSecContent" :scince-link="storypage.scienceSecButtonLink" data-scroll />
        <storySectionFive v-if="(storypage.callToActionSecTitle || storypage.callToActionSecLink || storypage.callToActionSecImage)" :title="storypage.callToActionSecTitle" :link="storypage.callToActionSecLink" :image="storypage.callToActionSecImage" data-scroll />
        <Footer :themesettings="themesettings" :menus="menus" data-scroll />
        <GlobalCustomjs data-scroll />
    </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from '~/components/header.vue';
import storySectionOne from '~/components/story-section-one.vue';
import storySectionTwo from '~/components/story-section-two.vue';
import storySectionThree from '~/components/story-section-Three.vue';
import storySectionFour from '~/components/story-section-Four.vue';
import storySectionFive from '~/components/Call-to-Action-2.vue';
import Footer from '~/components/footer.vue';
import GlobalCustomjs from '~/components/Global-Custom-js.vue';


gsap.registerPlugin(ScrollTrigger);

export default {
    name: "StoryPage",
    components: { Header, storySectionOne, storySectionTwo, storySectionThree, storySectionFour, storySectionFive, Footer, GlobalCustomjs },
    async asyncData({ store }) {
        await store.dispatch("themesettings/getThemeSettings");
        await store.dispatch("themesettings/getMenus");
        await store.dispatch("page/getStoryPageData", 'story');
    },
    data() {
        return {
            showSlider: false,
            lmS: null
        };
    },
    computed: {
        themesettings (){
            return this.$store.state.themesettings.themeSettings
        },
        menus (){
            return this.$store.state.themesettings.menus
        },
        storypage() {
            return this.$store.state.page.storyPage.template.storyPageOption;
        },
    },
    mounted() {
        this.lmS = new this.LocomotiveScroll({
            el: document.querySelector("#js-scroll"),
            smooth: true,
        });
        const locoScroll = this.lmS;
        // const vueObj = this;
        setTimeout(() => {
            locoScroll.on('call', func => {
                if (func === "w3n-counter") {
                    jQuery(".w3n-counter").each(function () {
                        const $this = jQuery(this);
                        const countTo = $this.attr('data-count');
                        jQuery({ countNum: $this.text() }).animate({
                            countNum: countTo
                        },
                        {
                            duration: 2000,
                            easing: 'linear',
                            step() {
                                $this.text(Math.floor(this.countNum));
                            },
                            complete() {
                                $this.text(this.countNum);
                            }
                        });
                    });
                }
            });

            // // ScrollTrigger Start
            locoScroll.on("scroll", ScrollTrigger.update);
            ScrollTrigger.scrollerProxy("#js-scroll", {
                scrollTop(value) {
                    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
                },
                getBoundingClientRect() {
                    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
                },
            });

            gsap.to(".rotate-img-full", {
                scrollTrigger: {
                    trigger: ".story-page-body",
                    scroller: "#js-scroll",
                    scrub: true,
                    start: "top 75%",
                    end: "bottom bottom",

                },
                duration: 10,
                rotation: 360 * 1,
                ease: 'none'
            });


            locoScroll.update()
            ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
            ScrollTrigger.refresh();
            // // ScrollTrigger End
        }, 500);
        setTimeout(function () {
            window.dispatchEvent(new Event('resize'));
        }, 1500);

        setTimeout(() => {
           // vueObj.toggleBodyClass('addClass', 'is-ready');
        }, 500);
    },
    destroyed() {
        this.lmS.destroy();
        // this.toggleBodyClass('removeClass', 'is-ready');
    }
}
</script>


<style lang="scss">

</style>