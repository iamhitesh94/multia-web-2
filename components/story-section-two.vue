<template>
	<div class="story-section-2">
		<div class="container">
			<div v-if="(blocks.length > 0)" class="story-outer-center" v-html="combine_block_html(blocks)"></div>
			<div v-if="(lines.length > 0)" class="since-block">
				<div data-scroll class="since-block-inner coman-effect">
					<h2>
						<span v-for="(line, inx) in lines" :key="inx" v-html="line.lineText"></span>
					</h2>
				</div>
			</div>
			<div v-if="(blocksTwo.length > 0)" class="story-outer-center" v-html="combine_block_html(blocksTwo)">
			</div> 
		</div>
	</div>
</template>

<script>
export default {
	name: 'StoryBlockSec', 
	props:{
		blocks:{
			type: Array,
			default(){
				return  []
			}
		},
		lines:{
			type: Array,
			default(){
				return  []
			}
		},
		blocksTwo:{
			type: Array,
			default(){
				return  []
			}
		},
	},
	methods:{
		combine_block_html(blocks){
			let html = "";
			if(blocks.length > 0){
				let contentOnlyCount = 0;
				for(let i = 0; i < blocks.length; i++ ){
					const block = blocks[i];
					const leftRightCount = block.class;
					if(block.style === 'img_text'){
						if(block.imagePosition !== 'right'){
							html += '<div class="story-sec-'+leftRightCount+'" data-count='+leftRightCount+'><div data-scroll class="left-colum-'+leftRightCount+' coman-effect-delay-2"><span style="background-image: url('+block.image.sourceUrl+')" ><img src="'+block.image.sourceUrl+'" alt=""></span></div><div data-scroll class="right-colum-'+leftRightCount+' coman-effect">'+block.content+'</div></div>';
							
						}else{
							html += '<div class="story-sec-'+leftRightCount+'" data-count='+leftRightCount+'><div data-scroll="" class="left-colum-'+leftRightCount+' coman-effect is-inview">'+block.content+'</div><div data-scroll="" class="right-colum-'+leftRightCount+' coman-effect-delay-'+leftRightCount+' is-inview"><span style="background-image:url('+block.image.sourceUrl+');"><img src="'+block.image.sourceUrl+'" alt=""></span></div></div>';
							
						}
					}else{
						html += '<div data-scroll="" class="story-tagline-1 coman-effect is-inview">'+block.content+'</div>';
						contentOnlyCount = contentOnlyCount + 1;
					}
					
				}
			}
			return html;
		}
	}
}
</script>

<style lang="scss">
.story-section-2 {  padding:0px 0 0 0; 
	.story-outer-center{ display: block; width: 100%; max-width: 1088px; margin: 0 auto; 
		.story-sec-1{
			display: flex; 
			justify-content: space-between;
			width: 100%; 
			.left-colum-1{ 
				width: 448px;
				span{
					width: 100%; 
					display: block;
					background-position: center center; 
					background-size: cover;
					background-repeat: no-repeat;
					padding: 124.33% 0 0 0;
					img{ display: none; width: 100%;}
				}
			}
			.right-colum-1{ 
				max-width: 528px;
				p{
					@include bodyText1;
					margin: 0px; 
					padding: 0px;

				}
			 }
		}
		.story-sec-2{
			display: flex;
			justify-content: space-between;
			width: 100%;
			.left-colum-2{ 
				width: 448px;
				padding: 196px 0 0 0;
				p{
					@include bodyText1;
					margin: 0px; 
					padding: 0px;
					+ p{ padding: 46px 0 0 0; }
				}
			}
			.right-colum-2{
				width: 528px; margin: -156px  0 0 0;
				span{
					width: 100%; 
					display: block;
					background-position: center center; 
					background-size: cover;
					background-repeat: no-repeat;
					padding: 141.28% 0 0 0; border-radius: 528px;
					img{ display: none; width: 100%;}
				}
			}
		 }
		 .story-tagline-1{
			padding: 200px  0;
			h3{ 
				@include laptopH3;
				color: $white;
				text-align: center;
				span{ font-style: italic; }

			}
		 }
		 .story-sec-3{ display: flex; justify-content: space-between; 
		 width: 100%;
		 	.left-colum-3{ 
				width: 448px;
				span{
					width: 100%; 
					display: block;
					background-position: center center; 
					background-size: cover;
					background-repeat: no-repeat;
					padding:100% 0 0 0; border-radius: 100%;
					img{ display: none; width: 100%;}
				}
			}
			.right-colum-3{ 
				max-width: 528px;
				p{
					@include bodyText1;
					margin: 0px; 
					padding: 0px;

				}
				h3{ 
				@include laptopH3;
				color: $white;
				padding: 60px 0; 
				span{ font-style: italic; }

				}
			 }
		 }
		  .story-sec-4{ display: flex; align-items: center; justify-content: space-between; 
		 width: 100%;
		 	.left-colum-4{ 
				width: 528px;
				span{
					width: 100%; 
					display: block;
					background-position: center center; 
					background-size: cover;
					background-repeat: no-repeat;
					padding:130.11% 0 0 0; border-radius: 528px;
					img{ display: none; width: 100%;}
				}
			}
			.right-colum-4{ 
				max-width: 416px;
				p{
					@include bodyText1;
					margin: 0px; 
					padding: 0px;
				 + p{ padding: 46px 0 0 0; }
				}
				h3{ 
				@include laptopH3;
				color: $white;
				padding: 60px 0; 
				span{ font-style: italic; }

				}
			 }
		 }
	} 

	.since-block{ display: block; width: 100%;
		padding: 200px  0;
		.since-block-inner{
			max-width: 850px;
			border-top: $gyay222222 solid 3px;
			h2{
				@include laptopH2;
				color: $gyay555555;
				i{ 
					font-style: italic;
					color: $white;
				}
				span{
					display: block; padding: 30px 0 45px;
					border-bottom: $gyay222222 solid 3px;
				}
			}
		}
	}
}
</style>