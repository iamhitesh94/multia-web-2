<template>
	<div class="home-Transforming-section">
		<div class="container">
			<div class="Transforming-block">
				<a :href="lineLink.url">
					<!-- eslint-disable vue/no-v-html -->
					<div v-for="(line, idx) in lines" :key="idx" :class="`line-${idx+1}`" v-html="combine_html(line.lineText,line.hasIcon,line.icon)"></div>
					<!-- eslint-enable vue/no-v-html -->
				</a>
			</div>
		</div>
  	</div>
</template>
<script>
export default {
	name: 'HomeTransforming',
	props:{
		lines:{
			type: Array,
			default() {
				return []
			}
		},
		lineLink:{
			type: Object,
			default() {
				return {}
			}
		}
	},
	methods:{
		combine_html(text, hasIcon, icon){
			const arrowIcon = '<div class="hide-row"><i><img src="/assets/img/Arrow-line.svg" alt=""></i> <i><img src="/assets/img/Arrow-line.svg" alt=""></i> <i><img src="/assets/img/Arrow-line.svg" alt=""></i></div>';
			let newHtml = text.replace("%s", arrowIcon);
			if(hasIcon && icon != null){
				newHtml = newHtml.replace("#icon#", "<img src='"+icon.sourceUrl+"'>");
			}
			return newHtml;
		}
	}
}
</script>

<style lang="scss">
.home-Transforming-section{ padding: 0 0 200px; z-index: 1; position: relative;  }
 .Transforming-block{  justify-content: flex-start; display: flex; align-items: flex-start; flex-direction: column;  position: relative; 
	.line-1{ transition: all 0.3s ease-in-out ; border-top: solid 3px $gyay222222;  align-items: center;   display: flex; color: $gyay555555; font-size: 144px;line-height: 90%;
		padding: 22px 0 43px;	
		font-family: freight-display-pro, serif;
	}
	.line-2{ transition: all 0.3s ease-in-out ; border-top: solid 3px $gyay222222; border-bottom: solid 3px $gyay222222; align-items: center;   display: flex; color: $gyay555555; font-size: 144px;line-height: 90%;
	padding: 22px 0 43px;	
	font-family: freight-display-pro, serif;
		span.white{ font-style: italic; color: $white; }
	}
	.line-3{  border-bottom: solid 3px $gyay222222; align-items: center;   display: flex; color: $gyay555555; font-size: 144px;line-height: 90%;
		padding: 22px 0 43px;	
		font-family: freight-display-pro, serif;
		span.white{ font-style: italic; color: $white; }
	} 
	.hide-row{ max-width: 0px;overflow: hidden; padding: 0 0px;; display: flex; align-items: center; 
			transition: cubic-bezier(0.1, 0.7, 1.0, 0.1);
			 transition: max-width 1.5s, opacity 1.5s;;  
			i{  display: flex; 
				+ i{ margin: 0 0 0 10px; }
				&:last-child{  margin-right: 20px;}
			}
		}
	&:hover .hide-row{ max-width: 445px;  padding: 0 0px; opacity: 1; }
	&:hover .line-1 {
		.hide-row{ margin: 0 0px 0 0; }
	}
	&:hover .line-2 {
		.hide-row{ margin: 0 0px 0; }
	}
	&:hover .line-1{ width: 100%;} 
	&:hover .line-2{ width: 100%;} 
	&:hover .line-3{ width: 100%;} 
 }
  @media (min-width: 1600px) and (max-width: 2100px) {
.home-Transforming-section{ padding: 0 0 220px; }	
  .Transforming-block .line-1{ padding: 35px 0 47px; font-size: $h2-desktop-fs; }
  .Transforming-block .line-2{  padding: 35px 0 47px;  font-size: $h2-desktop-fs; }
  .Transforming-block .line-3{  padding: 35px 0 47px;  font-size: $h2-desktop-fs; }
  .Transforming-block .hide-row i img{ width: 150px;}
  .Transforming-block:hover .hide-row{ max-width: 490px; }

}
</style>
