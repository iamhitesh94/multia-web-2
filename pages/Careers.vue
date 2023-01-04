<template>
	<div>
		<CareerSectionOne v-if="careerPage.bannerSecTitle || careerPage.bannerSecSubTitle || careerPage.futureSecImages || careerPage.futureSecContent" :title="careerPage.bannerSecTitle" :sub-title="careerPage.bannerSecSubTitle" :content="careerPage.futureSecContent" :images="careerPage.futureSecImages" data-scroll />  
		<CareerSectionTwo v-if="careerPage.positionsSecTitle || careerPage.positionsSecJobs" :title="careerPage.positionsSecTitle" :jobs="careerPage.positionsSecJobs" data-scroll /> 
		<CareerSectionThree v-if="careerPage.internshipSecImageLeft || careerPage.internshipSecImageRight || careerPage.internshipSecText" :left-image="careerPage.internshipSecImageLeft" :right-image="careerPage.internshipSecImageRight" :text="careerPage.internshipSecText" :link="careerPage.internshipSecButtonLink"  data-scroll /> 
		<CareerSectionFour v-if="careerPage.reviews" :reviews="careerPage.reviews" data-scroll />
		<CareerSectionFive v-if="careerPage.slidingTextSecTexts" :lines="careerPage.slidingTextSecTexts" data-scroll />
		<CareerSectionSix v-if="careerPage.testamentSecImage || careerPage.testamentSecContent || careerPage.testamentSecButtonLink" :image="careerPage.testamentSecImage" :link="careerPage.testamentSecButtonLink" :text="careerPage.testamentSecContent" data-scroll />
		<CareerSectionSeven v-if="careerPage.growSecTitle || careerPage.growSecLeftBlocks || careerPage.growSecRightBlocks" :title="careerPage.growSecTitle" :left-content="careerPage.growSecLeftBlocks" :right-content="careerPage.growSecRightBlocks" data-scroll />
		<CareerSectionEight v-if="careerPage.imageSliderSecImages" :images="careerPage.imageSliderSecImages" data-scroll />
		<CareerSectionNine v-if="careerPage.qouteSecText || careerPage.qouteSecName" :text="careerPage.qouteSecText"  :name="careerPage.qouteSecName" data-scroll />
		<CareerSectionTen v-if="careerPage.faqSecTitle  || careerPage.faqs" :title="careerPage.faqSecTitle" :faqs="careerPage.faqs" data-scroll />
		<CareerSectionEleven v-if="careerPage.callToActionSecTitle  || careerPage.callToActionSecText || careerPage.callToActionSecButtonLink" :title="careerPage.callToActionSecTitle" :text="careerPage.callToActionSecText" :link="careerPage.callToActionSecButtonLink" data-scroll />
		<GlobalCustomjs data-scroll />
	</div>
</template>

<script>
import CareerSectionOne from '~/components/Career-Section-One.vue';
import CareerSectionTwo from '~/components/Career-Section-Two.vue';
import CareerSectionThree from '~/components/Career-Section-Three.vue';
import CareerSectionFour from '~/components/Career-Section-four.vue';
import CareerSectionFive from '~/components/Career-Section-five.vue';
import CareerSectionSix from '~/components/Career-Section-Six.vue';
import CareerSectionSeven from '~/components/Career-Section-Seven.vue';
import CareerSectionEight from '~/components/Career-Section-Eight.vue';
import CareerSectionNine from '~/components/Career-Section-Nine.vue';
import CareerSectionTen from '~/components/Career-Section-Ten.vue';
import CareerSectionEleven from '~/components/Career-Section-Eleven.vue';
import GlobalCustomjs from '~/components/Global-Custom-js.vue';
export default {
    name: "CareerPage",
    components: {CareerSectionOne, CareerSectionTwo, CareerSectionThree, CareerSectionFour, CareerSectionFive, CareerSectionSix, CareerSectionSeven, CareerSectionEight, CareerSectionNine, CareerSectionTen, CareerSectionEleven, GlobalCustomjs},
	layout: 'MainTemplate',
    async asyncData({ store }) {
        await store.dispatch("themesettings/getThemeSettings");
        await store.dispatch("themesettings/getMenus");
		await store.dispatch("page/getCareerPageData", 'careers');
    },
	data() {
		return {
			showSlider: false,
			lmS: null
		};
    },
	computed:{
        careerPage (){
            return this.$store.state.page.careerPage.template.careerPageOption;
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