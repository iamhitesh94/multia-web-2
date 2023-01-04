<template>
	<div class="career-section-5">
		  <div class="brand-slider-row">
			<!-- eslint-disable vue/no-v-html -->
			<div v-for="(slide, idx) in lines" :key="idx" class="brand-slider-first">
				<div v-for="(text, idxx) in slide.slide" :key="idxx" class="brand-title" v-html="text.title"></div>
			</div>
			<!-- eslint-enable vue/no-v-html -->
		</div>
	</div>
</template>
<script>
export default {
	name: 'CareerSlidingText' ,
	props:{
		lines:{
			type: Array,
			default(){
				return []
			}
		}
	}
}
</script>

<style lang="scss">
.career-section-5 { 
	padding:200px 0;
}
</style>