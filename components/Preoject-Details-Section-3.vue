<template>
	<div class="project-inner-section-3" :style="{ background: `#F3F1EC`}">
		<div class="container">
			<div v-for="(image, inx) in projectImages" :key="inx" data-scroll class="web-img coman-effect"><img :src="image.image.sourceUrl" alt=""></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ProjectImages',
	props:{
		projectImages:{
			type: Array,
			default(){
				return []
			}
		}
	} 
}
</script>

<style lang="scss">
.project-inner-section-3{
	padding: 100px 0 150px;
	.web-img{
		padding: 100px 0;
		display: block;
		width: 100%;
		text-align: center;
		img{ max-width: 100%; display:inline-block ; vertical-align: top; }
	}
}
</style>