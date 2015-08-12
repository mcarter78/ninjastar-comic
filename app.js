$(document).ready(function(){

$('.lightbox_trigger').click(function(e){
    e.preventDefault();
    var image_href = $(this).attr("href");
    if ($('#lightbox').length > 0) {
        $('#content').html('<img src"' + image_href + '" />');
        $('#lightbox').show();
    } else {
        var lightbox =
        '<div id="lightbox">' +
        '<button class="btn btn-default" id="close">X</button>' +
        '<div id="content">' + 
        '<img src="' + image_href +'" />' +
        '</div>' +
        '</div>';
        $('body').append(lightbox);
    }
    
});

$(document).mouseup(function (event){
    var container = $("#lightbox");
    if (container.has(event.target).length === 0) {
    container.hide();
    }
});

});