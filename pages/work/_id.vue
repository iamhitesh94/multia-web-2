<template>
    <div id="js-scroll" data-scroll-container>
        <PreojectDetailsSectionOne v-if="(work.workOptions.bannerLines || work.title || work.workOptions.bannerImage)" :lines="work.workOptions.bannerLines" :title="work.title" :image="work.workOptions.bannerImage" :feature-image="work.featuredImage.node"  data-scroll />
        <PreojectDetailsSectionTwo v-if="(work.content || work.workOptions.websiteUrl || work.clients || work.workServices)" :content="work.content" :industries="work.clients" :link="work.workOptions.websiteUrl" :services="work.workServices" data-scroll />     
        <PreojectDetailsSectionThree v-if="work.workOptions.projectImages" :project-images="work.workOptions.projectImages" data-scroll />     
        <PreojectDetailsSectionFour v-if="(work.workOptions.solutionSecContent || work.workOptions.solutionSecImages || work.workOptions.imagesAfterSolutionFullWidthImages || work.workOptions.imagesAfterSolutionCenterImages)" data-scroll :solution-content="work.workOptions.solutionSecContent" :solution-images="work.workOptions.solutionSecImages" :full-images="work.workOptions.imagesAfterSolutionFullWidthImages" :center-images="work.workOptions.imagesAfterSolutionCenterImages" />
        <PreojectDetailsSectionFive v-if="work.workOptions.qouteSecText" :text="work.workOptions.qouteSecText" data-scroll />
        <PreojectDetailsSectionImages v-if="work.workOptions.blocks" :image-blk="work.workOptions.blocks" data-scroll />
        <PreojectDetailsSectionNext :next-post="project" data-scroll />
        <GlobalCustomjs data-scroll />
    </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import axios from 'axios'
import PreojectDetailsSectionOne from '~/components/Preoject-Details-Section-1.vue';
import PreojectDetailsSectionTwo from '~/components/Preoject-Details-Section-2.vue';
import PreojectDetailsSectionThree from '~/components/Preoject-Details-Section-3.vue';
import PreojectDetailsSectionFour from '~/components/Preoject-Details-Section-4.vue';
import PreojectDetailsSectionFive from '~/components/Preoject-Details-Section-5.vue';
import PreojectDetailsSectionImages from '~/components/Preoject-Details-Section-Images.vue';
import PreojectDetailsSectionNext from '~/components/Preoject-Details-Section-Next.vue';
import GlobalCustomjs from '~/components/Global-Custom-js.vue';


gsap.registerPlugin(ScrollTrigger);

export default {
    name: "ProjectInnerPage",
    components: {PreojectDetailsSectionOne, PreojectDetailsSectionTwo, PreojectDetailsSectionThree, PreojectDetailsSectionFour, PreojectDetailsSectionFive, PreojectDetailsSectionImages, PreojectDetailsSectionNext, GlobalCustomjs },
    layout: 'MainTemplate',
    loading: false,
    async asyncData({store,params }) {
        await store.dispatch("themesettings/getThemeSettings");
        await store.dispatch("themesettings/getMenus");
        await store.dispatch("page/getWorkData", params.id);

        const api = process.env.baseUrl+'wp-json/multia-get-data/get-next-project';
        const project = await axios.post(api,{
            'id': store.state.page.projectDetail.databaseId
        }).then((reponse) => {
            return reponse.data;
        })
        return {project};

    },
    data() {
        return {
            showSlider: false,
            lmS: null
        };
    },
    computed:{
        work(){
            return this.$store.state.page.projectDetail
        }
    },  
    mounted() {
        
        this.lmS = new this.LocomotiveScroll({
            el: document.querySelector("#js-scroll"),
            smooth: true,
        });
        const locoScroll = this.lmS;
        setTimeout(() => {
        locoScroll.on('call', func => {
            if (func === "w3n-counter") {
                jQuery(".w3n-counter").each(function() {
                    const $this = jQuery(this);
                    const countTo = $this.attr('data-count');
                    jQuery({ countNum: $this.text()}).animate({
                        countNum: countTo
                    },
                    {
                        duration: 2000,
                        easing:'linear',
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
                return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
            },
        });
        gsap.from(".c-direction-block_item.one", {
            scrollTrigger: {
                trigger: ".img-rotete-outer",
                scroller: "#js-scroll",
                scrub: true,
                start: "top 75%",
                end: "bottom bottom",
            },
            y:"100%",
            scale:0.2,
            opacity:0,
            duration:0.01,
        });
        gsap.from(".c-direction-block_item.two", {
            scrollTrigger: {
                trigger: ".img-rotete-outer",
                scroller: "#js-scroll",
                scrub: true,
                start: "top 75%",
                end: "bottom bottom",
            },
            x:"-150%",
            y:"50%",
            scale:0.2,
            opacity:0,
            duration:0.01,
        });
        gsap.from(".c-direction-block_item.three", {
            scrollTrigger: {
                trigger: ".img-rotete-outer",
                scroller: "#js-scroll",
                scrub: true,
                start: "top 75%",
                end: "bottom bottom",
                },
            x:"-100%",
            y:"-100%",
            scale:0.2,
            opacity:0,
            duration:0.01,
        });
        gsap.from(".c-direction-block_item.four", {
            scrollTrigger: {
                trigger: ".img-rotete-outer",
                scroller: "#js-scroll",
                scrub: true,
                start: "top 75%",
                end: "bottom bottom",
            },
            x:"150%",
            y:"-70%",
            scale:0.2,
            opacity:0,
            duration:0.01,
        });
        gsap.from(".c-direction-block_item.five", {
            scrollTrigger: {
                trigger: ".img-rotete-outer",
                scroller: "#js-scroll",
                scrub: true,
                start: "top 75%",
                end: "bottom bottom",
            },
            x:"180%",
            y:"100%",
            scale:0.2,
            opacity:0,
            duration:0.01,
        });
        locoScroll.update()
        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
        ScrollTrigger.refresh();
        // // ScrollTrigger End
        setTimeout(() => {
            this.toggleBodyClass('addClass', 'is-ready');
        }, 500);
    }, 500);
    setTimeout(function () {
            window.dispatchEvent(new Event('resize'));
        }, 1500);
    },
    destroyed() {
		this.lmS.destroy();
        this.toggleBodyClass('removeClass', 'is-ready');
    },
    methods: {
        toggleBodyClass(addRemoveClass, className) {
            const el = document.documentElement;
            if (addRemoveClass === 'addClass') {
            	el.classList.add(className);
            } else {
            	el.classList.remove(className);
            }
        },
    }
}
</script>