<template>
	<div>
		<ClientsSectionOne v-if="contactPage.bannerSecTitleLines || contactPage.bannerSecText" :lines="contactPage.bannerSecTitleLines" :text="contactPage.bannerSecText" data-scroll />
		<ClientsSectionTwo v-if="contactPage.clientsLogosSecLogos" :client-logos="contactPage.clientsLogosSecLogos" data-scroll />
		<ClientsSectionThree v-if="contactPage.serviceSecTitle || contactPage.serviceSecText || contactPage.serviceSecServices" :title="contactPage.serviceSecTitle" :text="contactPage.serviceSecText" :services="contactPage.serviceSecServices" data-scroll />
		<ClientsSectionFour v-if="contactPage.reviewsSecBackgroundImage || contactPage.reviewsSecReviews" :bg-img="contactPage.reviewsSecBackgroundImage" :reviews="contactPage.reviewsSecReviews" data-scroll/>
		<GlobalCustomjs data-scroll />
	</div>
</template>

<script>
import ClientsSectionOne from '~/components/Clients-section-one.vue';
import ClientsSectionTwo from '~/components/Clients-section-Two.vue';
import ClientsSectionThree from '~/components/Clients-section-Three.vue';
import ClientsSectionFour from '~/components/Clients-section-Four.vue';
import GlobalCustomjs from '~/components/Global-Custom-js.vue';
export default {
    name: "ClientsPage",
    components: { ClientsSectionOne, ClientsSectionTwo, ClientsSectionThree, ClientsSectionFour, GlobalCustomjs},
	layout: 'MainTemplate',
	async asyncData({ store }) {
        await store.dispatch("themesettings/getThemeSettings");
        await store.dispatch("themesettings/getMenus");
        await store.dispatch("page/getClientsPageData", 'clients');
    },
    data() {
		return {
			showSlider: false,
			lmS: null
		};
    },
	computed:{
        contactPage (){
            return this.$store.state.page.clientsPage.template.clientsPageOption;
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