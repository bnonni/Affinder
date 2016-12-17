//Main JavaScript Code

$('.readmore').on('click', function(){
    event.preventDefault();
    $(this).next().slideToggle(400);
});

$('#affButton').on('click', function(){
    $('.leftSidePopOut1').slideToggle();
})

var similarWeb = "https://api.similarweb.com/v1/website/retailmenot.com/total-traffic-and-engagement/visits?api_key={c19048a701552d0e78c9562b42222d2b}&start_date=2016-10&end_date=2016-11&main_domain_only=false&granularity=monthly"

//var apiKey = 'c19048a701552d0e78c9562b42222d2b';

$.ajax({
        url: similarWeb,
        type: 'GET',
        success: function(data) {
            try{
                data.forEach(function(article1,index){
                    console.log(data);
                    })
                }catch(event){
                alert('Please refresh and try again.')
            }//end forEach
        }//end success function
    });//end ajax call

// function validateForm(){
//    event.preventDefault();
//    console.log('work');
//    var ok = $('.parsley-error').length === 0;
// }