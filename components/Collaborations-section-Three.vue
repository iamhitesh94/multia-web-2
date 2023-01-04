<template>
	<div class="Collaborations-section-3">
		<div class="container">
			<div class="contact-form">
				<div data-scroll class="contact-form-tltle coman-effect">
					<!-- eslint-disable vue/no-v-html -->
					<h3 v-html="formTitle"></h3>
					<!-- eslint-enable vue/no-v-html -->
				</div>
				<div data-scroll class="contact-form-inner coman-effect">
					<form action="" @submit.prevent="sendMessage">
						<input id="formid" type="hidden" :value="formShotcode">
						<div class="row">
							<div class="col-md-12">
								<div class="input-row">
									<div class="input-title">Name</div>
									<div class="input-box">
										<input name="your-name" type="text" class="input-text">
									</div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="input-row">
									<div class="input-title">Email</div>
									<div class="input-box">
										<input name="your-email" type="text" class="input-text">
									</div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="input-row">
									<div class="input-title">Phone </div>
									<div class="input-box">
										<input name="your-phone" type="text" class="input-text">
									</div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="input-row">
									<div class="input-title">Company</div>
									<div class="input-box">
										<input name="your-company" type="text" class="input-text">
									</div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="input-row">
									<div class="input-title">Country</div>
									<div class="input-box">
										<input name="your-country" type="text" class="input-text">
									</div>
								</div>
							</div>
							<div class="col-md-12">
								<div class="input-row">
									<div class="input-title-2">How can we help you?</div>
									<div class="redio-input-box">
										<div class="radio-box">
											<input id="one" type="radio" name="select-help" value="Projects">
											<label for="one">Projects</label>
										</div>
										<div class="radio-box">
											<input id="one-1" type="radio" name="select-help" value="Careers">
											<label for="one-1">Careers</label>
										</div>
										<div class="radio-box">
											<input id="one-2" type="radio" name="select-help" value="Partnerships">
											<label for="one-2">Partnerships</label>
										</div>
										<div class="radio-box">
											<input id="one-4" type="radio" name="select-help" value="Chat with us">
											<label for="one-4">Chat with us</label>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-12">
								<div class="input-row">
									<div class="input-title">Message</div>
									<div class="input-box">
										<textarea name="your-message" class="input-text"></textarea>
									</div>
								</div>
							</div>
							<div class="col-md-12">
								<div class="switech-row">
									<div class="switech-box">
										<label class="switch">
											<input name="data-is-safe" type="checkbox">
											<span class="slider round"></span>
										</label>
										<div class="text">Your data is safe with us</div>
									</div>
									<div class="switech-box">
										<label class="switch">
											<input name="subscribe" type="checkbox">
											<span class="slider round"></span>
										</label>
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
</template>

<script>
import axios from 'axios';
export default {
	name: 'CollaborationsFormSection',
	props: {
		formTitle: {
			type: String,
			default() {
				return ''
			}
		},
		formShotcode: {
			type: String,
			default() {
				return ''
			}
		}
	},
	methods: {
		async sendMessage() {
			this.loading = true;
			jQuery(".Collaborations-section-3 form input").removeClass("error");
			jQuery(".Collaborations-section-3 form textarea").removeClass("error");
			jQuery(".form-msg-response").text('').removeClass('error success');
			const form = document.querySelector(".Collaborations-section-3 form");
			const formData = new FormData(form);
			const formID = jQuery("#formid").val();
			await axios.post(process.env.baseUrl + 'wp-json/contact-form-7/v1/contact-forms/'+formID+'/feedback', formData, {
				headers: {
					"Content-Type": "multipart/form-data; boundary=1231321321332132",
				}
			}).then((reponse) => {
				if (reponse.data.status === 'validation_failed') {
					if (reponse.data.invalid_fields.length > 0) {
						for (let i = 0; i < reponse.data.invalid_fields.length; i++) {
							const field = reponse.data.invalid_fields[i];
							if (jQuery(".Collaborations-section-3 form input[name='" + field.field + "']").length > 0) {
								jQuery(".Collaborations-section-3 form input[name='" + field.field + "']").addClass('error')
							} else if (jQuery(".Collaborations-section-3 form textarea[name='" + field.field + "']").length > 0) {
								jQuery(".Collaborations-section-3 form textarea[name='" + field.field + "']").addClass('error')
							}
						}
					}
					jQuery(".form-msg-response").text(reponse.data.message).addClass('error');
				} else {
					jQuery(".Collaborations-section-3 form input[type='text']").val('');
					jQuery(".Collaborations-section-3 form input[type='checkbox']").prop('checked', false);
					jQuery(".Collaborations-section-3 form textarea").val('');
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
.Collaborations-section-3 {
	display: block;
	width: 100%;
	border-radius: 1500px 1500px 0 0;
	background: $chremF3F1EC;
	padding: 150px 0 0;

	.lets-form-block-inner {
		width: 100%;
		display: block;
		margin: 0 auto;
		max-width: 865px;
	}

	.lets-form-top {
		h3 {
			@include laptopH3;
			text-align: center;

			span {
				font-style: italic;
				display: block;
			}
		}
	}


	.contact-form {
		background: $chremF3F1EC;
		border-radius: 900px 900px 0 0;
		min-height: 0px;
		padding: 150px 0;

		.contact-form-tltle {
			text-align: center;

			h3 {
				@include laptopH3;

				span {
					display: block;
					font-style: italic;
				}
			}
		}

		.contact-form-inner {
			width: 862px;
			margin: 0 auto;
			padding: 32px 0 0 0;

			.input-row {
				width: 100%;
				position: relative;
				display: block;
				margin: 68px 0 0 0;

				.input-title {
					@include bodyText1;
					color: #808080;
					position: absolute;
					left: 0px;
					top: 0px;
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
								contain: '';
								content: '';
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
							content: '';
							background: $gyay121212;
							height: 10px;
							border-radius: 100px;
						}

						input:checked+label::before {
							border: 2px solid $gyay121212;
						}

						input:checked+label {
							color: $gyay121212 ;
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

			.switech-row {
				width: 100%;
				padding: 60px 0 0 0;
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

	.contact-form-block {
		width: 1120px;
		margin: 0 auto;
		display: block;
		padding: 200px 0;

		h2 {
			padding: 0 0 60px;
			;
			@include laptopH2;
			color: $white;

			span {
				font-style: italic;
			}
		}

		.offices-locations-block {
			border-top: $gyay222222 solid 1px;

			.country-row {
				@include bodyText2;
				width: 100%;
				color: $white;
				display: flex;
				padding: 30px 0;
				border-bottom: $gyay222222 solid 1px;

				.country-name {
					width: 335px;
					font-weight: bold;
					text-transform: uppercase;


				}

				.city-name-row {
					width: 335px;

					.city-name-sub {
						+.city-name-sub {
							padding: 30px 0 0 0;
						}
					}
				}

				.address {
					width: 448px;

					.address-sub {
						padding: 0px 0 0 0;

						+.address-sub {
							padding: 30px 0 0 0;
						}
					}
				}

				p {
					@include bodyText2;
					margin: 0px;
					padding: 0px;
				}


			}

		}

		.contact-links {
			padding: 60px 0 0 0;
			display: flex;
		}
	}

	.switch {
		position: relative;
		display: inline-block;
		width: 42px;
		height: 24px;
		margin: 0 10px 0 0;
		;
	}

	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		border: $gyay121212 solid 1px;
		-webkit-transition: .4s;
		transition: .4s;
	}

	.slider:before {
		position: absolute;
		content: "";
		height: 16px;
		width: 16px;
		left: 4px;
		bottom: 3px;
		background-color: $gyay121212;
		-webkit-transition: .4s;
		transition: .4s;
	}

	input:checked+.slider {
		background-color: $green16A15E;
		border-color: $green16A15E;

	}

	.switch input.error+.slider {
		border-color: red;
	}

	input:checked+.slider::before {
		background: $white;
	}

	input:focus+.slider {
		box-shadow: 0 0 1px $green16A15E;
	}

	input:checked+.slider:before {
		-webkit-transform: translateX(18px);
		-ms-transform: translateX(18px);
		transform: translateX(18px);
	}

	/* Rounded sliders */
	.slider.round {
		border-radius: 34px;
	}

	.slider.round:before {
		border-radius: 50%;
	}

	.switech-box .text {
		@include bodyText1;
		color: $gyay121212;
	}
}
</style>