$(document).ready( function() {
		$('#send').click(function() {
			var firstname = $('input[name=firstname]').val();
			var lastname = $('input[name=lastname]').val();

			$.ajax({
				url: "./form.php",
				type: "POST",
				// data: "indeks="+firstname+lastname,
				data: {fName: firstname, lName: lastname},
				success: function(msg) {
					$("#return").text(msg);
				}
			});
		});
	});