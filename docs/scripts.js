$(document).ready(function(){
	
	$("#address-form").on("submit", function(){
		$address = $("#address-field").val();
		$name = $("#name-field").val();
		
		$.ajax({
			url: "https://formspree.io/theo@postary.com", 
			method: "POST",
			data: {message: "Address sign up name ( " + $name + " )" + $address},
			dataType: "json"
		});
		
		$("#name-insert").html($name);
		$("#initial").hide();
		$("#complete").show();
		
		return false;
	});
});