<template>
	<div class="internship-section-4">
		<div class="brand-slider-row">
			<!-- eslint-disable vue/no-v-html -->
			<div v-for="(slide, idx) in slider" :key="idx" class="brand-slider-first">
				<div v-for="(text, idxx) in slide.lines" :key="idxx" class="brand-title" v-html="text.line"></div>
			</div>
			<!-- eslint-enable vue/no-v-html -->
		</div>
	</div>
</template>

<script>

export default {
	name: 'InternshipSliderTextSec',
	props:{
		slider:{
			type:Array,
			default(){
				return []
			}
		}
	}
}


</script>

<style lang="scss">
.internship-section-4{ 
	padding: 200px 0;
 }

 
</style>
