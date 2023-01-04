<template>
	<div v-if="(blocks.length > 0)" class="services-section-3">
		<div class="container">
			<div class="services-listing">
				<div v-for="(block, inx) in blocks" :key="inx" class="services-row">
					<div class="left-col-services coman-effect" data-scroll>
						<div v-if="block.content" class="left-col-top" v-html="block.content">
						</div>
						<div v-if="block.points" class="services-listing-links">
							<ul v-for="(col, inxCol) in block.points" :key="inxCol" >
								<li v-for="(point, inxPoint) in col.column" :key="inxPoint">{{point.text}}</li>
							</ul>
						</div>
					</div>
					<div v-if="block.image.sourceUrl" class="right-col-services coman-effect-delay-4" data-scroll>
						<span :style="{ backgroundImage: `url(${block.image.sourceUrl})` }">
							<img :src="block.image.sourceUrl" alt="">
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'ServiceBlocks',
	props:{
		blocks:{
			type: Array,
			default(){
				return []
			}
		}
	}
}


</script>

<style lang="scss">
.services-listing {
	margin: 0 auto;
	display: block;
	width: 100%;
	max-width: 1200px;
	padding: 100px 0;

	.services-row {
		width: 100%;
		display: flex;
		padding: 100px 0;
		justify-content: space-between;

		.left-col-services {
			width: 640px;
			display: block;

			.left-col-top {
				width: 100%;
				display: block;
				padding: 0 0 60px;
				border-bottom: $gyay222222 solid 3px;

				h3 {
					@include laptopH3;
					color: $white;
					padding: 0 0 60px;
				}

				p {
					margin: 0px;
					padding: 0px;
				}
			}

			.services-listing-links {
				display: flex;
				width: 100%;

				ul {
					display: block;
					width: 50%;
					margin-right: 0px;
					padding: 18px 0px 0 0;

					li {
						@include laptopH4;
						color: $white;
						padding: 33px 10px 0 0;
						line-height: 1;
						display: block;
					}
				}
			}
		}

		.right-col-services {
			margin: 0;
			max-width: 500px;
			width: 500px;

			span {
				width: 100%;
				display: block;
				border-radius: 300px;
				min-height: 704px;
				background-repeat: no-repeat;
				background-position: center center;
				background-size: cover;

				img {
					display: none;
					width: 100%;
				}
			}
		}

		&:nth-child(2n+0) {
			flex-direction: row-reverse;
			align-items: flex-start;

			.right-col-services {
				margin: 0;
				max-width: 500px;
				width: 500px;

				span {
					float: right;
					width: calc((100vw - 100%) / 2 + 100% + 0px);
					display: inline-block;
					border-radius: 0px;
					min-height: 0;
					padding: 30.62vw 0 0 0;
					background-repeat: no-repeat;
					background-position: center center;
					background-size: cover;

					img {
						display: none;
						width: 100%;
					}
				}
			}
		}
	}
}
</style>
