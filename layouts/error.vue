<template>
  <div id="js-scroll" data-scroll-container>
    <Header :themesettings="themesettings" :menus="menus" data-scroll />
    <ErrorSec :error="error" />
    <Footer :themesettings="themesettings" :menus="menus" data-scroll />
    <GlobalCustomjs data-scroll />
  </div>
</template>
  
<script>
// default props available on error.vue
import Header from '~/components/header.vue';
import Footer from '~/components/footer.vue';
import ErrorSec from '~/components/Error-section.vue';
import GlobalCustomjs from '~/components/Global-Custom-js.vue';
export default {
  components: { Header, Footer, ErrorSec,GlobalCustomjs },
  computed:{
      themesettings (){
          return this.$store.state.themesettings.themeSettings
      },
      menus (){
          return this.$store.state.themesettings.menus
      },
  },
  props:{
    error: Object,
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