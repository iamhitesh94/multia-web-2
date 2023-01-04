<template>
	<div class="abouts-section-2 v2">
		<div class="container"  >
			<div class="about-counter-block">
				<div class="about-counter-block-inner ">
					<div class="img coman-effect"   data-scroll>
						<img src="/assets/img/about-image-2.jpg" alt="">
					</div>
					<div class="counter-block-right coman-effect-delay-2"   data-scroll>
						<h4>Spreading delight through design</h4>
						<ul>
							<li>
								<div class="counter-text" data-scroll>
									<span class="w3n-counter" data-scroll data-scroll-call="w3n-counter" data-count="150"></span>+ Clients
								</div>
							</li>
							<li>
								<div class="counter-text" data-scroll>
									<span class="w3n-counter" data-scroll data-scroll-call="w3n-counter" data-count="10" ></span>+ Countries
								</div>
							</li>
							<li>
								<div class="counter-text" data-scroll>
									<span class="w3n-counter" data-scroll data-scroll-call="w3n-counter" data-count="10"></span>+ Initiatives
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
  name: 'NuxtError'
}
</script>

<style lang="scss">
 #__layout > div > div.abouts-section-2.v2{ padding: 200px 0; background: $chremF3F1EC; }
 .about-counter-block{display: flex ;align-items: center; justify-content: center;
	.about-counter-block-inner{ width: 100%; max-width: 1280px; align-items: center; display: flex; justify-content: center;
	 .img{ width:530px;
	 	img{ width: 100%; max-width: 100%; }
	 }
	 .counter-block-right{ margin: 0 0 0 142px; min-width: 480px;;
	 	h4{@include  H4; font-size: $h4-laptop-fs; color: $dark2c2c2c; }
		ul{ max-width: 450px;
			li{ padding: 46px 0 52px;
				.counter-text{ line-height: 1.1; font-family:"freight-display-pro";color: $black010101; font-size: $h3-laptop-fs;   }
				+ li{ border-top: 3px solid $grayD8D8D8; }
				&:last-child{ padding-bottom: 0; }
				&:first-child{ padding-top: 37px; padding-bottom: 43px;  }
			 }

		}
	 }
	}
 }
</style>
