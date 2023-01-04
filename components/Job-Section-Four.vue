<template>
	<!-- eslint-disable vue/no-v-html -->
	<div v-if="(formId !== '')" class="job-section-4">
		<div class="container">
			<div class="job-form-block">
				<div class="job-form-block-inner">
					<div data-scroll class="job-form-top coman-effect" v-html="formText">
					</div>
					<div data-scroll class="job-form-bottom coman-effect">
						<form action="" @submit.prevent="sendMessage">
							<input id="formid" type="hidden" :value="formId" />
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
												<option v-for="(position, inx) in formPositions" :key="inx" :value="position.title">{{ position.title }}</option>
											</select>
										</div>
									</div>
								</div>
								<div class="col-md-12">
									<div class="input-row">
										<div class="input-title">Website URL</div>
										<div class="input-box">
											<input name="your-website" type="text" class="input-text">
										</div>
									</div>
								</div>
								<div class="col-md-12">
									<div class="input-row">
										<div class="input-title">Message</div>
										<div class="input-box">
											<input name="your-message" type="text" class="input-text">
										</div>
									</div>
								</div>
								<div class="col-md-12">
									<div class="upload-block">
										<input id="actual-btn" name="attache-file" type="file" accept=".pdf,.doc,.docx" hidden />
										<label for="actual-btn">Attach file</label>
										<span id="file-chosen">*.doc, *.docx, *.pdf</span>
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
										<div class="form-msg-response"></div>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- eslint-enable vue/no-v-html -->
</template>

<script>
import axios from 'axios';
export default {
	name: 'JobForm',
	props: {
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
			default(){
				return []
			}
		}
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
				if(error){
					jQuery(".form-msg-response").text("Error occurred").addClass('success');
				}
			}).finally(() => {
			});
		},
	},
}
</script>

<style lang="scss">
.job-section-4 {
	padding: 0px 0 0px 0;

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
						justify-content: space-between;

						.radio-box {
							width: auto;
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
					}
					.form-msg-response{
						text-align: center;
						padding: 5px 0;
					}
					.form-msg-response.error{color: red;}
					.form-msg-response.success{color: $green16A15E;}
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
						
						.switch {
							input.error{
								border-color: red;
							}
						}
					
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

		}
	}
}
</style>