var imgContainer = $('<div>').attr('id', 'img_container');
var img = $('<img>');
var title = $('<p>');

$('#gallery a').click(openViewport);
$("#right_arrow").on('click', scrollRight);
$("#left_arrow").on('click', scrollLeft);

//open the viewport on picture click
function openViewport(e){
	event.preventDefault();
	$('#view_port').show();
	var imageLink = $(event.target).attr("src");
	var imageTitle = $(event.target).attr("alt");

	var newImg = img.attr("src", imageLink);
	$('#view_port').append(imgContainer);
	$('#img_container').append(newImg);

	title.text(imageTitle);
	$('#img_container').append(title);
}
//hide viewport when background is clicked
$('#view_port').click(function(event){
	$('#view_port').hide();
})

//scrollbar move right when right arrow is clicked  
function scrollRight(event){
	console.log("f");
	$('#gallery').animate({
	scrollLeft: ($('#gallery').scrollLeft() + 200)});
}
//scrollbar move right when right arrow is clicked
function scrollLeft(event){
	$('#gallery').animate({
	scrollLeft: ($('#gallery').scrollLeft() - 200)});
}