<template>
	<!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
	<div class="Stories-section-2">
		<div v-if="sections" class="container">
			<div class="stores-nav-block  " data-scroll>
				<ul>
					<li v-for="(section, inx) in sections" v-if="section.selectCategory.count > 0" :key="inx" class="active">
						<a to="#"  @click="scrollToSec(section.selectCategory.slug)">{{section.selectCategory.name}}</a>
					</li>
				</ul>
			</div>
		</div>
		<div v-if="sections" class="Stories-catgory-listing-main">
			<div v-for="(section, inx) in sections" v-if="section.selectCategory.count > 0" :key="inx" class="Stories-catgory-outer">
				<div class="container">
					<div :id="section.selectCategory.slug" class="Stories-catgory-block">
						<div v-if="section.showSectionTitle" class="catory-title coman-effect" data-scroll>
							<h3>{{section.selectCategory.name}}</h3>
						</div>
						<div class="Stories-blocks-row">
							<div v-for="(post, postInx) in section.selectCategory.posts.nodes" v-if="postInx == 0" :key="postInx" class="row">
								<div class="col-md-12 coman-effect-delay-2" data-scroll>
									<div class="Stories-box big-box">
										<div v-if="post.featuredImage" class="img">
											<img :src="post.featuredImage.node.sourceUrl" :alt="post.featuredImage.node.title">
										</div>
										<div class="inner-text">
											<p>{{post.title}}</p>
											<div class="read-more-links">
												<NuxtLink :to="post.uri"><i> </i> Read more</NuxtLink>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div v-if="section.selectCategory.count > 1" class="row">
								<div v-for="(post, postInx) in section.selectCategory.posts.nodes" v-if="postInx > 0" :key="postInx" class="col-md-6 coman-effect" data-scroll>
									<div class="Stories-box">
										<div v-if="post.featuredImage" class="img">
											<img :src="post.featuredImage.node.sourceUrl" :alt="post.featuredImage.node.title">
										</div>
										<div class="inner-text">
											<p>{{post.title}}</p>
											<div class="read-more-links">
												<NuxtLink :to="post.uri"><i> </i> Read more</NuxtLink>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="load-more-btn coman-effect" data-scroll>
							<NuxtLink :to="section.selectCategory.uri">see all {{section.selectCategory.name}}</NuxtLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- eslint-enable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
</template>

<script>

export default {
	name: 'JournalSections',
	props: {
		sections: {
			type: Array,
			default() {
				return []
			}
		},
		lms:{
			type: Object,
			default() {
				return {}
			}
		}
	},
	methods:{
		scrollToSec(secID){
			this.lms.scrollTo('#'+secID)
		}
	}
}
</script>

<style lang="scss">
.Stories-section-2 {
	padding: 0px 0 0px;

	.stores-nav-block {
		max-width: 1088px;
		margin: 0 auto;
		display: block;
		width: 100%;
		overflow: hidden;

		ul {
			display: flex;
			align-items: center;
			border-bottom: $gyay222222 solid 3px;
			;
			transform: translate3d(0, 120%, 0);
			transition: transform .9s cubic-bezier(0.23, 1, 0.32, 1);
			opacity: 0;

			li {
				padding: 0 40px 0 0px;
				;

				a {
					display: flex;
					height: auto;
					padding: 0 0 15px;

					color: $gyay555555;
					text-transform: uppercase;
					font-size: 18px;
					line-height: 1;

					&:hover {
						color: $white;
					}

				}

				&.active {
					a {
						color: $white;
					}
				}
			}
		}
	}

	.Stories-catgory-outer {
		padding: 200px 0 200px;

		.catory-title {
			h3 {
				@include laptopH3;
				color: $white;
				padding: 0 0 60px;
			}
		}

		.row+.row {
			margin-top: 90px;
		}

		.Stories-box {
			width: 100%;
			display: block;

			.img {
				position: relative;
				padding: 60.09% 0 0 0;
				width: 100%;
				display: block;

				img {
					width: 100%;
					display: block;
					position: absolute;
					left: 0px;
					top: 0px;
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}

			.inner-text {
				padding: 30px 0 0 0;

				p {
					@include bodyText2;
					margin: 0px;
					padding: 0px;
					;

				}

				.read-more-links {
					padding: 30px 0 0 0;

					a {
						display: flex;
						align-items: center;

						i {
							display: inline-block;
							background: url(/assets/img/plus.svg) no-repeat center center;
							width: 17px;
							height: 17px;
							margin: 0 11px 0 0;
						}

						color: $white;
						font-size: 18px;
						text-transform: uppercase;

						&:hover {
							opacity: 0.5;
						}
					}
				}
			}

			&.big-box {
				.img {
					padding: 57.87% 0 0 0;

					img {}
				}
			}
		}

		.load-more-btn {
			display: flex;
			align-items: center;
			padding: 90px 0 0 0;

			a {
				display: flex;
				width: auto;
				height: 60px;
				padding: 12px 20px 10px;
				border: $white solid 1px;
				border-radius: 100px;
				;
				color: $white;
				text-transform: uppercase;
				font-size: 36px;
				line-height: 1.1;

				&:hover {
					color: $green16A15E;
					border-color: $green16A15E;
				}

			}
		}

		&:first-child {
			padding-top: 90px;
		}

		&:nth-child(2n+0) {
			background: $chremF3F1EC;

			.catory-title {
				h3 {
					color: $gyay121212;
				}
			}

			.Stories-box {
				width: 100%;
				display: block;

				.inner-text {
					p {
						color: $gyay121212;
					}

					.read-more-links {
						a {
							i {
								background: url(/assets/img/plus-black.svg) no-repeat center center;
							}

							color:$gyay121212;

							&:hover {
								opacity: 0.5;
							}
						}
					}
				}


			}

			.load-more-btn {
				a {

					color: $gyay121212;
					border-color: $gyay121212;

					&:hover {
						color: $green16A15E;
						border-color: $green16A15E;
					}
				}
			}
		}
	}
}

.Stories-catgory-block {
	max-width: 1088px;
	margin: 0 auto;
	display: block;
	width: 100%;
}

html.is-ready .stores-nav-block>ul {
	opacity: 1;
	transition-delay: 0.4s;
	transform: translate3d(0, 0, 0);
}
</style>
