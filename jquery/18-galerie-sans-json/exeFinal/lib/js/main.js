function init()
{
	loadXML();	
}


function loadXML()
{
	$.get('datas/pictures.xml', renderThumbs,'xml');
}

function renderThumbs(data, textStatus, xhr)
{
	$(data).find('item').find('thumb').each(function(){
		var tempHTML = '<a href="#"><img src="'+$(this).text()+'" width="75" height="75" alt="" /></a>';
		$('.galerie_thumbnails .clear_both').before(tempHTML);
		// console.log($(this).find('a'));
		// console.log(showPreview);
	});
	$('.galerie_thumbnails a').on('click',showPreview);
}




function showPreview(e)
{
	e.preventDefault();
	console.log($(this).find('img').attr('src'));
}


init();


// <a href="images/photos/refraction_fullsize.jpg" title="Un nom à insérer ici pour la photo refraction"><img src="images/photos/refraction_thumbnail.jpg" width="75" height="75" alt="refraction" /></a>