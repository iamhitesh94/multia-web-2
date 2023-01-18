<template>
  <div>
    <CollaborationsSectionOne v-if="collaborationsPage.bannerSecTitleLines"
      :lines="collaborationsPage.bannerSecTitleLines" data-scroll />
    <CollaborationsSectionTwo v-if="collaborationsPage.collaborations"
      :collaborations="collaborationsPage.collaborations" data-scroll />
    <CollaborationsSectionThree v-if="collaborationsPage.formSecShortcode || collaborationsPage.formSecTitle || collaborationsPage.formHelpOptions"
      :form-title="collaborationsPage.formSecTitle" :form-shotcode="collaborationsPage.formSecShortcode" :form-help-options="collaborationsPage.formHelpOptions" data-scroll />
    <GlobalCustomjs data-scroll />
  </div>
</template>

<script>
import CollaborationsSectionOne from '~/components/Collaborations-section-one.vue';
import CollaborationsSectionTwo from '~/components/Collaborations-section-Two.vue';
import CollaborationsSectionThree from '~/components/Collaborations-section-Three.vue';
import GlobalCustomjs from '~/components/Global-Custom-js.vue';
export default {
  name: "CollaborationsPage",
  components: { CollaborationsSectionOne, CollaborationsSectionTwo, CollaborationsSectionThree, GlobalCustomjs},
  layout: 'MainTemplate',
  async asyncData({ store }) {
    await store.dispatch("themesettings/getThemeSettings");
    await store.dispatch("themesettings/getMenus");
    await store.dispatch("page/getCollaborationsPageData", 'collaborations');
  },
  data() {
    return {
      showSlider: false,
      lmS: null
    };
  },
  computed: {
    collaborationsPage() {
      return this.$store.state.page.collaborationsPage.template.collaborationsOption;
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
