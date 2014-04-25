$(document).ready(function() {
	$( "#button" ).click(function() {
		$( this ).effect("highlight", 1000);
	});
});

$(document).ready(function() {
	$( "#one" ).click(function() {
		$( this ).effect("pulsate");
	});
	// $(".imageclick").click(function() {
	// 	$(this).aeImageResize({ height: 800, width: 800 });
	// });

	$(".zoom").jMagnify();
});


    
