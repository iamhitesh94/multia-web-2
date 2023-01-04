<template>
  <div class="home-banner">
	<div class="container">
		<div class="banner-text-home">
			<h1 v-if="headerLines">
				<div v-for="(line, idx) in headerLines" v-bind:key="idx" class="hidden-line"><span v-bind:class="{'white': line.isWhilteText,}" >{{line.line}}</span></div>
			</h1>
			<div class="explore-link">
				<a href="#">Scroll to explore</a>
			</div>
		</div>	
	</div>
  </div>
</template>

<script>
export default {
	name: 'BannerHome',
	props:{
		headerLines:[]
	}
}
</script>

<style lang="scss">
 .home-banner{
	.banner-text-home{
		position: relative;
		min-height: 100vh; padding: 200px 0 206px 0;
		.explore-link{
			position: absolute; right: 0px; bottom: 166px;
			a{
				color:$gyay555555;
				font-size: 20px;	
				line-height: 140%;
				font-family: "freight-display-pro",serif;
				font-style: italic;
				&:hover{ color: $white; }
			}
		}
		h1{
			@include  H1;
			font-size: $h1-laptop-fs; 
			color: $gyay555555;
			font-family: "freight-display-pro",serif;
			line-height: 1;
			.hidden-line{
				position: relative;
				display: block;
				overflow: hidden;
			}
			span{
				display: block; margin-top: -2%; padding: 0 0 2% ;
				transform: translate3d(0, -120%, 0);
    			transition: transform .9s cubic-bezier(0.23, 1, 0.32, 1);
			}
			span.white{
				color: $white;
				font-style:italic;
			}
			 
		}
		
	}	
 }
 html.is-ready .home-banner .banner-text-home h1 span{ transition-delay: 0s; transform: translate3d(0, 0, 0);}
  html.is-ready .home-banner .banner-text-home h1 .hidden-line:nth-child(2) span{ transition-delay: 0.135s; }
    html.is-ready .home-banner .banner-text-home h1 .hidden-line:nth-child(3) span{ transition-delay: 0.27s; }
 @media (min-width: 1600px) and (max-width: 2100px) {
.home-banner .banner-text-home{padding: 220px 0 150px 0; }
.home-banner .banner-text-home h1{font-size:$h1-desktop-fs;  }
.home-banner .banner-text-home .explore-link{ bottom: 197px; }			 
}
</style>
