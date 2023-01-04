<template>
	<div class="intership-section-6">
		<div class="container">
			<div class="job-form-block">
				<div class="job-form-block-inner">
					<!-- eslint-disable vue/no-v-html -->
					<div data-scroll class="job-form-top coman-effect">
						<h2 v-html="formTitle"></h2>
						<p v-html="formText"></p>
					</div>
					<!-- eslint-enable vue/no-v-html -->
					<div data-scroll class="job-form-bottom coman-effect">
						<form action="" @submit.prevent="sendMessage">
							<input id="formid" type="hidden" :value="formId">
							<div class="row">
								<div class="col-md-12">
									<div class="input-row">
										<div class="input-title">Name</div>
										<div class="input-box">
											<input type="text" name="your-name" class="input-text">
										</div>
									</div>
								</div>
								<div class="col-md-6">
									<div class="input-row">
										<div class="input-title">Email</div>
										<div class="input-box">
											<input type="text" name="your-email" class="input-text">
										</div>
									</div>
								</div>
								<div class="col-md-6">
									<div class="input-row">
										<div class="input-title">Phone </div>
										<div class="input-box">
											<input type="text" name="your-phone" class="input-text">
										</div>
									</div>
								</div>
								<div class="col-md-6">
									<div class="input-row">
										<div class="input-title">Country</div>
										<div class="input-box">
											<input type="text" name="your-country" class="input-text">
										</div>
									</div>
								</div>
								<div class="col-md-6">
									<div class="input-row">
										<div class="input-box">
											<select name="job-position" class="select">
												<option value="">Job Position</option>
												<option v-for="(position, inx) in formPositions" :key="inx" :value="position.title">{{position.title}}</option>
											</select>
										</div>
									</div>
								</div>
								<div class="col-md-12">
									<div class="input-row">
										<div class="input-title">Website URL / LinkedIn Pofile</div>
										<div class="input-box">
											<input name="your-website" type="text" class="input-text">
										</div>
									</div>
								</div>
								<div class="col-md-12">
									<div class="upload-block left-align">
										<input id="actual-btn" name="attache-file" type="file" accept=".pdf,.doc,.docx" hidden />
										<label for="actual-btn">Attach file</label>
										<span id="file-chosen">*.doc, *.docx, *.pdf</span>
									</div>
								</div>
								<div class="col-md-12">
									<div class="input-row">
										<div class="input-title">Tell us about your educational background (college &
											degree)</div>
										<div class="input-box">
											<input name="educational-background" type="text" class="input-text">
										</div>
									</div>
								</div>
								<div class="col-md-12">
									<div class="input-row checkbox-row">
										<div class="input-title-2">How would you like to work with us?</div>
										<div class="redio-input-box">
											<div class="radio-box">
												<input id="one" type="radio" name="select-work-type" value="Remote">
												<label for="one">Remote</label>
											</div>
											<div class="radio-box">
												<input id="one-1" type="radio" name="select-work-type" value="Hybrid">
												<label for="one-1">Hybrid</label>
											</div>
											<div class="radio-box">
												<input id="one-2" type="radio" name="select-work-type" value="At Multia">
												<label for="one-2">At Multia</label>
											</div>

										</div>
									</div>
								</div>
								<div class="col-md-12">
									<div class="input-row checkbox-row-2">
										<div class="input-title-2">Please tell us what time period you would like to
											intern for?</div>
										<div class="redio-input-box">
											<div class="radio-box">
												<input id="two-1" type="radio" name="time-period" value="3 Months">
												<label for="two-1">3 Months</label>
											</div>
											<div class="radio-box">
												<input id="two-2" type="radio" name="time-period" value="6 Months">
												<label for="two-2">6 Months</label>
											</div>

										</div>
									</div>
								</div>
								<div class="col-md-12">
									<div class="input-row">
										<div class="input-title">Why do you want to work with Multia?</div>
										<div class="input-box">
											<input type="text" class="input-text" name="why-work-multia">
										</div>
									</div>
								</div>
								<div class="col-md-12">
									<div class="input-row">
										<div class="input-title">Tell us about a brand that you admire and why. If you
											had a chance to change something about this brand, what would it be and why?
											(Upto 300 words)</div>
										<div class="input-box">
											<textarea class="input-text" placeholder="" name="brand-admire"></textarea>
										</div>
									</div>
								</div>
								<div class="col-md-12">
									<div class="input-row">
										<div class="input-title">Have you been referred to us by anyone? If so, please
											state their name and department?</div>
										<div class="input-box">
											<textarea class="input-text" name="referred"></textarea>
										</div>
									</div>
								</div>

								<div class="col-md-12">
									<div class="switech-row">
										<div class="switech-box">
											<label class="switch">
												<input type="checkbox" name="data-is-safe"> <span
													class="slider round"></span></label>
											<div class="text">Your data is safe with us</div>
										</div>
										<div class="switech-box">
											<label class="switch">
												<input type="checkbox" name="subscribe"> <span
													class="slider round"></span></label>
											<div class="text">Subscribe to our newsletter</div>
										</div>
									</div>
								</div>
								<div class="col-md-12">
									<div class="input-row">
										<div class="input-box submit-btn">
											<input type="submit" value="submit" class="primary-btn">
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	name: 'NuxtError',
	props: {
		formTitle: {
			type: String,
			default() {
				return ''
			}
		},
		formText: {
			type: String,
			default() {
				return ''
			}
		},
		formId: {
			type: String,
			default() {
				return ''
			}
		},
		formPositions:{
			type: Array,
			default() {
				return []
			}
		},
	},
	methods: {
		async sendMessage() {
			this.loading = true;
			jQuery(".job-form-block form input").removeClass("error");
			jQuery(".job-form-block form textarea").removeClass("error");
			jQuery(".form-msg-response").text('').removeClass('error success');
			const form = document.querySelector(".job-form-block form");
			const formData = new FormData(form);
			const formID = jQuery("#formid").val();
			await axios.post(process.env.baseUrl + 'wp-json/contact-form-7/v1/contact-forms/' + formID + '/feedback', formData, {
				headers: {
					"Content-Type": "multipart/form-data; boundary=1231321321332132",
				}
			}).then((reponse) => {
				if (reponse.data.status === 'validation_failed') {
					if (reponse.data.invalid_fields.length > 0) {
						for (let i = 0; i < reponse.data.invalid_fields.length; i++) {
							const field = reponse.data.invalid_fields[i];
							if (jQuery(".job-form-block form input[name='" + field.field + "']").length > 0) {
								jQuery(".job-form-block form input[name='" + field.field + "']").addClass('error')
							} else if (jQuery(".job-form-block form textarea[name='" + field.field + "']").length > 0) {
								jQuery(".job-form-block form textarea[name='" + field.field + "']").addClass('error')
							} else if (jQuery(".job-form-block form select[name='" + field.field + "']").length > 0) {
								jQuery(".job-form-block form select[name='" + field.field + "']").addClass('error')
							}
						}
					}
					jQuery(".form-msg-response").text(reponse.data.message).addClass('error');
				} else {
					jQuery(".job-form-block form input[type='text']").val('');
					jQuery(".job-form-block form input[type='checkbox']").prop('checked', false);
					jQuery(".job-form-block form textarea").val('');
					jQuery(".form-msg-response").text(reponse.data.message).addClass('success');
				}
			}).catch(error => {
				console.log("*****  " + error)
			}).finally(() => {
			});
		},
	},
}
</script>

<style lang="scss">
.intership-section-6 {
	padding: 200px 0;

	.job-form-block {
		padding: 200px 0;
		background: $chremF3F1EC;
		border-radius: 1000px 1000px 0 0;

		.job-form-block-inner {
			max-width: 864px;
			margin: 0 auto;
			display: block;

			.job-form-top {
				width: 100%;
				display: block;
				max-width: 645px;
				margin: 0 auto;
				text-align: center;

				h2 {
					@include laptopH2;
					padding: 0 0 60px;

					span {
						font-style: italic;
					}
				}

				p {
					@include bodyText1;
					margin: 0px;
					padding: 0px;
					;
					color: $gyay121212;
				}
			}

			.job-form-bottom {
				padding: 40px 0 0 0;

				.input-row {
					width: 100%;
					position: relative;
					display: block;
					margin: 51px 0 0 0;

					.input-title {
						@include bodyText1;
						color: #808080;
						position: absolute;
						left: 0px;
						top: 0px;
						pointer-events: none;
					}

					.input-title-2 {
						@include bodyText1;
						color: $gyay121212;
						display: block;
						padding: 0 0 30px;
					}

					.redio-input-box {
						display: flex;

						.radio-box {
							width: 25%;
							display: flex;
							align-items: center;

							input {
								padding: 0;
								height: initial;
								width: initial;
								margin-bottom: 0;
								display: none;
								cursor: pointer;
							}

							label {
								@include bodyText1;
								color: #808080;
								position: relative;
								cursor: pointer;
								margin: 0px;
								padding: 0 0 0 30px;

								&::before {
									position: absolute;
									contain: "";
									content: "";
									left: 0px;
									top: 0px;
									width: 20px;
									height: 20px;
									border: 2px solid #808080;
									border-radius: 100px;
									margin: 0px;
									top: 50%;
									margin: -10px 0 0 0;
								}
							}

							input:checked+label:after {
								position: absolute;
								left: 5px;
								width: 10px;
								top: 50%;
								margin: -5px 0 0 0;
								content: "";
								background: $gyay121212;
								height: 10px;
								border-radius: 100px;
							}

							input:checked+label::before {
								border: 2px solid $gyay121212;
							}

							input:checked+label {
								color: $gyay121212;
							}

							input.error+label::before {
								border-color: red;
							}
						}
					}

					.input-box {
						width: 100%;
						display: block;

						.input-text {
							@include bodyText1;
							width: 100%;
							display: block;
							background: none;
							border: 0px;
							box-shadow: none;
							border-bottom: 2px solid #808080;
							padding: 0 0 20px;
							color: #808080;
							resize: none;

							&:focus {
								border-color: $gyay121212;
								color: $gyay121212;
							}

						}

						.input-text.error {
							border-bottom-color: red;
						}

						.select {
							@include bodyText1;
							width: 100%;
							display: block;
							background: none;
							border: 0px;
							box-shadow: none;
							border-bottom: 2px solid #808080;
							padding: 0 0 20px;
							color: #808080;
							resize: none;
							border-radius: 0px;
							;
							height: auto;
							max-height: 53px;
							;

							&:focus {
								border: 0px;
								border-bottom: 2px solid #808080;
								border-color: $gyay121212;
								color: $gyay121212;
							}

						}
						.select.error {
							border-bottom-color: red;
						}
						&.submit-btn {
							display: flex;
							align-items: center;
							justify-content: center;

							.primary-btn {
								padding-top: 11px;
								border-color: $gyay121212;
								color: $gyay121212;
								background: none;
								width: auto;
								min-width: 0px;

								&:hover {
									border-color: $green16A15E;
									color: $green16A15E;
								}
							}
						}

						.form-msg-response {
							text-align: center;
							padding: 5px 0;
						}

						.form-msg-response.error {
							color: red;
						}

						.form-msg-response.success {
							color: $green16A15E;
						}
					}

					&.checkbox-row {
						margin: 45px 0 0 0;
					}

					&.checkbox-row-2 {
						margin: 50px 0 0 0;
					}
				}

				.switech-row {
					width: 100%;
					padding: 40px 0 0 0;
					display: flex;
					justify-content: center;

					.switech-box {
						display: flex;
						margin: 0 30px;
						align-items: center;

					}
				}

			}
		}


		.upload-block {
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 60px 0 0 0;

			label {
				margin: 0px;
				padding: 0 0 0 37px;
				border: 0px;
				;
				text-transform: uppercase;
				background: url(/assets/img/attech.svg) no-repeat left center;
				color: $gyay121212;
				text-transform: uppercase;
				font-size: 18px;
				line-height: 1;
				font-weight: 400;
				min-height: 22px;
				;
			}

			span {
				padding: 0 0 0 30px;
				;
				color: $gyay555555;
				font-weight: 400;
				font-size: 16px;
				line-height: 130%;
			}

			&.left-align {
				justify-content: flex-start;
				padding: 30px 0 0 0;
			}

		}
	}
}
</style>