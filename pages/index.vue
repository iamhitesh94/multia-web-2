<template>
    <div>
        <BannerHome v-if="homePage.homePage.headerLines" :header-lines="homePage.homePage.headerLines" data-scroll/> 
        <Homeworksection v-if="homePage.homePage.workSecContent" :content="homePage.homePage.workSecContent" data-scroll />  
        <HomeProjectsection v-if="homePage.homePage.workSecButtonLink || homePage.homePage.workSecContent" :projects="homePage.homePage.works" :button-link="homePage.homePage.workSecButtonLink" /> 
        <HomeBrandSlider v-if="homePage.homePage.brandSliderSecBrandTitles" :slider="homePage.homePage.brandSliderSecBrandTitles" data-scroll/> 
        <HomeAboutSection v-if="homePage.homePage.aboutSecText || homePage.homePage.aboutSecBtnLink" :text="homePage.homePage.aboutSecText" :btn-link="homePage.homePage.aboutSecBtnLink" data-scroll data-scroll-offset="30%" /> 
        <HomeTransforming v-if="homePage.homePage.lines || homePage.homePage.lineLink" :lines="homePage.homePage.lines"  :line-link="homePage.homePage.lineLink" data-scroll />
        <Homepartner v-if="homePage.homePage.clientsSecLogos || homePage.homePage.clientsSecButtonLink || homePage.homePage.clientsSecTitle || homePage.homePage.clientsSecSubTitle" :title="homePage.homePage.clientsSecTitle"  :sub-title="homePage.homePage.clientsSecSubTitle"  :link="homePage.homePage.clientsSecButtonLink"  :logos="homePage.homePage.clientsSecLogos" data-scroll />
        <HomeLatestNews v-if="homePage.homePage.journalSecButtonLink || homePage.homePage.journals" :journals="homePage.homePage.journals" :journal-link="homePage.homePage.journalSecButtonLink" data-scroll /> 
        <GlobalCustomjs data-scroll />
    </div>
</template>
<script>

import BannerHome from '~/components/Banner-Home.vue';
import Homeworksection from '~/components/Home-work-section.vue';
import HomeProjectsection from '~/components/Home-project-section.vue';
import HomeBrandSlider from '~/components/Home-Brand-slider.vue';
import HomeAboutSection from '~/components/Home-About-section.vue';
import HomeTransforming from '~/components/Home-Transforming.vue';
import Homepartner from '~/components/Home-partner-section.vue';
import HomeLatestNews from '~/components/Home-latest-news.vue';
import GlobalCustomjs from '~/components/Global-Custom-js.vue';

export default {
    name: "NewIndex",
    components: { BannerHome, Homeworksection, HomeProjectsection, HomeBrandSlider, HomeAboutSection, HomeTransforming, Homepartner, HomeLatestNews, GlobalCustomjs},
    layout: 'MainTemplate',
    loading: false,
    async asyncData({ store }) {
        await store.dispatch("themesettings/getThemeSettings");
        await store.dispatch("themesettings/getMenus");
        await store.dispatch("page/getHomePageData", '/');
    },
    data() {
        return {
            lmS: null
        };
    },
    computed:{
        homePage (){
            return this.$store.state.page.homePage
        },
    },
    mounted() {
        this.lmS = new this.LocomotiveScroll({
            el: document.querySelector("#js-scroll"),
            smooth: true,
        });
        this.$nextTick(() => {
            this.$nuxt.$loading.start()
            setTimeout(() => this.$nuxt.$loading.finish(), 500)
        });
        setTimeout(function () {
          window.dispatchEvent(new Event('resize'));
        }, 1500);
    },
    destroyed() {
		this.lmS.destroy();        
    },
    
}
</script>