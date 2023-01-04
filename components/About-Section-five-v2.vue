<template>
	<div class="abouts-section-5 v2" >
		<div id="multia-way" >
		<div class="container">
			<div class="the-multia-way-block">
				<div class="the-multia-way-inner">
					<div class="left-colum" data-scroll data-scroll-sticky data-scroll-target="#multia-way">
						<div class="way-title" >
							<h2>The Multia way</h2>
						</div>
					</div>
					<div class="right-colum">
						<div class="way-listing">
							<ul>
								<li data-scroll>
									<div class="way-text">
										<p>We understand that nothing is more important than the success of a business and everyone associated with it.</p>
									</div>
								</li>
								<li data-scroll>
									<div class="way-text">
										<p>We are here to make Multia a happy & healthy place.</p>
									</div>
								</li>
								<li data-scroll>
									<div class="way-text">
										<p>Our team loves creating, learning, collaborating and growing together.</p>
									</div>
								</li>
								<li data-scroll>
									<div class="way-text">
										<p>We pay attention to the details.</p>
									</div>
								</li>
								<li data-scroll>
									<div class="way-text">
										<p>We are a creative, focussed, friendly and loveable lot.</p>
									</div>
								</li>
								<li data-scroll>
									<div class="way-text">
										<p>As a thriving troop we look after each other.</p>
									</div>
								</li>
								<li data-scroll>
									<div class="way-text">
										<p>We care deeply about our work and we know you will notice and appreciate the care we put into each project.</p>
									</div>
								</li>
								<li data-scroll>
									<div class="way-text">
										<p>We like to see our clients happy and content, and we strive to deliver the best experience.</p>
									</div>
								</li>
								<li data-scroll>
									<div class="way-text">
										<p>Every member has something to offer, and we are truly open when it comes to knowledge-sharing.</p>
									</div>
								</li>
								<li data-scroll>
									<div class="way-text">
										<p>We assure on-time delivery of projects with quality assurance.</p>
									</div>
								</li>
								<li data-scroll>
									<div class="way-text">
										<p>In order to stay fresh, our staff is constantly updating its knowledge in terms of skills and technology.</p>
									</div>
								</li>

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
  name: 'NuxtError'
}
</script>

<style lang="scss">
 .abouts-section-5.v2{ padding: 200px 0; position: relative;
	.the-multia-way-block{ display: flex; align-items: center; justify-content: center;
		.the-multia-way-inner{ max-width: 1088px; width: 100%; display: flex; align-items: flex-start;
			.left-colum{ width: 448px;  min-width: 448px; display: block;
				 .way-title{ position: sticky; top: 100px; padding-right: 16px;;
					h2{@include  H2; font-style: italic;   color: $lightyellow; font-size: $h2-laptop-fs; }
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
								p{@include  H4;  font-size: $h4-laptop-fs;   margin: 0px; padding: 0px; color: $lightyellow ; }
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
