<template>
	<div>
		<ContactSectionOne
			v-if="contactpage.bannerSecTitleLines || contactpage.formSecTitle || contactpage.formSecShortcode || contactpage.officeSecTitle || contactpage.offices || contactpage.officesSecButtonLink"
			:lines="contactpage.bannerSecTitleLines" :form-title="contactpage.formSecTitle"
			:form-id="contactpage.formSecShortcode" :office-title="contactpage.officeSecTitle"
			:offices="contactpage.offices" :offices-link="contactpage.officesSecButtonLink" data-scroll />
		<ContactSectionTwo
			v-if="(contactpage.imagesSection || contactpage.callToActionSecTitle || contactpage.callToActionSecText || contactpage.callToActionSecLink)"
			:images="contactpage.imagesSection" :call-sec-title="contactpage.callToActionSecTitle"
			:call-sec-text="contactpage.callToActionSecText" :call-sec-link="contactpage.callToActionSecLink"
			data-scroll />
		<GlobalCustomjs data-scroll />
	</div>
</template>

<script>
import ContactSectionOne from '~/components/Contact-Section-One.vue';
import ContactSectionTwo from '~/components/Contact-Section-Two.vue';
import GlobalCustomjs from '~/components/Global-Custom-js.vue';
export default {
	name: "ContactPage",
	components: { ContactSectionOne, ContactSectionTwo, GlobalCustomjs},
	layout: 'MainTemplate',
	async asyncData({ store }) {
		await store.dispatch("themesettings/getThemeSettings");
		await store.dispatch("themesettings/getMenus");
		await store.dispatch("page/getContactPageData", 'contact');
	},
	data() {
		return {
			showSlider: false,
			lmS: null
		};
	},
	computed: {
		contactpage() {
			return this.$store.state.page.contactPage.template.contactPageOption;
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