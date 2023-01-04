<template>
	<div class="Stories-section-1">
		<div class="container">
			<div class="Stories_block">
				<h1 v-if="lines">
					<div v-for="(line,inx) in lines" :key="inx" class="hidden-line"><span> {{line.line}} </span></div>
				</h1>
				<div v-if="content" class="coman-effect-inview" data-scroll v-html="content"></div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'JournalBanner',
	props:{
		content:{
			type: String,
			default(){
				return ''
			}
		},
		lines:{
			type: Array,
			default(){
				return []
			}
		}
	}
}


</script>

<style lang="scss">
.Stories-section-1 {
	padding: 200px 0 150px;

	.Stories_block {
		justify-content: space-between;
		text-align: center;
		flex-direction: column;
		display: flex;
		align-items: center;

		h1 {
			@include laptopH1;
			padding: 0 0 60px;
			color: $white;
			display: block;
			width: 100%;

			.hidden-line {
				position: relative;
				display: block;
				overflow: hidden;
				width: 100%;
			}

			span {
				display: block;
				padding: 0 0 10px;
				transform: translate3d(0, -120%, 0);
				transition: transform .9s cubic-bezier(0.23, 1, 0.32, 1);
			}
		}

		.right-text {
			max-width: 510px;

			p {
				margin: 0px;
				padding: 0;
			}
		}
	}

}

html.is-ready .Stories-section-1 .Stories_block h1 .hidden-line span {
	transition-delay: 0s;
	transform: translate3d(0, 0, 0);
}
</style>
