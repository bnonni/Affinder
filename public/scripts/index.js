//Main JavaScript Code
$(document).ready(function(){
    $('#submit-btn').parsley().on('click', validateForm)
})

function validateForm(){
   event.preventDefault();
   $('form').parsley().on('field:validated', validateForm){
       var ok = $('.parsley-error').length === 0;
       $('.bs-callout-info').toggleClass('hidden', !ok);
       $('.bs-callout-warning').toggleClass('hidden', ok);
}}