<template>
	<div class="project-inner-section-4">
		<div class="solution-outer" id="direction">
			<div class="container">
				<div class="img-rotete-outer">
					<div v-for="(img, inx) in solutionImages" :key="inx" :class="`c-direction-block_item ${img.class}`">
						<span class="c-direction-block_item_inner" ><img :src="img.image.sourceUrl" alt="img.image.sourceUrl"></span>
					</div>
				</div>
				<div v-if="solutionContent" class="solution-text" v-html="solutionContent"></div>	
			</div>
		</div>
		<div v-if="fullImages" class="full-width-images" :style="{ background: `#F3F1EC`}">
			<div v-for="(img, inx) in fullImages" :key="inx" data-scroll class="full-img coman-effect"><img :src="img.image.sourceUrl" alt=""></div>
		</div>
		<div v-if="centerImages" class="center-align-images" :style="{ background: `#F3F1EC`}">
			<div class="container">
				<div v-for="(img, inx) in centerImages" :key="inx" data-scroll class="web-img coman-effect"><img :src="img.image.sourceUrl" alt=""></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ProjectSolutionBlock' ,
	props:{
		solutionContent:{
			type: String,
			default(){
				return ''
			}
		},
		solutionImages:{
			type: Array,
			default(){
				return []
			}
		},
		fullImages:{
			type: Array,
			default(){
				return []
			}
		},
		centerImages:{
			type: Array,
			default(){
				return []
			}
		}
	}
}
</script>

<style lang="scss">
.project-inner-section-4 {
	padding: 0px 0 0px;
	.full-width-images{ width: 100%; display: block;
		.full-img{
			padding: 0px 0;
			display: block;
			width: 100%;
			text-align: center;
			img{  width: 100%; display:inline-block ; vertical-align: top; }
		}
	}
	.center-align-images{
		padding: 100px 0;
		.web-img {
			padding: 100px 0;
			display: block;
			width: 100%;
			text-align: center;
			img { 
				max-width: 100%; 
				display:inline-block ; 
				vertical-align: top; 
			}
		}
	}
}
.solution-outer { width:100%; position:relative; display:block; padding:40% 0 60% 0;}
.solution-outer .solution-text { width:100%; max-width:420px; position:relative; z-index:2; display:block; text-align:center; margin:0 auto;}
.solution-outer .solution-text h4 { @include laptopH4; padding:0 0 20px 0; color:$white;}
.solution-outer .solution-text p { @include bodyText1; margin: 0px; padding: 0px;;}
.solution-outer .img-rotete-outer { width:100%; height:100%; position:absolute; top:0px; left:0px; z-index:1;}
.solution-outer .img-rotete-outer .c-direction-block_item { position:absolute; z-index:1;}
.solution-outer .img-rotete-outer .c-direction-block_item.one { width:29%; top:-6.7%; left:50%; transform:translate(-50%,0%);}
.solution-outer .img-rotete-outer .c-direction-block_item.two { width:25.80%; right:7.5%; top:24.4%;}
.solution-outer .img-rotete-outer .c-direction-block_item.three { width:40%; right:9.8%; bottom:17.6%;}
.solution-outer .img-rotete-outer .c-direction-block_item.four { width:29%; left:5.3%; bottom:14.7%;}
.solution-outer .img-rotete-outer .c-direction-block_item.five { width:28.50%; top:13.4%; left:0;}
.solution-outer .img-rotete-outer .c-direction-block_item span { width:100%; position:relative; display:block;}
.solution-outer .img-rotete-outer .c-direction-block_item.one span { padding:139% 0 0 0;}
.solution-outer .img-rotete-outer .c-direction-block_item.two span { padding:103% 0 0 0;}
.solution-outer .img-rotete-outer .c-direction-block_item.three span { padding:73.50% 0 0 0;}
.solution-outer .img-rotete-outer .c-direction-block_item.four span { padding:139% 0 0 0;}
.solution-outer .img-rotete-outer .c-direction-block_item.five span { padding:103% 0 0 0;}
.solution-outer .img-rotete-outer .c-direction-block_item img { width:100%; height:100%; display:block; object-fit:cover; position:absolute; top:0px; left:0px; z-index:1;}
</style>