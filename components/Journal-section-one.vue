<template>
	<!-- eslint-disable vue/no-v-html -->
	<div class="Journal-section-page">
		<div class="Journal-section-1">
			<div class="container">
				<div data-scroll class="max-width-div ">
					<div class="case-study-top">
						<h6 v-for="(category, inx) in post.categories.nodes" :key="inx" >{{category.name}}</h6>
						<h3 v-if="post.postDetailOptions.bannerTitle" v-html="post.postDetailOptions.bannerTitle"></h3>
						<h3 v-if="!post.postDetailOptions.bannerTitle">{{post.title}}</h3>
						<p v-html="get_admin_date(post)"></p>
					</div>
				</div> 
			</div>
		</div>
		<div class="Journal-feature-img">
			<div class="container">
				<div class="max-width-div">
					<div v-if="post.postDetailOptions.bannerImage.sourceUrl" data-scroll class="feature-img coman-effect-delay-2" :style="{ backgroundImage: `url(${post.postDetailOptions.bannerImage.sourceUrl})` }" ></div>
					<div v-if="!post.postDetailOptions.bannerImage.sourceUrl && post.featuredImage.node" data-scroll class="feature-img coman-effect-delay-2" :style="{ backgroundImage: `url(${post.featuredImage.node.sourceUrl})` }" ></div>
				</div>
			</div>
		</div>
		<div class="container">
			<div data-scroll class="max-width-864 coman-effect">
				<div class="Journal-text">
					<div v-if="post.content" v-html="post.content"></div>
					<div v-if="post.postDetailOptions.needSecImage.sourceUrl" class="img">
						<img :src="post.postDetailOptions.needSecImage.sourceUrl" alt="">
					</div>
					<div v-if="post.postDetailOptions.needSecContent" v-html="post.postDetailOptions.needSecContent"></div>
				</div>
			</div>
		</div>
		<div v-if="post.postDetailOptions.images" class="gallery-sldier-outer">
			<div v-for="(slide, inx) in post.postDetailOptions.images" :key="inx" class="gallery-slide">
				<div v-for="(img, imgInx) in slide.slide" :key="imgInx" class="gallery-img" :style="{ backgroundImage: `url(${img.image.sourceUrl})` }"></div>
			</div>
		</div>
		<div class="container">
			<div v-if="post.postDetailOptions.challengesSecContent" data-scroll class="max-width-864 coman-effect">
				<div class="Journal-text" v-html="post.postDetailOptions.challengesSecContent"> 
				</div>
			</div>
			<div v-if="post.postDetailOptions.videoSecImage.sourceUrl && post.postDetailOptions.videoSecUrl" data-scroll class="max-width-div coman-effect">
				<div class="details-vedio-block">
					<div class="vdi-box" :style="{ backgroundImage: `url(${post.postDetailOptions.videoSecImage.sourceUrl})` }">
						<a href="javascript:void(0);" @click="play_video(post.postDetailOptions.videoSecUrl)"><img src="/assets/img/vdi-icon.svg" alt=""></a>
					</div>
					<div class="vedio-block-hide">
						<div class="close-btn-vdi" @click="close_video()"><a href="javascript:void(0);">X</a></div>
						<iframe  id="videoIframe" width="560" height="315" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					</div>
				</div>
			</div>
			<div v-if="post.postDetailOptions.challengesSecContent" data-scroll class="max-width-864 coman-effect">
				<div class="Journal-text" v-html="post.postDetailOptions.challengesSecContent">
				</div>
			</div>
		</div>
	</div>
	<!-- eslint-enable vue/no-v-html -->
</template>

<script>
export default {
	name: 'PostDetail',
	props:{
		post:{
			type: Object,
			default(){
				return {}
			}
		}
	},
	methods:{
		get_admin_date(post){
			let html = 'By '+post.author.node.nicename
			const date = new Date(post.date);
			const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
			const monthName = months[date.getMonth()];
			const dateText = date.getDate().toString().padStart(2, "0");
			const year = date.getFullYear();
			html += "<span>"+monthName+" "+dateText+", "+year+"</span>";
			return html
		},
		play_video(url){
			const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
			const match = url.match(regExp);
			const id = (match&&match[7].length===11)? match[7] : false;
			if(id){
				jQuery("#videoIframe").attr('src', 'https://www.youtube.com/embed/'+id+'?autoplay=1');
				jQuery("#videoIframe").parent().show()
			}
			
		},
		close_video(){
			jQuery("#videoIframe").attr('src', '');
			jQuery("#videoIframe").parent().removeAttr('style');
		}
	}
}
</script>

<style lang="scss">
#__layout > div > div > div.Journal-section-page{ 
	padding: 0 0 100px;
	background: $white; 
	.max-width-div{ 
		max-width: 1088px;  
		margin: 0 auto;
		display: block;
	}
	.max-width-864{
		max-width: 864px;  
		margin: 0 auto;
		display: block;
		color: $gyay121212;
	}
	.Journal-feature-img{ 
		width: 100%;
		display: block;
		position: relative;
		&:after{
			width: 100%;
			height: calc(50% + 4px);
			position: absolute;
			left: 0;
			content: '';
			top: -4px;
			background: $gyay121212;
			z-index:1;	
		}
		  .feature-img{
			 position: relative;
			 z-index: 2; 
			 width: 100%;
			 display: block;
			 min-height: 613px;
			 background-position: center center;
			 background-size: cover;
			 background-repeat: no-repeat;
		  }
	}

	.Journal-text{ 
		padding: 100px 0 0 0;
		h4{
			@include laptopH4;
			color: $gyay121212;
			padding: 0 0 30px;
		}
		p{
			@include bodyText2;
			margin: 0px;
			padding: 0px;
			color: $gyay121212;
			 + p{ padding: 36px 0 0 0; }
		}
		.img{
			display: block;
			padding: 100px 0;
			text-align: center;
			img{
				width: auto;
				display:inline-block ;
				max-width: 100%;
			}
		}
	 }
}
.gallery-sldier-outer { 
	--duration: 12s;
	width: 100vw;
	transition: all .2s ease-in-out;
	left: 0;
	margin: 100px 0 0 0;
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	white-space: nowrap;
	animation: marquee calc(6 * var(--duration)) linear infinite;
	animation-play-state: paused;
	contain: layout;
	animation-direction: reverse;
		.gallery-slide{ 
			display: flex; 
			align-items: center;
			animation: marquee calc(3 * var(--duration)) linear infinite;
			white-space: nowrap;
		 
				.gallery-img{ 
					display: inline-block;
					width: 100%;
					 width: 1088px; margin: 0 25px;;
					min-height: 559px;
					background-position: center center;
					background-size: cover;
					background-repeat: no-repeat;
		          }
        }	
 
}
.Journal-section-1{ 
	padding: 220px 0 0px 0;
	background: $gyay121212;
	
	.case-study-top{ 
		display: block;
		width: 100%;
		text-align: center;
		padding: 0 0 100px;
		transform: translateY(50px); 
		opacity: 0; 
		transition: all 0.5s ease-in-out; 
		h6{
			@include bodyText2; 
			margin: 0px;
			padding: 0px;
			color: $white;
			text-transform: uppercase;
			padding: 0 0 60px;
		}
		h3{
			@include laptopH3; 
			margin: 0px;
			padding: 0px;
			color: $white;
			padding: 0 0 60px;
			span{
				font-style: italic;
			}
		}
		p{
			@include bodyText2;
			margin: 0px;
			padding: 0;
			span{
				display: block;
			}
		}
	}
	
}
.details-vedio-block{
		display: block; width: 100%; 
		position: relative;
		margin: 100px 0 0 0;

		.vdi-box{
			 
			position: relative;
			background-position: center center;
			background-size: cover;
			background-repeat: no-repeat;
			min-height: 558px;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.vedio-block-hide{  
			position: absolute; 
			left: 0px;
			top: 0px;
			 width: 100%; 
			 height: 100%;
			 display: none;

			 .close-btn-vdi{ width: 40px; 
				height: 40px;
				position: absolute; right: 5px; top: 5px;
				display: flex; align-items: center; 
				justify-content: center;
				background: #fff;
				z-index: 5;
				a {
					color: #000;
					font-weight: bold;
					font-size: 20px;
				}
				
			}
			iframe{ 
					width: 100%; 
					height: 100%;
					position: absolute;
					left: 0px;
					top: 0;
					object-fit: cover;
				}

			&.active{ display: block; }
			 
		}
}

html.is-ready .Journal-section-1 .case-study-top  { opacity: 1;transform: translateY(0);transition-delay: 0.2s;}
 
</style>