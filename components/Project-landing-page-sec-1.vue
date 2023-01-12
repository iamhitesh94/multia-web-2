<template>
   	<div class="project-page-sec-1"> 
		<div class="container">
			<div class="project-nav">
				<ul>
					<li class="active"><NuxtLink to="/projects">All projects</NuxtLink></li>
					<li><NuxtLink to="/type-of-client">Type of client</NuxtLink></li>
					<li><NuxtLink to="/type-of-work">Type of work</NuxtLink></li>
				</ul>
			</div>
			<div class="project-listing-block">
				<div class="project-listing">
					<div class="row">
						<div v-for="(project, inx) in projects" :key="inx" class="col-md-6 coman-effect-inview">
							<NuxtLink :to="project.uri">
								<div class="project-box">
									<div class="img">
										<span :style="{ backgroundImage: `url(${project.featuredImage.node.sourceUrl})` }" >
											<img :src="project.featuredImage.node.sourceUrl" :alt="project.featuredImage.node.title">
										</span>
									</div>
									<div class="project-box-inner">
										<h4>{{project.title}}</h4>
										<p>{{project.excerpt}}</p>
									</div>
								</div>
							</NuxtLink>
						</div>
					</div>
					<div v-if="pageInfo.hasNextPage" data-scroll class="load-more-link coman-effect">
						<a href="#" class="primary-btn-green" @click="loadmore(pageInfo)">load more </a>
					</div>
				</div>
			</div>
		</div>
		<div class="work-toggle-switch">
            <NuxtLink v-if="gridLink.url" class="switch-btn" :to="gridLink.url">{{gridLink.title}}</NuxtLink>
            <NuxtLink v-if="showcaseLink.url" class="switch-btn" :to="showcaseLink.url">{{showcaseLink.title}}</NuxtLink>
        </div>
   	</div>
</template>

<script>
const pageCount = 6;
export default {
	name: 'ProjectsListing',
	props:{
		lmS:{
			type: Object,
			default(){
				return {}
			}
		},
		gridLink:{
            type:Object,
            default(){
                return {}
            }
        },
        showcaseLink:{
            type:Object,
            default(){
                return {}
            }
        }
	},
	data() {
		return {
			projects: [],
            pageInfo: [],
			demo: [],
			showSlider: false,
		};
	},
	mounted() {
		this.projects = this.$store.state.page.projects.nodes
		this.pageInfo = this.$store.state.page.projects.pageInfo
	},
	methods:{
        async loadmore(query){
            await this.$store.dispatch("page/getProjectByPagination", {
                after: query.endCursor,
                before: query.before,
                first: query.before ? undefined : pageCount,
                last: query.before ? pageCount : undefined,
            });
            this.projects = this.projects.concat(this.$store.state.page.projects.nodes);
            this.pageInfo = this.$store.state.page.projects.pageInfo;
			setTimeout(() => {
				this.lmS.update();
			}, 500); 
        }
    },
}
</script>

<style lang="scss">
.project-page-sec-1{ padding: 167px 0 0 0;
 .project-nav{ max-width: 100%; margin: 0 auto; display: block; width: 100%; border-bottom: $gyay222222 solid 3px;;
		ul{ display: flex; align-items: center; 
			li{ padding: 0 40px 0 0px;;
				a{
				display: flex;		
				  height: auto; padding:0 0 15px;
				  
				  color: $gyay555555;
				  text-transform: uppercase; font-size: 18px; line-height:1;
				  &:hover{ color: $white;  } 
				  	
				}
				&.active{ 
					a {color: $white;   }
				}
			}
		}
	 }
	 .project-listing-block{
		width: 100%;
		display: block;
		.project-listing{
			width: 100%;
			display: block;
			.row{
				margin: 0 -32px;
				.col-md-6{
					padding: 0 32px;
				}
			}
			.project-box{
				padding: 64px 0 26px;;
				width: 100%;
				display: block;
				.img{
					span{ display: block; width: 100%; 
						background-position: center center; 
						background-size: cover;
						background-repeat: no-repeat;
						padding: 108.97% 0 0 0;
						img{ display:none; width: 100%;}
					}
				}
				.project-box-inner{
					padding: 30px 0 0 0;
					h4{
						@include laptopH4;
						color: $white;
						padding: 0 0 20px;
					}
					p{ 
						@include bodyText2;
						margin: 0px; padding: 0px;;
					}
				}
			}
		}
	 }
	 .load-more-link{ display: flex; align-items: center; justify-content: center; padding: 64px 0 0 0; }
}
</style>