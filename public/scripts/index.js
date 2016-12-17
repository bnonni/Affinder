//Main JavaScript Code

$('.readmore').on('click', function(){
    event.preventDefault();
    $(this).next().slideToggle(screenLeft);
});

$('#affButton').on('click', () => {
    $('.leftSidePopOut1').slideToggle(screenLeft);
})

$('#newSitesDiv a').on('click', () => {
    console.log('...');
    $('#my_popup').show();
})

var mockEndPoint = 'https://webhose.io/search?token=ec896f02-e244-4b52-b58a-7f5f1b3fd557&format=json&q=%22Affiliate%20Marketing%22';

$.ajax({
        url: mockEndPoint,
        type: 'GET',
        success: function(data) {
            console.log(data);
            // try{
                $.each(function(article1,index){
                    })
                // }catch(event){
                // alert('Please refresh and try again.')
            }//end forEach
        }//end success function
    );//end ajax call

// function validateForm(){
//    event.preventDefault();
//    console.log('work');
//    var ok = $('.parsley-error').length === 0;
// }