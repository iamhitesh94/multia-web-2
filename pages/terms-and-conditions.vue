<template>
	<div>
		<PrivacyPolicyOne v-if="privacyPage.template.privacyOption.lines" :lines="privacyPage.template.privacyOption.lines" data-scroll />
		<PrivacyPolicyTwo v-if="privacyPage.content" :content="privacyPage.content" data-scroll />
		<GlobalCustomjs data-scroll />
	</div>
</template>

<script>
import PrivacyPolicyOne from '~/components/privacy-policy-Section-One.vue';
import PrivacyPolicyTwo from '~/components/privacy-policy-Section-Two.vue';
import GlobalCustomjs from '~/components/Global-Custom-js.vue';

export default {
    name: "PrivacyPolicyPage",
    components: { PrivacyPolicyOne, PrivacyPolicyTwo, GlobalCustomjs },
    layout: 'MainTemplate',
    async asyncData({ store }) {
        await store.dispatch("themesettings/getThemeSettings");
        await store.dispatch("themesettings/getMenus");
        await store.dispatch("page/getPolicyPageData", 'terms-and-conditions');
    },
	data() {
		return {
			showSlider: false,
			lmS: null
		};
    },
	computed:{
        privacyPage (){
            return this.$store.state.page.policyPage;
        },
    },
    mounted() {
		this.lmS = new this.LocomotiveScroll({
			el: document.querySelector("#js-scroll"),
			smooth: true,
		});
		setTimeout(function () {
          window.dispatchEvent(new Event('resize'));
        }, 1500);
    },
	destroyed() {
		this.lmS.destroy();
    }
}
</script>