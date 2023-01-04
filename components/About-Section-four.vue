<template>
	<div class="abouts-section-4">
		<div class="img"  data-scroll  >
			<span  :style="{ backgroundImage: `url(${image.sourceUrl})` }"  data-scroll data-scroll-speed="2" ></span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AboutImageSec',
	props:{
		image:{
			type: Object ,
			default() {
				return {}
			}
		},
	}
}
</script>

<style lang="scss">
 .abouts-section-4{ position: relative;
	.img{ overflow: hidden; width: 100%; display: block; position: relative; min-height: 723px;
		span{ display: block; width: 100%; position: absolute; left: 0px; top: -200px;  bottom: -200px;  background-position: center center; background-size: cover; background-repeat: no-repeat;  border-radius: 0px 0 0; overflow: hidden;   }
	}
 }

</style>
