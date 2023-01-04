<template>
    <div id="js-scroll" data-scroll-container>
        <Header :themesettings="themesettings" :menus="menus" data-scroll />
        <nuxt />
        <Footer :themesettings="themesettings" :menus="menus" data-scroll />
    </div>
</template>
<script>
import Header from '~/components/header.vue';
import Footer from '~/components/footer.vue';
export default {
    name: "MainTemplate", // eslint-disable vue/multi-word-component-names
    components: { Header, Footer},
    loading: false,
    computed:{
        themesettings (){
            return this.$store.state.themesettings.themeSettings
        },
        menus (){
            return this.$store.state.themesettings.menus
        },
    },
    methods: {
        toggleBodyClass(addRemoveClass, className) {
            const el = document.documentElement;
            if (addRemoveClass === 'addClass') {
            	el.classList.add(className);
            } else {
            	el.classList.remove(className);
            }
        },
    },
}
</script>