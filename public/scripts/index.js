//Main JavaScript Code
$(document).ready( () => {
    $('.leftSidePopOut1').slideToggle(1000);
    console.log('loaded');
    AuthUser();
})

$('#crawlSitesDiv').on('click', () => {
    $('.crawlSitesDropDown').slideToggle(1000);
    setTimeout(() => {$('.crawlSitesDropDown section').html('Visiting page https://www.officialcouponcode.com' + '<p>' + 'Status code: 200' + '</p>' + 'Found 253 relative links on page' + '<p>' + 'Visiting page https://www.officialcouponcode.com/store/smartsource/'+ '<p>'+ 'Status code: 200' +'</p>' + 'Found 220 relative links on page'+ 'Visiting page https://www.officialcouponcode.com' + '<p>' + 'Status code: 200' + '</p>' + 'Found 253 relative links on page' + '<p>' + 'Visiting page https://www.officialcouponcode.com/store/smartsource/'+ '<p>'+ 'Status code: 200' +'</p>' + 'Found 220 relative links on page')}, 1000);})

function myFunction() {
    var popup = document.getElementById('myPopup');
    popup.classList.toggle('show');
}

$('.readmore').on('click', () => {
    event.preventDefault();
    $(this).next().slideToggle(screenLeft);
});

var webHose = 'https://webhose.io/search?token=ec896f02-e244-4b52-b58a-7f5f1b3fd557&format=json&q=%22affiliate%20marketing%22%20language%3A(english)%20performance_score%3A%3E0%20(site_type%3Anews%20OR%20site_type%3Ablogs)&ts=1479495594014';

$.ajax({
        url: webHose,
        type: 'GET',
        success: (data) => {
            console.log(data);
            try{
             $.each(data.posts, (i, item) => {
                var posts = {

                    headline : item.title,
                    imageUrl : item.urlToImage, 
                    description : item.description,
                    postUrl : item.url
                };   
                $('#title' + i).html(posts.headline);
                $('#postLink' + i).attr('href', posts.postUrl)

             })
                }catch(event){
                 alert('Please refresh and try again.')
            }//end .each
        }//end success function
});//end ajax call


//Google Authentication
function AuthUser(){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result){
            var user = result.user;
            console.log(user.displayName);
    }).catch(function (error){
        console.log(error);
    })
}

function SaveResults(user, isWinner) {
    var database = firebase.database();
    var userData = firebase.database().ref('/users/' + user).once('value').then(function(snapshot){
    });
}

// function validateForm(){
//    event.preventDefault();
//    console.log('work');
//    var ok = $('.parsley-error').length === 0;
// }