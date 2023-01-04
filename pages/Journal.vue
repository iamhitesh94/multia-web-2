<template>
    <div>
        <StoriesSectionOne v-if="journals.content && journals.template.journalPageOption.lines" :content="journals.content" :lines="journals.template.journalPageOption.lines" data-scroll />
        <StoriesSectionTwo v-if="journals.template.journalPageOption.sections" :sections="journals.template.journalPageOption.sections" :lms="lmS" data-scroll />
        <GlobalCustomjs data-scroll />
    </div>
</template>

<script>
import StoriesSectionOne from '~/components/Stories-section-one.vue';
import StoriesSectionTwo from '~/components/Stories-section-Two.vue';
import GlobalCustomjs from '~/components/Global-Custom-js.vue';

export default {
    name: "JournalPage",
    components: {StoriesSectionOne, StoriesSectionTwo, GlobalCustomjs },
    layout: 'MainTemplate',
    loading: false,
    async asyncData({ store }) {
        await store.dispatch("themesettings/getThemeSettings");
        await store.dispatch("themesettings/getMenus");
        await store.dispatch("page/getJournalsPageData", '/journal');
    },
    data() {
        return {
            showSlider: false,
            lmS: null
        };
    },
    computed:{
        journals (){
            return this.$store.state.page.journalsPage
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