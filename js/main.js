//click functions listeners
$('#gallery .image_link').on('click', openViewport);
$("#right_arrow").on('click', scrollRight);
$("#left_arrow").on('click', scrollLeft);

//open the viewport on when picture is clicked
function openViewport(event){
	event.preventDefault();
	$('#view_port').show();
	createLargeImg();
}
//creates a large image from the picture clicked
function createLargeImg(){
	var imgContainer = $('<div>').attr('id', 'img_container');
	var largeImg = $(event.target).addClass("large_image");
	addImgToViewport(imgContainer, largeImg);
}
//display the large image in the viewport
function addImgToViewport(imgContainer, largeImg){
	$('#view_port').append(imgContainer);
	largeImg.clone().appendTo($('#img_container'));
	removeViewport(imgContainer, largeImg);
}

//hide viewport when background is clicked
function removeViewport(imgContainer, img){
	$('#view_port').on('click', function(){
		img.removeClass("large_image");
		imgContainer.remove();
		$('#view_port').hide();
	});
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