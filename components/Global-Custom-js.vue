<template><div></div></template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
    name: 'GlobalCustomJS',
    data() {
        return {
            // lmS: null
        };
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
    destroyed() {
		// locoScroll.destroy();
        this.toggleBodyClass('removeClass', 'is-ready');
        
    },
    mounted() {
		// const locoScroll = new this.LocomotiveScroll({
        //     el: document.querySelector("#js-scroll"),
        //     smooth: true,
        // });

        // locoScroll.on('call', func => {
        //     if (func === "w3n-counter") {
        //         jQuery(".w3n-counter").each(function() {
        //             var $this = jQuery(this),
        //             countTo = $this.attr('data-count');
        //             jQuery({ countNum: $this.text()}).animate({
        //                 countNum: countTo
        //             },
        //             {
        //                 duration: 2000,
        //                 easing:'linear',
        //                 step: function() {
        //                     $this.text(Math.floor(this.countNum));
        //                 },
        //                 complete: function() {
        //                     $this.text(this.countNum);
        //                 }
        //             });
        //         });
        //     }
        // });

        // // ScrollTrigger Start
        // locoScroll.on("scroll", ScrollTrigger.update);
        // ScrollTrigger.scrollerProxy("#js-scroll", {
        //     scrollTop(value) {
        //         return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        //     },
        //     getBoundingClientRect() {
        //         return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
        //     },
        // });

        // gsap.from(".c-direction-block_item.one", {
        //     scrollTrigger: {
        //         trigger: ".img-rotete-outer",
        //         scroller: "#js-scroll",
        //         scrub: true,
        //         start: "top 75%",
        //         end: "bottom bottom",
        //     },
        //     y:"100%",
        //     scale:0.2,
        //     opacity:0,
        //     duration:0.5,
        // });

        // gsap.from(".c-direction-block_item.two", {
        //     scrollTrigger: {
        //         trigger: ".img-rotete-outer",
        //         scroller: "#js-scroll",
        //         scrub: true,
        //         start: "top 75%",
        //         end: "bottom bottom",
        //     },
        //     x:"-150%",
        //     y:"50%",
        //     scale:0.2,
        //     opacity:0,
        //     duration:0.5,
        // });

        // gsap.from(".c-direction-block_item.three", {
        //     scrollTrigger: {
        //         trigger: ".img-rotete-outer",
        //         scroller: "#js-scroll",
        //         scrub: true,
        //         start: "top 75%",
        //         end: "bottom bottom",
        //     },
        //     x:"-100%",
        //     y:"-100%",
        //     scale:0.2,
        //     opacity:0,
        //     duration:0.5,
        // });

        // gsap.from(".c-direction-block_item.four", {
        //     scrollTrigger: {
        //         trigger: ".img-rotete-outer",
        //         scroller: "#js-scroll",
        //         scrub: true,
        //         start: "top 75%",
        //         end: "bottom bottom",
        //     },
        //     x:"150%",
        //     y:"-70%",
        //     scale:0.2,
        //     opacity:0,
        //     duration:0.5,
        // });

        // gsap.from(".c-direction-block_item.five", {
        //     scrollTrigger: {
        //         trigger: ".img-rotete-outer",
        //         scroller: "#js-scroll",
        //         scrub: true,
        //         start: "top 75%",
        //         end: "bottom bottom",
        //     },
        //     x:"180%",
        //     y:"100%",
        //     scale:0.2,
        //     opacity:0,
        //     duration:0.5,
        // });
        // locoScroll.update()
        // ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
        // ScrollTrigger.refresh();
        // ScrollTrigger End

        setTimeout(() => {
            this.toggleBodyClass('addClass', 'is-ready');
        }, 500);

        setTimeout(() => {
                const script = document.createElement('script');
                script.src = 'http://139.162.44.23:1234/assets/js/custom-script.js';
                // script.src = 'http://localhost:3000/assets/js/custom-script.js';
                document.getElementsByTagName('head')[0].appendChild(script);
                // jQuery(document).trigger("ready");
        }, 800);
        jQuery("body").removeClass("menuOpen");
        jQuery("body .menu-outer").hide();
        jQuery("body header .humburg-menu a").removeClass("active");
    }
}
</script>