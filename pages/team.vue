<template>
    <div id="js-scroll" data-scroll-container>
        <TeamSectionOne v-if="teampage.titleLines" :lines="teampage.titleLines" data-scroll />
        <TeamSectionTwo v-if="teampage.teamMembers" :members="teampage.teamMembers" data-scroll />
        <TeamSectionThree v-if="(teampage.callToActionSecTitle || teampage.callToActionSecImage || teampage.callToActionSecButtonLink)" :title="teampage.callToActionSecTitle" :image="teampage.callToActionSecImage" :link="teampage.callToActionSecButtonLink" data-scroll />
        <GlobalCustomjs data-scroll />
    </div>
</template>

<script>
import TeamSectionOne from '~/components/Team-Section-One.vue';
import TeamSectionTwo from '~/components/Team-Section-Two.vue';
import TeamSectionThree from '~/components/Call-to-Action.vue';
import GlobalCustomjs from '~/components/Global-Custom-js.vue';

export default {
    name: "TeamPage",
    layout: 'MainTemplate',
    components: { TeamSectionOne, TeamSectionTwo, TeamSectionThree, GlobalCustomjs },
    async asyncData({ store }) {
        await store.dispatch("themesettings/getThemeSettings");
        await store.dispatch("themesettings/getMenus");
        await store.dispatch("page/getTeamPageData", 'team');
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
        teampage() {
            return this.$store.state.page.teamPage.template.teamPageOptions;
        },
    },
    mounted() {
        this.lmS = new this.LocomotiveScroll({
            el: document.querySelector("#js-scroll"),
            smooth: true,
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