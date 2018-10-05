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


//initial variables
var train = "";
var destination = "";
var firstTrain = "";
var frequency = "";

//snapshots
database.ref().on("value", function (snapshot) {
    console.log(snapshot.val())
});

$("#submit-button").on("click", function () {

    event.preventDefault()


    train = $("#train").val();
    destination = $("#destination").val();
    firstTrain = $("#first-train");
    frequency = $("#frequency").val();

    database.ref().set({
        train: train,
        destination: destintation,
        firstTrain: firstTrain,
        frequency: frequency
    })

});

