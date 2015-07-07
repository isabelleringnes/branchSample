$(document).ready(function() {
	$(".button").click(function() {
		$("#perfect").toggle();
		$("p").toggle();
		$("h1").slideUp(2000);
     	});
	$("h2").fadeIn(4000);
		});

$(".headline").click(function() {
$(".headline").animate( {
	opacity: 0.25,
	width: "70%",
	
} , 2000 );


$(".bottom").click(function() {
	$("body").show();
});
		
});


function myFunction() {
    alert("What is wrong with you?!");

}