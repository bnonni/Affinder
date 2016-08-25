//Main JavaScript Code
$(document).ready(function(){
    $('.readmore').on('click', showBlog);
    $('.readless').on('click', hideBlog);
    $('.readmore-two').on('click', showBlogTwo);
    $('.less').on('click', showBlogTwo);
    $('#submit-btn').parsley().on('click', validateForm);
})

function showBlog(){
    event.preventDefault();
    $('#show-this-on-click').slideDown(1); 
    $('.readmore').hide();
    $('.readless').show();
}
function hideBlog(){
    event.preventDefault();
    $('.hide').slideUp(1);
    $('.readmore').show();
}

function validateForm(){
   event.preventDefault();
   console.log('work');
   var ok = $('.parsley-error').length === 0;
}