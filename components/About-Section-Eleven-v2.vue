<template>
	<div class="abouts-section-11  ">
		  <div class="container">
				<div class="partnership-block v2 coman-effect-delay-2" data-scroll>
					<h2>Partnerships</h2>
					<div class="img">
						 <span :style="{ backgroundImage: `url(/assets/img/partnership-Image.jpg)` }"></span>
					</div>
					<div class="see-all-links">
					<NuxtLink   to="/"   class="primary-btn">work with us</NuxtLink>
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
.abouts-section-11.v2 { padding: 0 0 20px; }
.partnership-block.v2{ max-width: 1088px;  margin: 71px auto 0; display: block; position: relative;  
	h2{@include laptopH2; color: $lightyellow;font-style: italic; position: absolute; left: -3px; top: -83px; z-index: 3; }
	.img { 
		span { display: block; width: 100%; opacity: 0.7; min-height: 560px; position: relative; z-index: 1; background-position: center center; background-size: cover; background-repeat: no-repeat;    }
	}
	.see-all-links{ z-index: 2; position: absolute; left: 0px; top: 0px; padding: 0px; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; 
		a{ 
		 	color: $lightyellow;	
			 font-family: 'Sora-Light';
			 border-color:$lightyellow ;

			 &:hover{ border-color:$green16A15E ; color: $green16A15E; }
		}
	}
}
 
</style>
