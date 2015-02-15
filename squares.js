$(document).ready(function(){
	//var sqnum = prompt("Enter how many squares per grid you would like!")
	//addSquares([sqnum]);
	random();
		});

function addSquares(b) {
	for (i=0; i<b; i++) {
		$('.wrapper').append("<div class='row'>");

		for (c=0; c<b; c++) {
				$("<div class='square'></div>").appendTo('.row:last')
		$(".row").append("</div>");
		}
	}
	var fit = ((620/b)-2);
		$('.square').css({'height': fit+'px', 'width': fit+'px'});


}

//$('.square').mouseenter(function(){
   //$(this).addClass('highlight');
	//$('.square').mouseleave(function(){
	//$(this).removeClass('highlight');
//})
//});

$('.square').mouseenter(function(){
	$(this).css('highlight', random_color());
});


$("button").click(function(){
  $('.square').remove();
  var sqnum = prompt("Enter how many squares in the grid you would like!")
	addSquares([sqnum]);
});

 //var random_color =function() {
   // $(".square").hover(function() {
      //  color1 = (Math.floor(Math.random() * 256));
      //  color2 = (Math.floor(Math.random() * 256));
      //  color3 = (Math.floor(Math.random() * 256));
    
       // $(this).css("background-color","rgb("+ color1 + "," + color2 + "," + color3 + ")") ;
   // });

var random_color = function() {
 var r = function() { return Math.floor(Math.random()*256) };
  return "rgb(" + r() + "," + r() + "," + r() + ")";
}
};