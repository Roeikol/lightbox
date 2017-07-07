//click functions listeners
$('#gallery .image_link').on('click', openViewport);
$("#right_arrow").on('click', scrollRight);
$("#left_arrow").on('click', scrollLeft);
$('#view_port').on('click', removeViewport);

//open the viewport on picture click
function openViewport(event){
	event.preventDefault();
	$('#view_port').show();
	createBigImg();
}

function createBigImg(){
	var imgContainer = $('<div>').attr('id', 'img_container');
	var bigImg = $('<img>').attr({
		"class":"big_image",
		"src":$(event.target).attr("src"),
		"alt":$(event.target).attr("alt"),
		"title":$(event.target).attr("title")
	});
	var imageDescription = $('<p>').text($(event.target).attr("title"));
	addImgToViewport(imgContainer, bigImg, imageDescription);
}

function addImgToViewport(imgContainer, bigImg, imageDescription){
	$('#view_port').append(imgContainer);
	$('#img_container').append(bigImg);
	$('#img_container').append(imageDescription);
}

//hide viewport when background is clicked
function removeViewport(event){
	$('#img_container').remove();
	$('#view_port').hide();
}

//scrollbar move right when right arrow is clicked  
function scrollRight(event){
	$('#gallery').animate({
	scrollLeft: ($('#gallery').scrollLeft() + 200)});
}

//scrollbar move right when right arrow is clicked
function scrollLeft(event){
	$('#gallery').animate({
	scrollLeft: ($('#gallery').scrollLeft() - 200)});
}