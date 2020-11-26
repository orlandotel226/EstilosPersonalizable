$("body").css("background","#68DCFF");

var size="19";
var add_px = size + "px";

$("h1").css({
	"text-align" : "center",
	"font-size" : "65px",
	"font-family": "Hind Siliguri, sans-serif"
});

$("p").css({
	"text-align" : "center",
	"font-family": "Hind Siliguri, sans-serif",
	"position" : "relative",
	"top" : "230px",
	"font-size" : add_px
});


$("#more_size").css({
	"position" : "relative",
	"top" : "290px",
	"left" : "490px"
});


$("#less_size").css({
	"position" : "relative",
	"top" : "290px",
	"left" : "560px"
});

var count=0;
function increaseSize(){
	count++;
	var defect_size=parseInt(size,10);
	var increase_size=defect_size+count;
	var size_string=increase_size.toString();
	var size_adjust=size_string+"px";

	$("p").css({
	"text-align" : "center",
	"font-family": "Hind Siliguri, sans-serif",
	"position" : "relative",
	"top" : "230px",
	"font-size" : size_adjust
});
}

function decreaseSize(){
	count--;
	var defect_size=parseInt(size,10);
	var increase_size=defect_size+count;
	var size_string=increase_size.toString();
	var size_adjust=size_string+"px";

	$("p").css({
	"text-align" : "center",
	"font-family": "Hind Siliguri, sans-serif",
	"position" : "relative",
	"top" : "230px",
	"font-size" : size_adjust
});
}