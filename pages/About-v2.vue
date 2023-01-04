<template>
    <div class="about-version-2">
        <PageTitleSection  data-scroll/>
        <AboutSectionOne  data-scroll/>
        <AboutSectionTwo  data-scroll/>
        <AboutSectionThree  data-scroll/>
        <AboutSectionFour  data-scroll/>
        <AboutSectionFive  data-scroll/>
        <AboutSectionSix  data-scroll/>
        <AboutSectionSeven  data-scroll/>
        <AboutSectionEight  data-scroll/>
        <AboutSectionNine  data-scroll/>
        <AboutSectionTen  data-scroll/>
        <AboutSectionEleven  data-scroll/>
        <GlobalCustomjs data-scroll />
    </div>
</template>

<script>
import PageTitleSection from '~/components/Page-title-section-v2.vue';
import AboutSectionOne from '~/components/About-Section-One-v2.vue';
import AboutSectionTwo from '~/components/About-Section-Two-v2.vue';
import AboutSectionThree from '~/components/About-Section-Three-v2.vue';
import AboutSectionFour from '~/components/About-Section-four.vue';
import AboutSectionFive from '~/components/About-Section-five-v2.vue';
import AboutSectionSix from '~/components/About-Section-Six-v2.vue';
import AboutSectionSeven from '~/components/About-Section-Seven-v2.vue';
import AboutSectionEight from '~/components/About-Section-Eight-v2.vue';
import AboutSectionNine from '~/components/About-Section-Nine-v2.vue';
import AboutSectionTen from '~/components/About-Section-Ten-v2.vue';
import AboutSectionEleven from '~/components/About-Section-Eleven-v2.vue';
import GlobalCustomjs from '~/components/Global-Custom-js.vue';

export default {
    loading: false,
    name: "Aboutv2Page",
    layout: 'MainTemplate',
    components: { PageTitleSection, AboutSectionOne, AboutSectionTwo, AboutSectionThree, AboutSectionFour,  AboutSectionFive, AboutSectionSix,  AboutSectionSeven, AboutSectionEight, AboutSectionNine,   AboutSectionTen, AboutSectionEleven, GlobalCustomjs },
    async asyncData({ store }) {
        await store.dispatch("themesettings/getThemeSettings");
        await store.dispatch("themesettings/getMenus");
    },
    data() {
        return {
            showSlider: false,
            lmS: null
        };
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
    }
}
</script>

<style>
.about-version-2,
body #__layout > div > div{ background: #010101; }
</style>