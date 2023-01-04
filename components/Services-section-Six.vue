<template>
	<div class="services-section-6">
		<div class="container">
			<div class="about-quote-block ">
				<!-- eslint-disable vue/no-v-html -->
				<div class="about-quote-block-inner">
					<div class="left-colum-cus coman-effect " data-scroll>
						<h2 v-html="text"></h2>
					</div>
					<div class="right-colum-cus coman-effect-delay-4" data-scroll>
						<div v-if="image.sourceUrl" class="img">
							<span :style="{ backgroundImage: `url(${image.sourceUrl})` }"></span>
						</div>
						<h4  v-html="name"></h4>
					</div>
				</div>
				<!-- eslint-enable vue/no-v-html -->
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'ServiceInterationSec',
	props: {
		text: {
			type: String,
			default() {
				return ''
			}
		},
		name: {
			type: String,
			default() {
				return ''
			}
		},
		image: {
			type: Object,
			default() {
				return {}
			}
		}
	}
}


</script>

<style lang="scss">
#__layout>div>div>div.services-section-6 {
	background: $chremF3F1EC;
	padding: 198px 0 201px;


	.about-quote-block {
		max-width: 1088px;
		margin: 0 auto;
		display: block;
		width: 100%;

		.about-quote-block-inner {
			display: flex;
			justify-content: space-between;

			.left-colum-cus {
				width: 784px;

				h2 {
					@include laptopH2;
					color: $gyay121212;
				}
			}

			.right-colum-cus {
				width: 192px;

				.img {
					span {
						background-position: center center;
						background-repeat: no-repeat;
						background-size: cover;
						display: block;
						width: 100%;
						min-height: 255px;
						margin: 0 0 30px;
					}
				}

				h4 {
					@include laptopH4;
					color: $gyay121212;
				}
			}
		}
	}
}
</style>
