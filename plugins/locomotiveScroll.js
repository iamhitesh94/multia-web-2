import Vue from "vue";
import LocomotiveScroll from "locomotive-scroll";

Object.defineProperty(Vue.prototype, "LocomotiveScroll", {
  value: LocomotiveScroll,
  loadingClass: "is-loading",
					loadedClass: "is-loaded",
					readyClass: "is-ready"
});


 

 
