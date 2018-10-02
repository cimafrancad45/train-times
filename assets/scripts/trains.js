//firebase init


// Initialize Firebase
var config = {
    apiKey: "AIzaSyATmmwzmGgG_-_2u4a8RJXbYE2K_qRRWcY",
    authDomain: "train-app-rcb2018.firebaseapp.com",
    databaseURL: "https://train-app-rcb2018.firebaseio.com",
    projectId: "train-app-rcb2018",
    storageBucket: "train-app-rcb2018.appspot.com",
    messagingSenderId: "234238897896"
};

firebase.initializeApp(config);

var database = firebase.database();

var train = [];

var trainList = function() {
    var trainObj = {
        train,
        time,
        minutes,
        interval
    }
}

database.ref().on("value", function(snapshot){
    console.log(snapshot.val());

train.push(snapshot.val());}