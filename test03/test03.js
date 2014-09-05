/* אודיה לוי 204467427 שמירה צ'רי 321046237*/

$(function(){
    $("#load").on('click', loadPage);
    $("#send").on('click', addComment);
                  });
    
function loadPage(){
        var text = $("#url-text").val();
        $('#display').attr('src', text);
}

function addComment(){
   if($('#comment-text').val() !== '') {
        var comment = $('#comment-text').val();
        $('#commentslist').append('<li>' + comment + '</li>');
        $('#comment-text').val(''); 
   }
}

     