<template>
	<div>
		<TypeofWorkListing v-if="service" :service="service" type="Client" :grid-link="themesettings.workPagesSecGridLink" :showcase-link="themesettings.workPagesSecShowcaseLink"  data-scroll />
		<GlobalCustomjs data-scroll />
	</div>
</template>

<script>
import TypeofWorkListing from '~/components/Type-of-Work-listing.vue';
import GlobalCustomjs from '~/components/Global-Custom-js.vue';

export default {
    name: "TypeOfWorkListing",
    components: { TypeofWorkListing, GlobalCustomjs },
	layout: 'MainTemplate',
    loading: false,
	async asyncData({ store, params }) {
		await store.dispatch("themesettings/getThemeSettings");
		await store.dispatch("themesettings/getMenus");
		await store.dispatch("page/getProjectByClient", {
            'id' : params.slug
        });
	},
    data() {
		return {
			showSlider: false,
			lmS: null
		};
    },
	computed: {
		themesettings (){
            return this.$store.state.themesettings.themeSettings
        },
		service(){
			return this.$store.state.page.projectByClients;
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
    },destroyed() {
		this.lmS.destroy();
    }
}
</script>