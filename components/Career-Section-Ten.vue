<template>
	<div class="career-section-10">
		<div class="container">
			<div class="faq-block">
				<h2 class="coman-effect" data-scroll>{{title}}</h2>
				<div class="acc-block coman-effect-delay-2" data-scroll>
					<div class="accordion" role="tablist">
						<b-card v-for="(faq, inx) in faqs" :key="inx" no-body>
							<b-card-header header-tag="header"  role="tab">
								<b-button v-b-toggle="`accordion-${inx+1}`" block >{{faq.question}}</b-button>
							</b-card-header>
							<b-collapse :id="`accordion-${inx+1}`" visible accordion="my-accordion" role="tabpanel">
								<b-card-body>
									<b-card-text>
										{{faq.answer}} 
									</b-card-text>
								</b-card-body>
							</b-collapse>
						</b-card>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CareerFaqs',
	props:{
		title:{
			type: String,
			default(){
				return ""
			}
		},
		faqs:{
			type: Array,
			default(){
				return []
			}
		},
	} 
}
</script>

<style lang="scss">
.career-section-10{ 
	padding: 0 0 0px 0;
	.faq-block{
		max-width: 1095px;
		margin: 0 auto;
		display: block;
		width: 100%;

		 h2{
			@include laptopH2;
			width: 100%;
			text-align: center;
			color: $white;
		 }
		 .acc-block{
			margin: 112px 0 0 0;
			border-top: $gyay222222 solid 3px;
			.card{
				background: none;
				border: 0px;
				padding: 20px 0;
				border-bottom: $gyay222222 solid 3px ;

				.card-header{
					width: 100%;
					padding:0px 0;
					margin: 0px;
					border: 0;
					background: none;

					.btn-block{
						@include laptopH4;
						width: 100%;
						text-align: left;
						padding:40px 0;
						margin: 0px;
						background: none;
						border: 0px;
						color: $white;
						border-radius: 0px;
						box-shadow: none;
						position: relative;
						&.collapsed::after{ 
							position: absolute;
							right: 0px;
							top: 50%;
							content: '';
							width: 45px;
							height: 45px;
							margin: -22px 0 0 0;
							background: url(/assets/img/faq-plus.svg) no-repeat center center;
						 }
						 &.not-collapsed::after{ 
							position: absolute;
							right: 0px;
							top: 50%;
							content: '';
							width: 45px;
							height: 45px;
							margin: -22px 0 0 0;
							background: url(/assets/img/faq-minus.svg) no-repeat center center;
						 }

					}
				}
				.card-body{
					padding: 0 0 40px;;
					p{
						@include bodyText1;
						margin: 0px;
						padding: 0px;
					}
				}
			}
		 }
	}
}
</style>