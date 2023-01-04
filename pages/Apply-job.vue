<template>
    <div>
        <ApplyjobSectionOne v-if="applyJob.conntent || applyJob.template.privacyOption.lines" :content="applyJob.content" :lines="applyJob.template.privacyOption.lines" data-scroll/> 
        <ApplyjobSectionTwo v-if="applyJob.template.privacyOption.formSecHasForm && (applyJob.template.privacyOption.formSecFormId)" :form-id="applyJob.template.privacyOption.formSecFormId" :form-positions="themesettings.jobPositions" data-scroll/> 
        <GlobalCustomjs data-scroll />
    </div>
</template>

<script>
import ApplyjobSectionOne from '~/components/Apply-job-section-One.vue';
import ApplyjobSectionTwo from '~/components/Apply-job-section-Two.vue';
import GlobalCustomjs from '~/components/Global-Custom-js.vue';

export default {
    name: "AboutPage",
    components: {ApplyjobSectionOne, ApplyjobSectionTwo, GlobalCustomjs },
    layout: 'MainTemplate',
    loading: false,
    async asyncData({ store,params }) {
        await store.dispatch("themesettings/getThemeSettings");
        await store.dispatch("themesettings/getMenus");
        await store.dispatch("page/getPolicyPageData", 'apply-job');
    },
    data() {
        return {
            showSlider: false,
            lmS: null
        };
    },
	computed:{
        applyJob (){
            return this.$store.state.page.policyPage;
        },
        themesettings (){
            return this.$store.state.themesettings.themeSettings
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