<template>
	<div>
		<JournalSectionOne v-if="post" :post="post" data-scroll />
		<JournalSectionTwo v-if="post.categories" :category="post.categories" :current-post-id="post.postId" data-scroll  />
		<GlobalCustomjs data-scroll />
	</div>
</template>

<script>
import JournalSectionOne from '~/components/Journal-section-one.vue';
import JournalSectionTwo from '~/components/Journal-section-Two.vue';
import GlobalCustomjs from '~/components/Global-Custom-js.vue';

export default {
    name: "JournalPage",
    components: {JournalSectionOne, JournalSectionTwo, GlobalCustomjs },
    layout: 'MainTemplate',
    loading: false,
    async asyncData({ store, params, error }) {
        await store.dispatch("themesettings/getThemeSettings");
        await store.dispatch("themesettings/getMenus");
        await store.dispatch("page/getJournalDetailPageData", params.slug);
        // error({ statusCode: 404, statusMessage: 'Page Not Found' });
        const postData = store.state.page.journalDetailPage;
        if(postData === null){
            error({ statusCode: 404, statusMessage: 'Page Not Found' });
        }
    },
    head: {
      title: 'ROAST',
    },
    data() {
		return {
			showSlider: false,
			lmS: null
		};
    },
    computed:{
        post (){
            return this.$store.state.page.journalDetailPage
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
