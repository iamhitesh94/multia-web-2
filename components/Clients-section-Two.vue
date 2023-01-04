<template>
	<div class="Clients-section-2">
		  <div class="container">
				<div data-scroll class="Clients_barnd-list coman-effect-delay-2">
					<ul>
						<!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
						<li v-for="(logo, inx) in clientLogos" v-if="logo.image.sourceUrl" :key="inx">
							<div class="client-logo-block">
								<img :src="logo.image.sourceUrl" alt="">
							</div> 
						</li>
						<!-- eslint-enable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
					</ul>
				</div>
		  </div>
	</div>
</template>

<script>
export default {
	name: 'ClientLogosSec',
	props:{
		clientLogos:{
			type: Array,
			default(){
				return []
			}
		}
	}
}
</script>

<style lang="scss">
.Clients-section-2 {
	padding: 0 0 200px;;
	display: block;
	ul {
		display: flex;
		flex-wrap: wrap;
		border: $gyay222222 solid 3px;
		border-top: 0px;
		border-left: 0px;
		li { 
			width: 25%; padding: 25% 0 0 0; position: relative; border-top: $gyay222222 solid 3px;; border-left: $gyay222222 solid 3px;
			display: flex; align-items: center; justify-content: center;
			.client-logo-block{ display: flex ;align-items: center; justify-content: center; width: 100%; height: 100%; position: absolute; left: 0px; top: 0px;;   }
		}
 	}
}
</style>