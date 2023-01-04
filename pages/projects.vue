<template>
	<div>
		<ProjectLandingPageSec v-if="projects || pageInfo" :lm-s="lmS" data-scroll />
		<GlobalCustomjs data-scroll />
	</div>
</template>

<script>
import ProjectLandingPageSec from '~/components/Project-landing-page-sec-1.vue';
import GlobalCustomjs from '~/components/Global-Custom-js.vue';
const pageCount = 6
export default {
	name: "ProjectListingPage",
	components: { ProjectLandingPageSec, GlobalCustomjs },
	layout: 'MainTemplate',
    loading: false,
	async asyncData({ store, query }) {
		await store.dispatch("themesettings/getThemeSettings");
		await store.dispatch("themesettings/getMenus");
		await store.dispatch("page/getProjectByPagination", {
			after: query.endCursor,
			before: query.before,
			first: query.before ? undefined : pageCount,
			last: query.before ? pageCount : undefined,
		});
	},
	data() {
		return {
			projects: [],
            pageInfo: [],
			demo: [],
			showSlider: false,
			lmS: null
		};
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
		this.projects = this.$store.state.page.projects.nodes
        this.pageInfo = this.$store.state.page.projects.pageInfo
		this.demo = this.$store.state.page.projects;
	},
	destroyed() {
		this.lmS.destroy();
	},
	methods:{
        async loadmore(query){
            await this.$store.dispatch("page/getProjectByPagination", {
                after: query.endCursor,
                before: query.before,
                first: query.before ? undefined : pageCount,
                last: query.before ? pageCount : undefined,
            });
            this.projects = this.projects.concat(this.$store.state.page.projects.nodes);
            this.pageInfo = this.$store.state.page.projects.pageInfo
        }
    }
}
</script>