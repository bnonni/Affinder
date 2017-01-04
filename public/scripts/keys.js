  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBbvDFOaAkC7T3uMTHamWJPJXzI9sItIz0",
    authDomain: "affinder-e1943.firebaseapp.com",
    databaseURL: "https://affinder-e1943.firebaseio.com",
    storageBucket: "affinder-e1943.appspot.com",
  };
  firebase.initializeApp(config);

storeResults => {
  var database = firebase.database();
  var storageRef = storage.ref();
  var storage = firebase.storage();
}


    
//     $(document).ready(function(){
//       var recordsAppReference = firebase.database();
//    recordsAppReference.ref('records').on('value',function(results){
//       var allRecords = ref.exportVal();
//       allRecords.forEach(function(rec,index){
//         $('html').append("<p>"+rec.contact+"<br>"+rec.email+"<br>"+rec.phone+"<br>"+rec.publisher+"</p>");
// });
//     })
// });