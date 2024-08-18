// let quoteForm = document.getElementById('quote-request');

// emailjs.send('service_cg0jk8g', 'template_8wd71qi', quoteForm).then(
// 	function (response) {
// 		console.log('SUCCESS!', response.status, response.text);
// 	},
// 	function (error) {
// 		console.log('FAILED...', error);
// 	}
// );

jQuery('.quote-request').on('submit', function (event) {
	event.preventDefault(); // prevent reload

	var formData = new FormData(this);
	formData.append('service_id', 'service_cg0jk8g');
	formData.append('template_id', 'template_8wd71qi');
	formData.append('user_id', 'user_KFW3jzhfRBUCrpwEPx1Cn');

	jQuery
		.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
			type: 'POST',
			data: formData,
			contentType: false, // auto-detection
			processData: false, // no need to parse formData to string
		})
		.done(function () {
			alert('Your message has been sent!');
		})
		.fail(function (error) {
			alert('Oops... ' + JSON.stringify(error));
		});
});

jQuery('#contact-form').on('submit', function (event) {
	event.preventDefault(); // prevent reload

	var formData = new FormData(this);
	formData.append('service_id', 'service_cg0jk8g');
	formData.append('template_id', 'template_zef0ued');
	formData.append('user_id', 'user_KFW3jzhfRBUCrpwEPx1Cn');

	jQuery
		.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
			type: 'POST',
			data: formData,
			contentType: false, // auto-detection
			processData: false, // no need to parse formData to string
		})
		.done(function () {
			alert('Your message has been sent!');
		})
		.fail(function (error) {
			alert('Oops... ' + JSON.stringify(error));
		});
});
