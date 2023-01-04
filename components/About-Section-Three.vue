<template>
	<div class="abouts-section-3">
		<div class="container" >
			 <div class="about-quote-block" >
				<div class="text coman-effect" data-scroll>
					<p>“{{title}}”</p>
				</div>
				<div class="name coman-effect-delay-2" data-scroll>
					{{name}}
				</div>
			 </div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AboutQouteSection',
	props:{
		title:{
			type: String,
			default() {
				return ""
			}
		},
		name:{
			type: String,
			default() {
				return ""
			}
		},
	}
}
</script>

<style lang="scss">
 #__layout > div > div > div.abouts-section-3{ margin: -1px 0 0 0; padding: 201px 0; background: $white;
 .about-quote-block{ max-width: 976px; margin: 0 auto; display: block;  text-align: center; color: $gyay121212;
	.text { display: block; padding: 0 0 60px;;
 		p{ font-family: "freight-display-pro",serif; line-height: 110%; font-size: $h3-laptop-fs; margin: 0px; padding: 0px;  color: $gyay121212; }
	}
	.name{font-family: "freight-display-pro",serif; font-size: 36px;line-height: 46px;}
 }
 }

</style>
