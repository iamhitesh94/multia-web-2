<template>
	<div class="abouts-section-5" >
		<div id="multia-way" >
		<div class="container">
			<div class="the-multia-way-block">
				<div class="the-multia-way-inner">
					<div class="left-colum" data-scroll data-scroll-sticky data-scroll-target="#multia-way">
						<div class="way-title" >
							<h2>{{title}}</h2>
						</div>
					</div>
					<div class="right-colum">
						<div class="way-listing">
							<ul>
								<!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
								<li v-for="(line, inx) in lines" v-if="line.lineText != ''" :key="inx" data-scroll>
									<div class="way-text">
										<p>{{line.lineText}}</p>
									</div>
								</li>
								<!-- eslint-enable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	</div>
</template>

<script>
export default {
	name: 'AboutWaySection',
	props:{
		title:{
			type: String,
			default() {
				return ""
			}
		},
		lines:{
			type: Array,
			default() {
				return []
			}
		}
	}
}
</script>

<style lang="scss">
 .abouts-section-5{ padding: 200px 0; position: relative;
	.the-multia-way-block{ display: flex; align-items: center; justify-content: center;
		.the-multia-way-inner{ max-width: 1088px; width: 100%; display: flex; align-items: flex-start;
			.left-colum{ width: 448px;  min-width: 448px; display: block;
				 .way-title{ position: sticky; top: 100px; padding-right: 16px;;
					h2{@include  H2; font-style: italic;   color: $white; font-size: $h2-laptop-fs; }
				 }
			}
			.right-colum{ width: 640px;
				.way-listing {
					ul{
						li{ padding:  60px 0;
							opacity: 0;
							-webkit-transform: translateX(1vw);
							transform: translateX(1vw);
							-webkit-transition: transform .45s ease-in-out .15s,opacity .45s ease-in-out .15s;
							transition: transform .45s ease-in-out .15s,opacity .45s ease-in-out .15s;
							.way-text {
								p{@include  H4;  font-size: $h4-laptop-fs;   margin: 0px; padding: 0px; color: $white ; }
							}
							+ li{ border-top:$gyay222222 solid 3px ;}
							&:first-child{ padding-top: 0px; }
							&:last-child{ padding-bottom: 0px; }
							&.is-inview
								{opacity: 1; transition-delay: 0.5s;
								-webkit-transform: translateX(0);
								transform: translateX(0);}
						}
					}
				}
			}
		}
	}
 }

</style>
