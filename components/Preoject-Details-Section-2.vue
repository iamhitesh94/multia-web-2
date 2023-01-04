<template>
	<!-- eslint-disable vue/no-v-html -->
	<div v-if="(content || link || industries.nodes.length > 0 || services.nodes.length > 0)" class="project-inner-section-2">
		<div class="container">
			<div class="project-intro-text">
				<div class="project-intro-inner">
					<div v-if="(content || link)" data-scroll class="project-intro-left coman-effect" v-html="combine_html(content, link)">
					</div>
					<div data-scroll class="project-intro-right coman-effect-delay-2">
						<div v-if="(industries.nodes.length > 0)" class="sidebar-box-intro">
							<h6>Industry</h6>
							<div class="links">
								<ul>
									<li v-for="(industry, inx) in industries.nodes" :key="inx"><NuxtLink to="/">{{industry.name}}</NuxtLink></li>
								</ul>
							</div>
						</div>
						<div v-if="(services.nodes.length > 0)" class="sidebar-box-intro">
							<h6>services</h6>
							<div class="links">
								<ul>
									<li v-for="(service, inx) in services.nodes" :key="inx"><NuxtLink to="/">{{service.name}}</NuxtLink></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- eslint-enable vue/no-v-html -->
</template>

<script>
export default {
	name: 'ProjectDescriptionSec',
	props:{
		content:{
			type: String,
			default(){
				return ''
			}
		},
		link:{
			type: String,
			default(){
				return ''
			}
		},
		industries:{
			type: Object,
			default(){
				return {}
			}
		},
		services:{
			type: Object,
			default(){
				return {}
			}
		}
	},
	methods:{
		combine_html(content, link){
			let html = '';
			if(content !== ''){
				html += content;
			}
			if(link !== ''){
				html += '<div class="project-links"><a class="primary-btn-black" href="'+link+'" target="_blank" >visit website</a></div>';
			}
			return html;
		}
	}
}
</script>

<style lang="scss">
#__layout > div > div > div.project-inner-section-2{
	background: $white;
	padding: 200px 0;
	.project-intro-text{ 
		max-width: 971px;
		margin: 0 auto;
		display: block;
		width: 100%;

		.project-intro-inner{
			display: flex; 
			justify-content: space-between;

			.project-intro-left{
				max-width: 574px;
				h4{
					@include laptopH4;
					color: $gyay121212;
				}
				.project-links{
					display: flex; 
					align-items: flex-start; 
					padding: 60px 0 0 0;
				}
			}
			.project-intro-right{
				width: 187px;
				.sidebar-box-intro{ 
					padding: 0 0 42px;;
				}
				h6{
					color: $gyay121212;
					text-transform: uppercase;
					font-family: 'TT Norms Pro';
					font-size: 14px;
					font-weight: 500;
					line-height: 1;
					padding: 0 0 10px;;
				}
				.links{
					ul{
						li{
							a{
								@include bodyText2;
								color: $gyay121212;
								&:hover{ 
									opacity: 0.5;
								}
							}
						}
					}
				}
			}
		}
	}
}
</style>