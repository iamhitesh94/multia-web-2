<template>
	<div class="Collaborations-section-2">
		<div v-for="(collaboration, inx) in collaborations" :key="inx" class="collaborations-row-outer">
			<div class="container">
				 <div class="collaborations-row">
					<div class="collaborations-text">
						<div data-scroll class="left-title coman-effect">
							<h3>{{collaboration.title}}</h3>
						</div>
						<div data-scroll class="right-text coman-effect">
							<p>{{collaboration.content}}</p>
						</div>
					</div>
					<div v-if="collaboration.images.length" class="collaborations-img-block">
						<div v-for="(image, inxx) in collaboration.images" :key="inxx" data-scroll :class="`${image.class} coman-effect`">
							<img :src="image.image.sourceUrl" alt="">
						</div>
					</div>
				 </div>  
		  	</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'NuxtError',
	props:{
		collaborations:{
			type: Array,
			default(){
				return []
			}
		}
	}
}
</script>

<style lang="scss">
.collaborations-row-outer{
	background: $chremF3F1EC;
	padding: 200px 0; 
	.collaborations-row{ width: 100%; max-width: 1088px; margin: 0 auto; display: block;  
		.collaborations-text{ padding: 0 0 90px; display: flex; justify-content: space-between;
			.left-title{ width: 390px;
				h3{
					@include laptopH3; color: $gyay121212;
				}
			}
			.right-text{ max-width: 640px;
				p{@include bodyText2; color: $gyay121212; margin: 0px; padding: 0px; }
			}
		}
		.collaborations-img-block{ display: flex ; justify-content: space-between;
			.img-1{ max-width: 100%; 
				img{ display: block;  max-width: 100%;}
			}
			.img-2{ margin: 90px 0 0 0; max-width: 100%; 
				img{ display: block;  max-width: 100%;}
			}
			.img-3{ margin: 14px 0 0 0; max-width: 100%; 
				img{ display: block;  max-width: 100%;}
			}
			.img-5{ margin: 130px 0 0 0; max-width: 100%; 
				img{ display: block;  max-width: 100%;}
			}
		}
	}
	&:nth-child(2n+0){ background: $gyay121212; 
		.collaborations-row{
			.collaborations-text{
				.left-title{
					h3{
					 color: $white;
					}	
				}
				.right-text{ 
					p{ color: $white; }
				}
			}
		}
	}
}
</style>