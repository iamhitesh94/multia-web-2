<template>
	<div class="team-section-2" v-html="generate_member_html(members)">
	</div>
</template>

<script>
export default {
	name: 'TeamMembersSec',
	props:{
		members:{
			type:Array,
			default(){
				return []
			}
		}
	},
	methods:{
		generate_member_html(members){
			let html =  '';
			html =  '';
			let fiveTeamBlk = false;
			let fiveTeamBlkDone = false;
			let fiveTeamNo = 0;
			let memnerNo = 0;
			let leftRightCount = 1;
			members.forEach(element => {
				memnerNo = memnerNo + 1;
				if(element.style === "dual"){
					let linkedInLink = '';
					if(element.linkedinLink !== ''){
						linkedInLink = '<a href="'+element.linkedinLink+'" target="_blank"><i></i> <span>linkedin</span></a>';
					}
					let instaLink = '';
					if(element.instagramLink !== ''){
						instaLink = '<a href="'+element.instagramLink+'" target="_blank"><i></i> <span>INSTAGRAM</span></a>' ;
					}
					html +=  '<div class="full-width-block first-row"><div data-scroll class="left-img-team coman-effect"><span style="background-image: url('+element.image.sourceUrl+')"></span></div><div data-scroll class="team-box-data coman-effect"><div class="team-box-top"><h2>'+element.name+'</h2><p>'+element.designation+'</p></div><div class="team-box-bottom"><div class="text">'+element.content+'</div><div class="social-links">'+linkedInLink+instaLink+'</div></div></div><div data-scroll class="right-img-team coman-effect"><span style="background-image: url('+element.secondImage.sourceUrl+')"></span></div></div>';
				}else if(!fiveTeamBlkDone){
					if(!fiveTeamBlk){
						html += '<div class="container"><div class="team-devloper-block">';
						fiveTeamBlk = true;
					}
					fiveTeamNo = fiveTeamNo + 1;
					if(fiveTeamNo === 1){
						html += '<div class="team-devloper-block-inner"><div class="devloper-left">';
					}else if(fiveTeamNo === 2){
						leftRightCount = leftRightCount + 1;
					}else if(fiveTeamNo === 3){
						html += '<div class="devloper-right">';
					}else if(fiveTeamNo === 4){
						leftRightCount = leftRightCount - 1;
					}else if(fiveTeamNo === 5){
						html += '<div class="team-devloper-block-center">';
					}
					
					html += '<div data-scroll class="devloper-box-'+leftRightCount+' coman-effect"><div class="img" style="background-image: url('+element.image.sourceUrl+')"><img src="'+element.image.sourceUrl+'" alt=""></div><div class="designation-blk"><h4>'+element.name+'</h4><p>'+element.designation+'</p></div><div class="text-team"><div class="text">'+element.content+'</div><div class="social-links"><NuxtLink to="/"><i></i> <span>linkedin</span></NuxtLink><NuxtLink to="/"><i></i> <span>instagram</span></NuxtLink></div></div></div>';
					
					if(fiveTeamNo === 2 || fiveTeamNo === 5){
						html += "</div>";
					}else if(fiveTeamNo === 4){
						html += "</div></div>";
					}
					if(fiveTeamNo === 5 || memnerNo === members.length){
						fiveTeamNo = 0;
						html += '</div></div>';
						fiveTeamBlk = false;
						fiveTeamBlkDone = true;
					}
				}else{
					let classNm = '';
					if(memnerNo === 8){
						classNm = 'designer-block';
					}else if(memnerNo === 12){
						classNm = 'graphic-designer-block';
					}
					if(!fiveTeamBlk){
						html += '<div class="container"><div class="team-devloper-block '+classNm+' ">';
						fiveTeamBlk = true;
					}
					fiveTeamNo = fiveTeamNo + 1;
					if(fiveTeamNo === 1){
						html += '<div class="team-devloper-block-inner"><div class="devloper-left">';
					}else if(fiveTeamNo === 2){
						html += '<div class="devloper-right">';
					}else if(fiveTeamNo === 3){
						html += '<div class="team-devloper-block-center">';
					}

					console.log(memnerNo+"======="+element.name)

					if(memnerNo === 8 || memnerNo === 13){
						leftRightCount = 2;
					}else{
						leftRightCount = 1;
					}

					html += '<div data-scroll class="devloper-box-'+leftRightCount+' coman-effect"><div class="img" style="background-image: url('+element.image.sourceUrl+')"><img src="'+element.image.sourceUrl+'" alt=""></div><div class="designation-blk"><h4>'+element.name+'</h4><p>'+element.designation+'</p></div><div class="text-team"><div class="text">'+element.content+'</div><div class="social-links"><NuxtLink to="/"><i></i> <span>linkedin</span></NuxtLink><NuxtLink to="/"><i></i> <span>instagram</span></NuxtLink></div></div></div>';
					
					if(fiveTeamNo === 1){
						html += "</div>";
					}else if(fiveTeamNo === 2){
						html += "</div></div>";
					}
					
					if(fiveTeamNo === 3){
						html += '</div>';
					}
					
					if(fiveTeamNo === 3 || memnerNo === members.length){
						fiveTeamNo = 0;
						fiveTeamBlk = false;
						html += '</div></div>';
					}

				}
			});
			return html
		}
	}
}
</script>

<style lang="scss">
.team-section-2{ padding: 0 0 129px;}
.full-width-block.first-row{ justify-content: space-between; padding: 0 0 0 4.4vw; display: flex;  
	.left-img-team{
		width: 21.1vw; padding: 12.5vw 0 0 0; 
		span{ 
		 width: 100%; display: block; padding: 127.30% 0 0 0;
		 background-position: center center; background-size: cover; background-repeat: no-repeat;	
		}
	}
	.right-img-team{ margin-left: auto;
		width: 25.6vw; padding: 0vh 0 0 0; 
		span{
		 width: 100%; display: block; padding: 100% 0 0 0;
		 background-position: center center; background-size: cover; background-repeat: no-repeat;	
		}
	}
	.team-box-data{
		text-align: center;
		max-width: 582px; padding: 8.40vw 0 0 0;
		margin: 0 auto; display: block;
		.team-box-top{
			padding: 0 0 60px;
			h2{
				@include  laptopH2;
				color: $white; 
				padding: 0 0 60px;
			}
			p{
				@include  bodyText1;
				margin: 0px; padding: 0px;;
			}
		}
		.team-box-bottom{
			.text{ padding: 0 0;
				p{
				 margin: 0px; padding: 0px;	
				}
			}
			.social-links{
				padding: 60px 0 0 0;
				display: flex;
				align-items: center; 
				justify-content: center;
				a{ margin: 0 20px; display: flex ; align-items: center;  
					i{ display: inline-block; background: url(/assets/img/plus.svg) no-repeat center center; width: 17px; height: 17px; margin: 0 11px 0 0; }
					  color: $white; font-size: 18px; text-transform: uppercase;	
					  &:hover{ opacity: 0.5; }
				}
 			}
		}
	}
}
.team-devloper-block{  margin: 0 auto; display: block; max-width: 1088px;  width: 100%; 
	.team-devloper-block-inner{width: 100%; justify-content: space-between; display: flex;   
		.devloper-left{ display: flex; flex-direction: column; align-items: flex-start;    }
		.devloper-right{ padding: 195px 0 0 0; margin-left: 0px; display: flex; flex-direction: column; align-items: flex-end;    }
	}
	.devloper-box-1{
			width: 528px; display: block; padding: 90px 0 0 0;
			.img{ padding: 73.10% 0 0 0;  width: 100%; display: block; position: relative; background-position: center center; background-size: cover; background-repeat: no-repeat;   
				img{ width: 100%; display:none;}
			}
			.designation-blk{ padding: 30px 0 40px 0; 
				h4{ padding: 0 0 20px;; 
					@include laptopH4;
					color: $white;
				}
				p{ @include bodyText1; margin: 0px; padding: 0px;}
			}
			.text-team {
				opacity: 0;
				transition: all 0.3s ease-in-out;
				display: block;
				.text{
					padding: 0 0 40px;;
					p{
						margin: 0px; padding: 0px;
					}
				}
				.social-links{
					padding: 0px 0 0 0;
					display: flex;
					align-items: center; 
					justify-content: flex-start;
					a{ margin: 0 40px 0 0; display: flex ; align-items: center; 
						i{ display: inline-block; background: url(/assets/img/plus.svg) no-repeat center center; width: 17px; height: 17px; margin: 0 11px 0 0; }
						color: $white; font-size: 18px; text-transform: uppercase;	
						&:hover{ opacity: 0.5; }
					}
				}
			}
			&:hover{
				.text-team{
					opacity: 1;
				}
			}
		}
		.devloper-box-2{
			width: 416px; padding: 90px 0 0 0; display: block;
			.img{ padding: 140.86% 0 0 0;  width: 100%; display: block; position: relative; background-position: center center; background-size: cover; background-repeat: no-repeat;   
				img{ width: 100%; display:none;}
			}
			.designation-blk{ padding: 30px 0 40px 0; 
				h4{ padding: 0 0 20px;; 
					@include laptopH4;
					color: $white;
				}
				p{ @include bodyText1; margin: 0px; padding: 0px;}
			}
			.text-team {
				opacity: 0;
				transition: all 0.3s ease-in-out;
				display: block;
				.text{
					padding: 0 0 40px;;
					p{
						margin: 0px; padding: 0px;
					}
				}
				.social-links{
					padding: 0px 0 0 0;
					display: flex;
					align-items: center; 
					justify-content: flex-start;
					a{ margin: 0 40px 0 0; display: flex ; align-items: center; 
						i{ display: inline-block; background: url(/assets/img/plus.svg) no-repeat center center; width: 17px; height: 17px; margin: 0 11px 0 0; }
						color: $white; font-size: 18px; text-transform: uppercase;	
						&:hover{ opacity: 0.5; }
					}
				}
				
			}
			&:hover{
					.text-team{
						opacity: 1;
					}
				}
		}
		.team-devloper-block-center{ display: flex ; align-items: center; justify-content: center; }
} 
.full-width-block.second-row{ justify-content: space-between; padding: 200px  0 110px 4.4vw; display: flex;  
	.left-img-team{
		width: 21.1vw; padding: 0vw 0 0 0; 
		span{ 
		 width: 100%; display: block; padding: 127.30% 0 0 0;
		 background-position: center center; background-size: cover; background-repeat: no-repeat;	
		}
	}
	.right-img-team{ margin-left: auto;
		width: 25.6vw; padding: 19.097vw 0 0 0; 
		span{
		 width: 100%; display: block; padding: 100% 0 0 0;
		 background-position: center center; background-size: cover; background-repeat: no-repeat;	
		}
	}

	.team-box-data{
		text-align: center;
		max-width: 582px; padding: 8.40vw 0 0 0;
		margin: 0 auto; display: block;
		.team-box-top{
			padding: 0 0 60px;
			h2{
				@include  laptopH2;
				color: $white; 
				padding: 0 0 60px;
			}
			p{
				@include  bodyText1;
				margin: 0px; padding: 0px;;
			}
		}
		.team-box-bottom{
			.text{ padding: 0 0;
				p{
				 margin: 0px; padding: 0px;	
				}
			}
			.social-links{
				padding: 60px 0 0 0;
				display: flex;
				align-items: center; 
				justify-content: center;
				a{ margin: 0 20px; display: flex ; align-items: center;  
					i{ display: inline-block; background: url(/assets/img/plus.svg) no-repeat center center; width: 17px; height: 17px; margin: 0 11px 0 0; }
					  color: $white; font-size: 18px; text-transform: uppercase;	
					  &:hover{ opacity: 0.5; }
				}
 			}
		}
	}
}
.designer-block{
	.team-devloper-block-inner{
		.devloper-right{ padding: 484px 0 0 0; }
		.team-devloper-block-center{}
	}
	.team-devloper-block-center{ padding:  0 0 0 112px;  justify-content: flex-start;  }
}
.full-width-block.third-row{ justify-content: space-between; padding: 200px  4.4vw 110px 0vw; display: flex;  
	.left-img-team{
		width: 25.6vw; padding: 25.83vw 0 0 0; 
		span{ 
		 width: 100%; display: block; padding: 85.05% 0 0 0;
		 background-position: center center; background-size: cover; background-repeat: no-repeat;	
		}
	}
	.right-img-team{ margin-left: auto;
		width: 21.1vw; padding: 0vw 0 0 0; 
		span{
		 width: 100%; display: block; padding: 122.77% 0 0 0;
		 background-position: center center; background-size: cover; background-repeat: no-repeat;	
		}
	}

	.team-box-data{
		text-align: center;
		max-width: 582px; padding: 8.40vw 0 0 0;
		margin: 0 auto; display: block;
		.team-box-top{
			padding: 0 0 60px;
			h2{
				@include  laptopH2;
				color: $white; 
				padding: 0 0 60px;
			}
			p{
				@include  bodyText1;
				margin: 0px; padding: 0px;;
			}
		}
		.team-box-bottom{
			.text{ padding: 0 0;
				p{
				 margin: 0px; padding: 0px;	
				}
			}
			.social-links{
				padding: 60px 0 0 0;
				display: flex;
				align-items: center; 
				justify-content: center;
				a{ margin: 0 20px; display: flex ; align-items: center;  
					i{ display: inline-block; background: url(/assets/img/plus.svg) no-repeat center center; width: 17px; height: 17px; margin: 0 11px 0 0; }
					  color: $white; font-size: 18px; text-transform: uppercase;	
					  &:hover{ opacity: 0.5; }
				}
 			}
		}
	}
}
.team-devloper-block.graphic-designer-block{
	.devloper-left{
		padding: 19.79vw 0 0 0;
	}
	.devloper-right{ 
		padding: 0px;;
	 }
	 .team-devloper-block-center{ padding-right: 224px ; justify-content: flex-end;
		.devloper-box-1{ max-width: 415px;
			 .img{
				padding: 126.74% 0 0 0;
			 }
		}
	 }
}
</style>