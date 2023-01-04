<template>
   	<div class="project-page-sec-1">
		<div class="container">
			<div class="project-nav coman-effect-inview">
				<ul>
					<li><NuxtLink to="/projects">All projects</NuxtLink></li>
					<li :class="{'active': type == 'client'}"><NuxtLink to="/type-of-client">Type of client</NuxtLink></li>
					<li :class="{'active': type == 'work'}"><NuxtLink to="/type-of-work">Type of work</NuxtLink></li>
				</ul>
			</div>
			<div class="type-of-work-page">
				<!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
				<div v-for="(service, inx) in services" v-if="service.count > 0" :key="inx" class="type-of-work-block">
					<div data-scroll class="block-title coman-effect-inview">
						<h4>{{service.name}}</h4>
					</div>
					<div class="row">
						<div v-for="(work, workInx) in service.works.nodes" :key="workInx" data-scroll class="col-md-4 coman-effect-inview">
							<NuxtLink :to="work.uri">
								<div class="project-box">
									<div class="img">
										<span :style="{ backgroundImage: `url(${work.featuredImage.node.sourceUrl})` }" >
											<img :src="work.featuredImage.node.sourceUrl" :alt="work.featuredImage.node.title">
										</span>
									</div>
									<div class="project-box-inner">
										<h4>{{work.title}}</h4>
										<p>{{work.excerpt}}</p>
									</div>
								</div>
							</NuxtLink>
						</div>
					</div>
					<div data-scroll class="see-all-links coman-effect">
						<NuxtLink :to="service.uri"><i> </i>see all projects</NuxtLink>
					</div>
				</div>
				<!-- eslint-enable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
			</div>
		</div>
   	</div>
</template>

<script>
export default {
	name: 'TypeOfWorks',
	props:{
		services: {
			type: Array,
			default(){
				return []
			}
		},
		type:{
			type: String,
			default(){
				return ''
			}
		}
	} 
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
	 .type-of-work-block{
		width: 100%;
		display: block; padding: 90px 0 90px;;
		border-bottom: $gyay222222 solid 3px;;
		&:first-child{ padding-top: 79px; }
		&:last-child{  border: 0px }
		
		 .block-title{
			h4{
				@include laptopH4;
						color: $white;
						 
			}
		 }
			.row{
				margin: 0 -16px;
				.col-md-4{
					padding: 0 16px;
				}
			}
			.project-box{
				padding: 40px 0 0px;;
				width: 100%;
				display: block;
				.img{
					span{ display: block; width: 100%; 
						background-position: center center; 
						background-size: cover;
						background-repeat: no-repeat;
						padding: 121.87% 0 0 0;
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
	 .see-all-links{ 
					padding: 60px 0 0 0; display: flex; align-items: flex-start; justify-content: flex-start;
					a{ display: flex ; align-items: center; 
					i{ display: inline-block; background: url(/assets/img/plus.svg) no-repeat center center; width: 17px; height: 17px; margin: 0 11px 0 0; }
					  color: $white; font-size: 18px; text-transform: uppercase;	
					  &:hover{ opacity: 0.5; }
					}
				}
}
</style>