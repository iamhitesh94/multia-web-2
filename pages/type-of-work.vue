<template>
	<div>
		<TypeOfWorkpage v-if="services" :services="services" type="work" data-scroll />
		<GlobalCustomjs data-scroll />
	</div>
</template>

<script>
import TypeOfWorkpage from '~/components/Type-of-Work-1.vue';
import GlobalCustomjs from '~/components/Global-Custom-js.vue';

export default {
    name: "TypeOfWorkPage",
    components: { TypeOfWorkpage, GlobalCustomjs },
	layout: 'MainTemplate',
    loading: false,
	async asyncData({ store }) {
		await store.dispatch("themesettings/getThemeSettings");
		await store.dispatch("themesettings/getMenus");
		await store.dispatch("page/getProjectByServices", {
			first: 3,
		});
	},
    data() {
		return {
			showSlider: false,
			lmS: null
		};
    },
	computed: {
		services(){
			return this.$store.state.page.projectByServices;
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