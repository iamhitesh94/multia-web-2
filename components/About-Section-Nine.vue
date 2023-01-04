<template>
	<div class="abouts-section-9"   >
		  <div class="container">
				<div class="about-awards-block">
					<h2 v-html="title" data-scroll></h2>
					<div class="about-awards-listing">
						<ul>
							<li v-for="(award, inx) in awards" :key="inx" data-scroll>
								<div class="award-text">
									<strong>{{award.year}}</strong>
									{{award.name}}
								</div>
							</li>
						</ul>
					</div>
				</div> 
		  </div>
	</div>
</template>
<script>
export default {
	name: 'AboutAwardSection',
	props:{
		awards:{
			type: Array,
			default() {
				return []
			}
		},
		title:{
			type: String,
			default() {
				return ''
			}
		},
	}
}


</script>

<style lang="scss">
#__layout > div > div > div.abouts-section-9{ background: $chremF3F1EC; padding: 200px 0 220px;
	.about-awards-block{ display: block; width: 100%; max-width: 1088px; margin: 0 auto; 
		h2{    @include laptopH2;   padding: 0 0 90px; opacity: 0; transform: translateY(80px);     transition: transform 0.45s ease-in-out 0.15s, opacity 0.45s ease-in-out 0.15s;; 
			span{ font-style: italic; }
			&.is-inview{ transform: translate(0); opacity: 1; }
		}
		ul{ padding: 0 0 0 112px; 
			li{ opacity: 0; transform: translateY(80px);     transition: transform 0.45s ease-in-out 0.15s, opacity 0.45s ease-in-out 0.15s; padding: 28px 0 29px; border-bottom: $grayD8D8D8 solid 3px; 
			.award-text { color: $gyay121212; display: flex; align-items: flex-start; 
				strong{ font-weight: 500; width: 110px; display: inline-block; }
			}
			&:last-child{ border: 0px; }
			&.is-inview{ transform: translate(0); opacity: 1; }

			}
		}
	}
}
 
 
</style>
