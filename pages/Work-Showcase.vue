<template>
    <div id="js-scroll" data-scroll-container>
        <Header :themesettings="themesettings" :menus="menus" data-scroll />
        <WorkShowcasePage v-if="projects" :projects="projects" :grid-link="themesettings.workPagesSecGridLink" :showcase-link="themesettings.workPagesSecShowcaseLink" data-scroll />
        <GlobalCustomjs data-scroll />
    </div>
</template>

<script>
import Header from '~/components/header.vue';
import WorkShowcasePage from '~/components/work-showcase-section.vue';
import GlobalCustomjs from '~/components/Global-Custom-js.vue';

export default {
    name: "WorkShowcasePageSlider",
    components: { Header, WorkShowcasePage, GlobalCustomjs },
    loading: false,
    async asyncData({ store }) {
        await store.dispatch("themesettings/getThemeSettings");
        await store.dispatch("themesettings/getMenus");
        await store.dispatch("page/getWorksData");
    },
    data() {
        return {
            showSlider: false,
            lmS: null
        };
    },
    computed:{
        themesettings (){
            return this.$store.state.themesettings.themeSettings
        },
        menus (){
            return this.$store.state.themesettings.menus
        },
        projects (){
            return this.$store.state.page.projects
        },
    },
    mounted() {
        this.lmS = new this.LocomotiveScroll({
            el: document.querySelector("#js-scroll"),
            smooth: true,
        });
    },
    destroyed() {
		this.lmS.destroy();
    }
}
</script>