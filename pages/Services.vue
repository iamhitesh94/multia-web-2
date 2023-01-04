<template>
	<div>
		<ServicesSectionOne v-if="(servicepage.bannerSecTitleLines || servicepage.bannerSecText)" :lines="servicepage.bannerSecTitleLines" :text="servicepage.bannerSecText" data-scroll />
		<ServicesSectionTwo v-if="(servicepage.circleSecLeftTitle || servicepage.circleSecLeftContent || servicepage.circleSecRightTitle || servicepage.circleSecRightContent)" :left-title="servicepage.circleSecLeftTitle" :left-content="servicepage.circleSecLeftContent" :right-title="servicepage.circleSecRightTitle" :right-content="servicepage.circleSecRightContent" data-scroll />
		<ServicesSectionThree v-if="servicepage.blocks" :blocks="servicepage.blocks" data-scroll />
		<ServicesSectionSix v-if="(servicepage.interactionSecText || servicepage.interactionSecName || servicepage.interactionSecImage)" :text="servicepage.interactionSecText" :name="servicepage.interactionSecName" :image="servicepage.interactionSecImage" data-scroll />
		<ServicesSectionFour v-if="servicepage.workSecBlocks" :blocks="servicepage.workSecBlocks" :title="servicepage.workSecTitle" data-scroll />
		<ServicesSectionFive v-if="(servicepage.callToActionSecTitle || servicepage.callToActionSecImage || servicepage.callToActionSecButtonLink)" :title="servicepage.callToActionSecTitle" :image="servicepage.callToActionSecImage" :link="servicepage.callToActionSecButtonLink"  data-scroll />
		<GlobalCustomjs data-scroll />
	</div>
</template>

<script>
import ServicesSectionOne from '~/components/Services-section-one.vue';
import ServicesSectionTwo from '~/components/Services-section-Two.vue'; 
import ServicesSectionThree from '~/components/Services-section-Three.vue';
import ServicesSectionSix from '~/components/Services-section-Six.vue'; 
import ServicesSectionFour from '~/components/Services-section-Four.vue';
import ServicesSectionFive from '~/components/Services-section-Five.vue';
import GlobalCustomjs from '~/components/Global-Custom-js.vue';
export default {
    name: "ServicesPage",
    components: {ServicesSectionOne, ServicesSectionTwo, ServicesSectionThree, ServicesSectionSix, ServicesSectionFour, ServicesSectionFive, GlobalCustomjs},
    layout: 'MainTemplate',
	async asyncData({ store }) {
		await store.dispatch("themesettings/getThemeSettings");
		await store.dispatch("themesettings/getMenus");
		await store.dispatch("page/getServicePageData", 'services');
	},
	data() {
		return {
			showSlider: false,
			lmS: null
		};
    },
	computed: {
		servicepage() {
			return this.$store.state.page.servicePage.template.servicePageOption;
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