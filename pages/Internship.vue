<template>
	<div>
		<InternshipSectionOne v-if="internshippage.bannerSecTitleLines" :lines="internshippage.bannerSecTitleLines" data-scroll />  
		<InternshipSectionTwo v-if="internshippage.imageBlocksSecBlocks" :images="internshippage.imageBlocksSecBlocks" data-scroll /> 
		<InternshipSectionThree v-if="(internshippage.believeSecContent || internshippage.believeSecButton)" :content="internshippage.believeSecContent" :link="internshippage.believeSecButton" data-scroll />   
		<InternshipSectionFour v-if="internshippage.slidingTextSecTexts" :slider="internshippage.slidingTextSecTexts" data-scroll /> 
		<InternshipSectionFive v-if="internshippage.reviews" :reviews="internshippage.reviews" data-scroll />
		<InternshipSectionSix v-if="(internshippage.formSecTitle || internshippage.formSecText || internshippage.formSecShortcode || internshippage.formSecPositions)" :form-title="internshippage.formSecTitle" :form-text="internshippage.formSecText" :form-id="internshippage.formSecShortcode" :form-positions="internshippage.formSecPositions" data-scroll />
		<InternshipSectionSeven v-if="(internshippage.callToActionSecTitle || internshippage.callToActionSecImage || internshippage.callToActionSecButtonLink)" :title="internshippage.callToActionSecTitle" :image="internshippage.callToActionSecImage" :link="internshippage.callToActionSecButtonLink" data-scroll />
		<GlobalCustomjs data-scroll />
	</div>
</template>

<script>
import InternshipSectionOne from '~/components/Internship-Section-One.vue';
import InternshipSectionTwo from '~/components/Internship-Section-Two.vue';
import InternshipSectionThree from '~/components/Internship-Section-Three.vue';
import InternshipSectionFour from '~/components/Internship-Section-Four.vue';
import InternshipSectionFive from '~/components/Internship-Section-Five.vue';
import InternshipSectionSix from '~/components/Internship-Section-Six.vue';
import InternshipSectionSeven from '~/components/Call-to-Action.vue';
import GlobalCustomjs from '~/components/Global-Custom-js.vue';
export default {
    name: "InternshipPage",
    components: {InternshipSectionOne, InternshipSectionTwo, InternshipSectionThree, InternshipSectionFour, InternshipSectionFive, InternshipSectionSix, InternshipSectionSeven, GlobalCustomjs},
	layout: 'MainTemplate',
	async asyncData({ store }) {
		await store.dispatch("themesettings/getThemeSettings");
		await store.dispatch("themesettings/getMenus");
		await store.dispatch("page/getInternshipPageData", 'internship');
	},
    data() {
       	return {
			showSlider: false,
			lmS: null
       	};
    },
	computed: {
		internshippage() {
			return this.$store.state.page.internshipPage.template.internshipPageOption;
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