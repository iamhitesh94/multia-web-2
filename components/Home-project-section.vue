<template>
  <div class="home-projects-section">
	<div class="container">
		<div class="project-listing">
			<!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
			<div v-for="(works, inx) in workRows" :key="inx" class="project-row flxrow">
				<div v-for="(work, inxs) in works" :key="inxs" :class="`image-box box-${ work.boxindex }  images-fadeinu`" data-scroll>
					<NuxtLink :to="work.uri">
						<div class="img-block">
							<img :src="work.featuredImage.node.sourceUrl" alt="">
							<div v-if="work.workOptions.images" class="over-img-block">
								<div v-for="(img,inx2) in work.workOptions.images" :key="inx2" class="box">
									<img :src="img.image.sourceUrl" alt=""> 
								</div>
							</div>
						</div>
						<div class="project-box-inner">
							<h4>{{work.title}}</h4>
							<p>{{work.excerpt}}</p>
						</div>
					</NuxtLink>
				</div>
			</div>
			<!-- eslint-enable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
		</div>	
		<div v-if="buttonLink.url" class="see-all-links">
			<a :href="buttonLink.url" :target="buttonLink.target" class="primary-btn">{{buttonLink.title}}</a>
		</div>
	</div>
	
  </div>
</template>

<script>
export default {
	name: 'HomeProject',
  	props:{
		projects:{
			type: Array,
			default() {
				return []
			}
		},
		buttonLink:{
			type: Object,
			default() {
				return {}
			}
		}
	},
	computed: {
		workRows () {
			const rows = [];
			let cols = [];
			const data = this.projects;
			for(let i =0; i < data.length; i++){
				if(i % 2 === 0){
					if(cols.length > 0 ){
						rows.push(cols);
						cols = [];
					}
				}
				data[i].boxindex = (i + 1);
				cols.push(data[i]);
				if(i === (data.length - 1)){
					if(cols.length > 0 ){
						rows.push(cols);
						cols = [];
					}
				}
			}
			return rows;
		},
	},
}
 
</script>

<style lang="scss">
.home-projects-section{ padding: 0 0 200px; }
.project-listing{ 
	.project-row{ padding: 0 0 90px;  justify-content: space-between; 
		.image-box{
			width: auto; display: block; position: relative;
			a{width: 100%; display: block; position: relative; 
				.img-block{ width: 100%; display: block; position: relative;
				 	> img{   width: 100%; display: block; position: absolute; left: 0px; top: 0px; height: 100%; object-fit: cover;}
					.over-img-block	{ opacity: 0; transition: all 0.3s ease-in-out; position: absolute; left: 0px; top: 0px; width: 100%; height: 100%;  
						.box{opacity: 0; transition: all 0.3s ease-in-out;  width: 100%; display: block; position: absolute; left: 0px; top: 0px; height: 100%;  
							
							img{  width: 100%; display: block; position: absolute; left: 0px; top: 0px; height: 100%; object-fit: cover;}
							   
						}
						.box.red{ opacity: 1; }
						
						
					}	
				 }

				.project-box-inner{ padding: 29px 0 0 0; display: block; width: 100%;
					h4{  @include  H4; font-size: $h4-laptop-fs; line-height: 100%; padding: 0 0 20px;  color: $white;}
					p{  @include bodyText2; margin: 0px; padding: 0px;   }
				}

				&:hover .over-img-block	{ opacity: 1; }
				&:hover .img-block  > img{ opacity: 0;  }
			} 
			&.box-1 {
				width: 36.7vw; margin: 99px 0 0 0;

				.img-block{ padding: 122% 0 0 0;  }
			}
			&.box-2 {
				width:44.4vw;
				.img-block{ padding: 106.25% 0 0 0;  }
			}
			&.box-3 {
				width:44.4vw;
				.img-block{ padding: 70.31% 0 0 0;  }
			}
			&.box-4 {
				width:39.9vw;
				.img-block{ padding: 113.91% 0 0 0;  }
			}
			&.box-5 {
				width:32.2vw; margin-top: -173px;
				.img-block{ padding: 118.57% 0 0 0;  }
			}
			&.box-6 {
				width:52.2vw;
				.img-block{ padding: 90.29% 0 0 0;  }
			}
			&.box-7 {
				width:59.9vw; margin: 0 0 0 9vw;
				.img-block{ padding: 75.31% 0 0 0;  }
			}
		}
	}
 }

 .see-all-links{ padding: 8px 0 0 0; }
 @media (min-width: 1600px) and (max-width: 2100px) {
	
.project-listing .project-row .image-box a .project-box-inner{ padding: 30px 0 0 0; }	
.project-listing .project-row .image-box.box-1{ margin: 126px 0 0 0; width: 35.157vw;}
.project-listing .project-row .image-box.box-2 {width: 42.5vw;}
.project-listing .project-row .image-box.box-3{ width: 42.5vw; }
.project-listing .project-row .image-box.box-4{ width: 37.78vw;}
.project-listing .project-row .image-box.box-5{ margin-top: -233px; width: 32.2vw;}
.project-listing .project-row .image-box.box-6{ width: 49.85vw;}
.project-listing .project-row .image-box.box-7{ width: 57.25vw; margin: 0 0 0  7.5vw;}
.project-listing .project-row:last-child{ padding: 0 0 75px; }
.home-projects-section{ padding: 0 0 220px; }



.project-listing .project-row{ padding: 0 0 120px; }

}
</style>
