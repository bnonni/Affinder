//Main JavaScript Code
$(document).ready(function(){
    $('.readmore').on('click', showBlog);
    $('.readless').on('click', hideBlog);
    $('.scroll').jscroll();
});


function showBlog(){
    event.preventDefault();
    $('#show-this-on-click').slideDown(2); 
    $('.readmore').hide();
    $('.readless').show();
}

function hideBlog(){
    $('.hide').slideUp();
    $('.readmore').show();
}

// function validateForm(){
//    event.preventDefault();
//    console.log('work');
//    var ok = $('.parsley-error').length === 0;
// }