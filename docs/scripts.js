$(document).ready(function(){
	
	var enableExtraButtons = function(){
		$( "#email-field-wrap" ).animate({
			height: "50"
		}, 150, function() {
		});
		$("#email-field-wrap").fadeIn();
		$("#send-button").attr("disabled", false);
	}

	$("#address-field").on("input", function(){
		enableExtraButtons();
	});

	$("#address-form").on("submit", function(){
		$address = $("#address-field").val();
		$name = $("#name-field").val();
		$postcode = $("#post-code-field").val();
		$email = $("#email-field").val();

		$message = "Name: " + $name + ". Address: " + $address + " " + $postcode + ". Email: " + $email;
		console.log($message);
		$.ajax({
			url: "https://formspree.io/theo@postary.com", 
			method: "POST",
			data: { message: $message },
			dataType: "json"
		});
		
		$("#name-insert").html($name);
		$("#initial").hide();
		$("#complete").show();
		
		return false;
	});
});

