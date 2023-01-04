<template>
  <div class="home-work-section">
	<div class="container">
		<div v-html="content" class="work-section-text" data-scroll></div>	
	</div>
	
  </div>
</template>

<script>
export default {
	name: 'HomeWork',
  	props:{
		content:[],
	} 
}
</script>

<style lang="scss">
   .home-work-section{ padding: 100px 0 200px 0; 

		.work-section-text{ 
				margin: 0 auto;
				 display: block; 
				 width: 100%; 
				 max-width: 642px; 
				 text-align: center;
				  
					h3{ 
						@include  H3; 
						font-size: $h3-laptop-fs; 
						 padding: 0 0 39px; 
						 color: $white; 
						 transform: translateY(50px); 
						 opacity: 0; 
						 transition: all 0.5s ease-in-out;   }
					p{ 
						transform: translateY(50px); 
						opacity: 0; 
						transition: all 0.5s ease-in-out; 
					 }
			&.is-inview{ 
				h3{ opacity: 1; transform: translateY(0); }
				p{ transition-delay: 0.5s; opacity: 1; transform: translateY(0); }
			}

		}
   }

@media (min-width: 1600px) and (max-width: 2100px) {
.home-work-section{ padding: 72px 0 200px 0; }	
.home-work-section .work-section-text h3{ padding: 0 0 39px;; }	 
}
</style>

