<template>
	<div class="job-section-3">
		<div class="container">
			<!-- eslint-disable vue/no-v-html -->
			<div class="job-skill-outer">
				<div v-if="(skillTitle != '' || skillText != '' || skills.length > 0)" class="job-skill-block">
					<div data-scroll class="job-skill-top coma n-effect">
						<h3 v-if="skillTitle != ''">{{skillTitle}}</h3>
						<p v-if="skillText != ''">{{skillText}}</p>
					</div>
					<div v-if="(skills.length > 0)" data-scroll class="job-skill-bottom coman-effect">
						<div v-for="(skill, inx) in skills" :key="inx" class="job-skill-box" v-html="skill.content"></div>
					</div>
				</div>
				<div v-if="(offerTitle != '' || offerText != '')" class="job-skill-block">
					<div data-scroll class="job-skill-top coman-effect">
						<h3  v-if="(offerTitle != '')">{{offerTitle}}</h3>
						<p  v-if="(offerText != '')">{{offerText}}</p>
					</div>
				</div>
				<div v-if="(proccessTitle != '' || proccess.length > 0)" class="job-skill-block">
					<div data-scroll class="job-skill-top coman-effect">
						<h3>{{proccessTitle}}</h3>
					</div>
					<div data-scroll class="job-skill-bottom coman-effect">
						<div v-for="(step, inx) in proccess" :key="inx" class="job-skill-box" v-html="step.step"></div>
					</div>
				</div>
				<div v-if="(applyTitle != '' || applyText != '')" class="job-skill-block">
					<div data-scroll class="job-skill-top coman-effect">
						<h3 v-if="applyTitle != ''">{{applyTitle}}</h3>
						<p v-if="applyText != ''">{{applyText}}</p>
					</div>
				</div>
			</div>
			<!-- eslint-enable vue/no-v-html -->
		</div>
	</div>
</template>

<script>
export default {
	name: 'JobDetailSec',
	props:{
		skillTitle:{
			type: String,
			default(){
				return ''
			}
		},
		skillText:{
			type: String,
			default(){
				return ''
			}
		},
		skills:{
			type: Array,
			default(){
				return []
			}
		},
		offerTitle:{
			type: String,
			default(){
				return ''
			}
		},
		offerText:{
			type: String,
			default(){
				return ''
			}
		},
		proccessTitle:{
			type: String,
			default(){
				return ''
			}
		},
		proccess:{
			type: Array,
			default(){
				return []
			}
		},
		applyTitle:{
			type: String,
			default(){
				return ''
			}
		},
		applyText:{
			type: String,
			default(){
				return ''
			}
		}
	}
}
</script>

<style lang="scss">
.job-section-3{ 
	margin: -15px 0 0 0;
	padding:0px 0  0px 0; 
	.job-skill-outer{
		max-width: 1099px;
		margin: 0 auto;
		display: block;
		width: 100%;

		.job-skill-block{
			padding: 200px    0;

			.job-skill-top{
				h3{
					@include laptopH3;
					margin: 0px;
					padding: 0px;
					color: $white;
				}
				p{ 
					@include bodyText1;	
					margin: 40px 0 0 0; 
					padding: 0px;
					color: $white;
				}
			}
			.job-skill-bottom{
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				
				.job-skill-box{
					 width: 420px;
					 padding: 90px 0 0 0;

					 h4{
						@include laptopH4;
						margin: 0px;
					    padding:0 0  40px;
					    color: $white;

					 }
					 p{
						@include bodyText1;	
						margin: 0px 0 0 0; 
						padding: 0px;
						color: $white;
					 }
				}
			}
			+ .job-skill-block{ border-top: $gyay222222 solid 3px;; }
		}
	}
}
</style>