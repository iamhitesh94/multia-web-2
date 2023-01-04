<template>
  	<div class="home-latest-news-section">
	 	<div class="home-latest-news-outer">
			<!-- eslint-disable vue/no-v-html -->
			<div v-for="(journal, inx) in journals" :key="inx" class="letest-news-row">
				<div class="defult-title" v-html="combine_html(journal.journalOption.date,journal.journalOption.homePageListingTitle)"></div>
				<div class="hover-block">
					<div class="brand-slider-row">
						<div v-for="(slideTexts, inxslide) in journal.journalOption.homePageListingSlidingText" :key="inxslide" class="brand-slider-first" v-html="get_slide_html(slideTexts)"></div>
					</div>
				</div>
			</div>
			<!-- eslint-enable vue/no-v-html -->
		</div>
		<div class="see-all-links"><a :href="journalLink.url" :target="journalLink.target" class="primary-btn">{{journalLink.title}}</a></div>
  	</div>
</template>

<script>
export default {
  	name: 'HomeNews',
	props:{
		journalLink:{
			type: Object,
			default() {
				return {}
			}
		},
		journals:{
			type: Array,
			default() {
				return []
			}
		}
	},
	methods:{
		get_slide_html(slideTexts){
			let html = "";
			if(slideTexts.slide.length > 0){
				for(let i = 0; i < slideTexts.slide.length; i++){
					const slide = slideTexts.slide[i];
					if(slide.hasTextimage === 'Text'){
						html += '<div class="brand-title">'+slide.text+'</div>';
					}else{
						html += '<div class="brand-title"><img src="'+slide.image.sourceUrl+'" alt=""></div>';
					}
					
				}
			}
			return html;
		},
		combine_html(date, title){
			let formatedDate = '';
			if(date !== ''){
				formatedDate = new Date(date);
				let month = (formatedDate.getMonth()+1);
				month = month < 10 ? '0' + month : '' + month;
				let dateTxt = formatedDate.getDate();
				dateTxt = dateTxt < 10 ? '0' + dateTxt : '' + dateTxt;
				formatedDate = month+'/'+dateTxt;
				formatedDate = "<span class='date'>"+formatedDate+"</span>";
			}
			return formatedDate + title;
		}
	}
}
</script>

<style lang="scss">
.home-latest-news-section{ padding: 0 0 0px; 
	.home-latest-news-outer{ border-bottom:$gyay222222 solid 3px;}
	.see-all-links{  padding: 60px 0 0 0;
		a{ padding-top: 14px; }
	}
}
.letest-news-row{ padding: 54px 0; border-top:$gyay222222 solid 3px; position: relative; display: block; width: 100%;  
	.defult-title{ display: flex;align-items: center; font-family: "freight-display-pro",serif; justify-content: center;  font-size: $h3-laptop-fs; line-height: 1;   
		.date{ padding: 0 30px 0 0;   @include bodyText1; line-height: 1; color: $gyay555555;}
		span{ font-style: italic; }
	}
	.hover-block{ visibility: hidden; opacity: 0; transition: all 0.3s ease-in-out; position: absolute; left: 0px; top: 0px; height: 100%; display: flex; align-items: center; width: 100%; background: $black; }
		.brand-slider-row{ 
		--duration: 7s;
		width: 100vw;
		transition: all .2s ease-in-out;
		left: 0;
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		white-space: nowrap;
		animation: marquee calc(6 * var(--duration)) linear infinite;
		animation-play-state: paused;
		contain: layout;
		animation-direction: reverse;
			.brand-slider-first{ 
				display: flex; 
				align-items: center;
				animation: marquee calc(3 * var(--duration)) linear infinite;
				white-space: nowrap;
			
					.brand-title{display: flex; padding: 0 16px;  line-height: 1.2;    white-space: nowrap;   align-items: center; font-size:$h3-laptop-fs ; color: $white; 
					span{ 
						color: $white; 
						}
					}
			}	
	}
	&:hover  .hover-block{ opacity: 1; visibility:visible; }
}
@media (min-width: 1600px) and (max-width: 2100px) {
.home-latest-news-section { padding: 0 0 20px;}
}


:root {
	--lightDark: #121212;
	--deepDark: #000000;
	--animation-in: hover-up;
	--animation-out: unhover-up;
}
.letest-news-row {
  	will-change:background-position;
	background:linear-gradient(to bottom, var(--lightDark) 0%, var(--lightDark) 50%, var(--deepDark) 50%);
	background-size: 100% 200%;
	background-position: 0 0;
	--speed: 0.33s;
	--ease: cubic-bezier(0.415, 0.595, 0.320, 0.915);
	&.last {
		animation: var(--animation-out) forwards;
		animation-duration: var(--speed);
		animation-timing-function: var(--ease);
	}
	&:hover,
	&:focus {
		animation: var(--animation-in) forwards;
		animation-duration: var(--speed);
		animation-timing-function: var(--ease);
	}
	.defult-title { transition: all 0.3s ease-in-out;}
	&:hover .defult-title,
	&:focus .defult-title {
		opacity:0;
	}
	.hover-block {
		background:none;
	}
	@keyframes hover-up {
		to { background-position: 0 100%;}
	}
	@keyframes hover-down {
		to { background-position: 0 -100%;}
	}
	@keyframes unhover-up {
		from { background-position: 0 -100%;}
		to { background-position: 0 0;}
	}
	@keyframes unhover-down {
		from { background-position: 0 100%;}
		to { background-position: 0 0;}
	}
}
</style>