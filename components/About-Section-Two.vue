<template>
	<div class="abouts-section-2">
		<div class="container"  >
			<div class="about-counter-block">
				<div class="about-counter-block-inner ">
					<div class="img coman-effect"   data-scroll>
						<img v-bind:src="image.sourceUrl" alt="">
					</div>
					<div class="counter-block-right coman-effect-delay-2"   data-scroll>
						<h4>{{title}}</h4>
						<ul v-if="counters">
							<li v-for="(counter, inx) in counters" :key="inx">
								<div class="counter-text" data-scroll>
									<span class="w3n-counter" data-scroll data-scroll-call="w3n-counter" v-bind:data-count="counter.number"></span>+ {{counter.label}}
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AboutCounterSection',
	props:{
		image:{
			type: Object ,
			default() {
				return {}
			}
		},
		title:{
			type: String,
			default() {
				return ""
			}
		},
		counters:{
			type: Array,
			default() {
				return []
			}
		}
	},
	methods:{
		return_count(counter){
			return counter.number
		} 
	}
}
</script>

<style lang="scss">
 #__layout > div > div > div.abouts-section-2{ padding: 200px 0; background: $chremF3F1EC; }
 .about-counter-block{display: flex ;align-items: center; justify-content: center;
	.about-counter-block-inner{ width: 100%; max-width: 1280px; align-items: center; display: flex; justify-content: center;
	 .img{ width:530px;
	 	img{ width: 100%; max-width: 100%; }
	 }
	 .counter-block-right{ margin: 0 0 0 142px; min-width: 480px;;
	 	h4{@include  H4; font-size: $h4-laptop-fs; color: $gyay555555; }
		ul{ max-width: 450px;
			li{ padding: 46px 0 52px;
				.counter-text{ line-height: 1.1; font-family:"freight-display-pro";color: $gyay121212; font-size: $h3-laptop-fs;   }
				+ li{ border-top: 3px solid $grayD8D8D8; }
				&:last-child{ padding-bottom: 0; }
				&:first-child{ padding-top: 37px; padding-bottom: 43px;  }
			 }

		}
	 }
	}
 }
</style>
