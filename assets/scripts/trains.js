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
    console.log(snapshot.val());
    $("#train-table").append("<tr> <td>" + snapshot.val().train +
        "</td> <td>" + snapshot.val().destination +
        "</td> <td>" + snapshot.val().frequency +
        "</td> <td>" + "placeholder" +
        "</td> <td>" + "placeholder" +
        "</td> </tr>"
    )
});

$("#submit-button").on("click", function () {

    event.preventDefault();


    train = $("#train").val().trim();
    destination = $("#destination").val().trim();
    firstTrain = $("#first-train").val().trim();
    frequency = $("#frequency").val().trim();

    database.ref().push({
        train: train,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency
    });
});
database.ref().on("child_added", function (childSnapshot) {
    $("#train-table").append("<tr> <td>" + childSnapshot.val().train +
        "</td> <td>" + childSnapshot.val().destination +
        "</td> <td>" + childSnapshot.val().frequency +
        "</td> <td>" + "placeholder" +
        "</td> <td>" + "placeholder" +
        "</td> </tr>");

}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});
