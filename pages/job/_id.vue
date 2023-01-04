<template>
    <div>
		<JobSectionOne v-if="(job.bannerSecTitleLines || job.bannerSecText)" :lines="job.bannerSecTitleLines" :text="job.bannerSecText" data-scroll />
		<JobSectionTwo v-if="(job.lookingForSecTitle || job.lookingForSecRequirements)" :title="job.lookingForSecTitle" :points="job.lookingForSecRequirements" data-scroll /> 
		<JobSectionThree v-if="(job.skillSecTitle || job.skillSecText || job.skillSecSkills || job.offerSecTitle || job.offerSecText || job.processSecTitle || job.processSecSteps || job.formSecTitle || job.formSecText)" :skill-title="job.skillSecTitle" :skill-text="job.skillSecText" :skills="job.skillSecSkills" :offer-text="job.offerSecText" :offer-title="job.offerSecTitle" :proccess-title="job.processSecTitle" :proccess="job.processSecSteps" :apply-text="job.formSecText" :apply-title="job.formSecTitle" data-scroll />
		<JobSectionFour v-if="themeSettings.jobDetailFormText || themeSettings.jobDetailFormId" :form-id="themeSettings.jobDetailFormId" :form-text="themeSettings.jobDetailFormText" :form-positions="themeSettings.jobPositions" data-scroll />
		<GlobalCustomjs data-scroll />
    </div>
</template>
<script>
import JobSectionOne from '~/components/Job-Section-One.vue';
import JobSectionTwo from '~/components/Job-Section-Two.vue';  
import JobSectionThree from '~/components/Job-Section-Three.vue';
import JobSectionFour from '~/components/Job-Section-Four.vue';
import GlobalCustomjs from '~/components/Global-Custom-js.vue';
export default {
    name: "JobdetailsPage",
    components: {JobSectionOne, JobSectionTwo, JobSectionThree, JobSectionFour, GlobalCustomjs },
    layout: 'MainTemplate',
    async asyncData({store,params }) {
        await store.dispatch("themesettings/getThemeSettings");
        await store.dispatch("themesettings/getMenus");
        await store.dispatch("page/getJobPageData", params.id);
    },
    data() {
		return {
			showSlider: false,
			lmS: null
		};
    },
    computed:{
        job (){
            return this.$store.state.page.jobDetail.jobDetail;
        },
        themeSettings(){
            return this.$store.state.themesettings.themeSettings
        }
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