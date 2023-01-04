<template>
	<div class="Clients-section-3">
		<div class="container">
			<div class="client-serve-block">
				<div data-scroll class="client-serve-top coman-effect">
					<h3>{{title}}</h3>
					<p>{{text}}</p>
				</div>
				<div data-scroll class="client-serve-bottom coman-effect-delay-2">
					<!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
					<ul v-for="(cols, colInx) in services" v-if="cols != 'Template_ClientsPage_Clientspageoption_serviceSecServices'" :key="colInx">
						<li v-for="(line, inx) in cols.column" :key="inx"><span>{{line.title}}</span></li>
					</ul>
					<!-- eslint-enable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ClientServicesSec',
	props:{
		title:{
			type: String,
			default(){
				return ''
			}
		},
		text:{
			type: String,
			default(){
				return ''
			}
		},
		services:{
			type: Array,
			default(){
				return []
			}
		}
	}
}
</script>

<style lang="scss">
#__layout > div > div > div.Clients-section-3{
	padding: 200px 0;
	background: $chremF3F1EC;
	.client-serve-block {
		max-width: 1100px;
		margin: 0 auto;
		display: block;
		width: 100%;
		color: $gyay222222;
		.client-serve-top {
			max-width: 670px;
			padding: 0 0 60px;;
			h3 {
				@include laptopH3;
				padding: 0 0 60px;;
			}
			p {
				@include bodyText1;
				color: $gyay121212;
			}
		}
	}
	.client-serve-bottom{ 
		border-top: $gyay555555 solid 1px ;
		width: 100%; display: flex ;
		padding: 60px 0 0 0;
		ul { 
			width: 100%;
			display: flex ;
			flex-direction: column;
			li {
				@include laptopH4;
				width: 100%;
				color: $gyay121212;
				line-height:1;
				letter-spacing: -0.5px;
			 + li{ margin: 36px 0 0 0;}
			}
			&:first-child{ min-width: 255px; margin: 0 40px 0 0;}
			&:nth-child(2){ min-width: 245px; margin: 0 40px 0 0;}
			&:nth-child(3){ min-width: 215px; margin: 0 40px 0 0;}
			&:nth-child(4){ min-width: 325px; margin: 0 0px 0 0;}
		}
	}
}
</style>