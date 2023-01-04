<template>
    <div>
        {{teampage}}
        <TeamSectionOne data-scroll />
        <TeamSectionTwo data-scroll />
        <TeamSectionThree data-scroll />
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
    components: {TeamSectionOne, TeamSectionTwo, TeamSectionThree, GlobalCustomjs },
    layout: 'MainTemplate',
    async asyncData({ store }) {
        await store.dispatch("themesettings/getThemeSettings");
        await store.dispatch("themesettings/getMenus");
        await store.dispatch("page/getTeamPageData", 'team');
    },
    computed:{
        teampage (){
            return this.$store.state.page.teampage.template.teamPageOptions;
        },
    },
    data() {
        return {
            showSlider: false,
            lmS: null
        };
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