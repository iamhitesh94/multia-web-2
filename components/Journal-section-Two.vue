<template>
	<div class="Journal-relted-block">
		<div v-if="category.nodes" class="Journal-relted-block-inner">
			<div class="container">
				<!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
			   	<div v-for="(cat, inx) in category.nodes" v-if="inx === 0" :key="inx" class="max-width-div">		
					<h3 data-scroll class="coman-effect">More <span>{{cat.name}}</span></h3>
					<div class="row" :class="get_relateds()">
						<div v-for="(post, postInx) in relatedPosts.nodes" :key="postInx" data-scroll class="col-md-6 coman-effect">
							<div class="Journal-box">
								<div v-if="post.featuredImage" class="img" :style="{ backgroundImage: `url(${post.featuredImage.node.sourceUrl})` }">
									<img :src="post.featuredImage.node.sourceUrl" :alt="post.featuredImage.node.title">
								</div>
								<div class="inner-text">
									<p>{{post.title}}</p>
									<div class="read-more-links">
										<NuxtLink :to="post.uri"><i> </i> Read more</NuxtLink>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div data-scroll class="see-all coman-effect">
						<NuxtLink class="primary-btn" :to="cat.uri">see all {{cat.name}}</NuxtLink>
					</div>
				</div>
				<!-- eslint-enable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
			</div>
		</div> 
	</div>
</template>

<script>
export default {
	name: 'PostRelateds',
	props:{
		category:{
			type: Object,
			default(){
				return {}
			}
		},
		currentPostId: {
			type: Number,
			default(){
				return 0
			}
		}
	},
	data() {
		return {
			relatedPosts: [],
		}
	},
	mounted() {
		const cats = this.category.nodes;
		let catID = 0;
		const keys = Object.keys(cats)
		for(let i = 0; i < keys.length; i++){
			catID = cats[keys[i]].databaseId;
		}
		this.$store.dispatch("page/getRelatedJournalsPageData", {
			"categoryId": catID,
			"notIn": this.currentPostId
		});
	},
	methods:{
		get_relateds(){
			this.relatedPosts = this.$store.state.page.relatedJournals;
		}
	}
}
</script>

<style lang="scss">
.Journal-relted-block-inner{
	background: $chremF3F1EC;
	padding: 150px 0;
	margin: -2px 0 0 0;
	.max-width-div{ 
		max-width: 1088px;  
		margin: 0 auto;
		display: block;
	}
	h3{
		@include laptopH3;
		padding: 0 0 60px;
		span{
			font-style: italic;
		}
	}

	.Journal-box{
		width: 100%;
		padding: 0 0 90px;
		position: relative;
		   .img{
			  width: 100%;
			  display: block;
			  min-height: 318px;
			  background-position: center center;
			  background-size: cover;
			  background-repeat: no-repeat;
			  img{ display:none; width: 100%;} 
		   }
		   .inner-text{
				padding: 30px 0 0 0;
				p{
					@include bodyText2;
					color: $gyay121212;

					margin: 0px;
					padding: 0px;;
				}
				.read-more-links {
					padding: 20px 0 0 0;
					 a{
						font-size: 18px;
						color: $gyay121212;
						&:hover{ 
							border-color: $green16A15E;
							color: $green16A15E;
						}
					 }
				}
		   }
	}
	.row{ 
		margin: 0 -16px;
		[class*="col-md-"]
		{
			padding: 0 16px;
		}
	}
	.see-all {
		display: flex;
		 a.primary-btn{
			width: auto;
			 border-color: $gyay121212;
			 color: $gyay121212;
			&:hover{ 
				border-color: $green16A15E;
				color: $green16A15E;
			}
		 }
	}

}
</style>