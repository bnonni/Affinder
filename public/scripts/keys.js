  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBbvDFOaAkC7T3uMTHamWJPJXzI9sItIz0",
    authDomain: "affinder-e1943.firebaseapp.com",
    databaseURL: "https://affinder-e1943.firebaseio.com",
    storageBucket: "",
  };
  firebase.initializeApp(config);
    
    $(documentready(function(){
      var recordsAppReference = firebase.database();




      recordsAppReference.ref('').on('value'), function(results){
        


    results.forEach(function(res,i){
      var record = res.exportVal();

      $('body').append('<p>'+record.id);
    })
      }
    }))