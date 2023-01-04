<template>
    <div>
        <PageTitleSection v-if="aboutpage.bannerSecTitle" :title="aboutpage.bannerSecTitle" data-scroll/>
        <AboutSectionOne v-if="aboutpage.bannerSecText || aboutpage.bannerSecImage || aboutpage.storySecText || aboutpage.storySecButtonLink" :text="aboutpage.bannerSecText" :image="aboutpage.bannerSecImage" :story-text="aboutpage.storySecText"  :story-link="aboutpage.storySecButtonLink" data-scroll/>
        <AboutSectionTwo  v-if="aboutpage.counters || aboutpage.counterSecTitle || aboutpage.counterSecImage" :image="aboutpage.counterSecImage" :title="aboutpage.counterSecTitle" :counters="aboutpage.counters" data-scroll/>
        <AboutSectionThree v-if="aboutpage.quoteSecName || aboutpage.quoteSecText" :title="aboutpage.quoteSecText" :name="aboutpage.quoteSecName" data-scroll/>
        <AboutSectionFour v-if="aboutpage.imageSecImage" :image="aboutpage.imageSecImage"  data-scroll/>
        <AboutSectionFive v-if="aboutpage.waySecLines || aboutpage.waySecTitle" :title="aboutpage.waySecTitle" :lines="aboutpage.waySecLines"  data-scroll/>
        <AboutSectionSix  v-if="aboutpage.teamSecTitle || aboutpage.teamSecText || aboutpage.teamSecImages || aboutpage.teamSecButtonLink" :title="aboutpage.teamSecTitle" :text="aboutpage.teamSecText" :images="aboutpage.teamSecImages" :link="aboutpage.teamSecButtonLink" data-scroll/>
        <AboutSectionSeven v-if="aboutpage.brandsSecText || aboutpage.brandsSecImages || aboutpage.brandsSecButtonLink" :text="aboutpage.brandsSecText" :images="aboutpage.brandsSecImages" :link="aboutpage.brandsSecButtonLink" data-scroll/>
        <AboutSectionEight v-if="aboutpage.reviews" :reviews="aboutpage.reviews" data-scroll/>
        <AboutSectionNine v-if="aboutpage.awards || aboutpage.awardsSecTitle" :title="aboutpage.awardsSecTitle" :awards="aboutpage.awards" data-scroll/>
        <AboutSectionTen v-if="aboutpage.multiversitySecText || aboutpage.multiversitySecImages || aboutpage.multiversitySecImageIcon" :text="aboutpage.multiversitySecText" :images="aboutpage.multiversitySecImages" :icon="aboutpage.multiversitySecImageIcon" data-scroll/>
        <AboutSectionEleven v-if="aboutpage.callToActionSecTitle || aboutpage.callToActionSecButtonLink || aboutpage.callToActionSecImage" :title="aboutpage.callToActionSecTitle" :images="aboutpage.callToActionSecImage" :link="aboutpage.callToActionSecButtonLink" data-scroll/>
        <GlobalCustomjs data-scroll />
    </div>
</template>

<script>
import PageTitleSection from '~/components/Page-title-section.vue';
import AboutSectionOne from '~/components/About-Section-One.vue';
import AboutSectionTwo from '~/components/About-Section-Two.vue';
import AboutSectionThree from '~/components/About-Section-Three.vue';
import AboutSectionFour from '~/components/About-Section-four.vue';
import AboutSectionFive from '~/components/About-Section-five.vue';
import AboutSectionSix from '~/components/About-Section-Six.vue';
import AboutSectionSeven from '~/components/About-Section-Seven.vue';
import AboutSectionEight from '~/components/About-Section-Eight.vue';
import AboutSectionNine from '~/components/About-Section-Nine.vue';
import AboutSectionTen from '~/components/About-Section-Ten.vue';
import AboutSectionEleven from '~/components/About-Section-Eleven.vue';
import GlobalCustomjs from '~/components/Global-Custom-js.vue';
export default {
    name: "AboutPage",
    components: { PageTitleSection, AboutSectionOne, AboutSectionTwo, AboutSectionThree, AboutSectionFour,  AboutSectionFive, AboutSectionSix,  AboutSectionSeven, AboutSectionEight, AboutSectionNine,   AboutSectionTen, AboutSectionEleven, GlobalCustomjs},
    layout: 'MainTemplate',
    async asyncData({ store }) {
        await store.dispatch("themesettings/getThemeSettings");
        await store.dispatch("themesettings/getMenus");
        await store.dispatch("page/getAboutPageData", 'about');
    },
    data() {
        return {
            showSlider: false,
            lmS: null
        };
    },
    computed:{
        aboutpage (){
            return this.$store.state.page.aboutPage.template.aboutOptions;
        },
    },
    mounted() {
        this.lmS = new this.LocomotiveScroll({
            el: document.querySelector("#js-scroll"),
            smooth: true,
        });
        this.lmS.on('call', func => {
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
        setTimeout(function () {
          // var evt = window.document.createEvent('UIEvents');
          // evt.initUIEvent('resize', true, false, window, 0);
          // window.dispatchEvent(evt);
          window.dispatchEvent(new Event('resize'));
        }, 1500);
    },
    destroyed() {
		this.lmS.destroy();
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
    },
}
</script>
