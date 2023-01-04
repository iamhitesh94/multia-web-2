<template>
	<div class="services-section-4">
		<div class="container">
			<div class="how-we-can-title coman-effect " data-scroll>
				<h3 v-html="title"></h3>
			</div>
			<div v-if="(blocks.length > 0)" class="services-we-can">
				<div class="row">
					<div v-for="(block, inx) in blocks" :key="inx" :class="`col-md-4 coman-effect-delay-${inx+3}`" data-scroll>
						<div class="we-can-box">
							<div class="icon"><img src="/assets/img/eye-icon.svg" alt=""></div>
							<h4>Project Basis</h4>
							<p>For design requirements of predefined scope of work and timeline.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'ServiceWorkSec',
	props:{
		title:{
			type: String,
			default(){
				return ''
			}
		},
		blocks:{
			type: Array,
			default(){
				return []
			}
		},
	}
}
</script>

<style lang="scss">
#__layout>div>div>div.services-section-4 {
	background: $white;
	margin: -2px 0 0 0;
	padding: 200px 0;

	h3 {
		@include laptopH3;
		padding: 0 0 100px;
		text-align: center;

		span {
			font-style: italic;
		}

	}

	.services-we-can {
		max-width: 1095px;
		margin: 0 auto;
		display: block;

		.row {
			margin: 0 -40px;

			[class*="col-md-"] {
				padding: 0 40px;
			}
		}

		.we-can-box {
			width: 100%;
			display: block;
			text-align: center;
			color: $gyay121212;

			.icon {
				min-height: 110px;
				display: block;
			}

			h4 {
				@include laptopH4;
				display: block;
				padding: 0 0 30px;
			}

			p {
				@include bodyText1;
				margin: 0px;
				padding: 0;
				color: $gyay121212;
			}
		}
	}
}
</style>
