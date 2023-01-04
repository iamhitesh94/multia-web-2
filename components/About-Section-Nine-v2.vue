<template>
	<div class="abouts-section-9 v2"   >
		  <div class="container">
				<div class="about-awards-block">
					<h2 data-scroll> <span> Awards</span> & Publications</h2>
					<div class="about-awards-listing">
						<ul>
							<li data-scroll>
								<div class="award-text">
									<strong>2021</strong>
									Creative Pool Annual 2020: People’s Choice Award for Branding
								</div>
							</li>
							<li data-scroll>
								<div class="award-text">
									<strong>2021</strong>
									Brandon Hall Gold Award for Best Certification Program (Along with MKCL)
								</div>
							</li>
							<li data-scroll>
								<div class="award-text">
									<strong>2021</strong>
									The Manifest: Top 5 Branding Agencies in India
								</div>
							</li>
							<li data-scroll>
								<div class="award-text">
									<strong>2021</strong>
									The Manifest: Most Reviewed Branding Companies
								</div>
							</li>
							<li data-scroll>
								<div class="award-text">
									<strong>2020</strong>
									Brandon Hall Bronze Award for Excellence in Learning
								</div>
							</li>
							<li data-scroll>
								<div class="award-text">
									<strong>2020</strong>
									Gold LearnX Live Award – Integrated Training
								</div>
							</li>
							<li data-scroll>
								<div class="award-text">
									<strong>2020</strong>
									Clutch: Top 5 Design Agencies in India
								</div>
							</li>
							<li data-scroll>
								<div class="award-text">
									<strong>2019</strong>
									Platinum LearnX Live Award:  Best eLearning Widespread Adoption
								</div>
							</li>
							<li data-scroll>
								<div class="award-text">
									<strong>2018</strong>
									International Design Award for Branding
								</div>
							</li>
							<li data-scroll>
								<div class="award-text">
									<strong>2018</strong>
									Awwwards: Best Website Category
								</div>
							</li>
							<li data-scroll>
								<div class="award-text">
									<strong>2017</strong>
									CSS Reel: UI/UX Award Category
								</div>
							</li>
							<li data-scroll>
								<div class="award-text">
									<strong>2015</strong>
									CSS Nectar: Best Website Award
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
  name: 'NuxtError' 
}


</script>

<style lang="scss">
#__layout > div > div.abouts-section-9.v2{ background: $chremF3F1EC; padding: 200px 0 220px;
	.about-awards-block{ display: block; width: 100%; max-width: 1088px; margin: 0 auto; 
		h2{    @include laptopH2;   padding: 0 0 90px; opacity: 0; transform: translateY(80px);     transition: transform 0.45s ease-in-out 0.15s, opacity 0.45s ease-in-out 0.15s;; 
			color: $black010101;
			span{ font-style: italic; }
			&.is-inview{ transform: translate(0); opacity: 1; }
		}
		ul{ padding: 0 0 0 112px; 
			li{ opacity: 0; transform: translateY(80px);     transition: transform 0.45s ease-in-out 0.15s, opacity 0.45s ease-in-out 0.15s; padding: 28px 0 29px; border-bottom: $grayD8D8D8 solid 3px;  font-family: 'Sora-Light';
			.award-text {  display: flex; align-items: flex-start;font-family: 'Sora-Light'; color: $black010101;
				strong{ font-family: 'Sora-Light'; font-weight: 300; width: 110px; display: inline-block; }
			}
			&:last-child{ border: 0px; }
			&.is-inview{ transform: translate(0); opacity: 1; }

			}
		}
	}
}
 
 
</style>
