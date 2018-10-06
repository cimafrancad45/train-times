//firebase init


// Initialize Firebase
var config = {
    apiKey: "AIzaSyDifW2ICTeb5CyhaRXBnyy21glbtFLtXRg",
    authDomain: "train-app-rbc2018.firebaseapp.com",
    databaseURL: "https://train-app-rbc2018.firebaseio.com",
    projectId: "train-app-rbc2018",
    storageBucket: "",
    messagingSenderId: "296160924009"
};

firebase.initializeApp(config);

var database = firebase.database();



// //function to figure out the times a train will come. Referenced example code
// function convertTime(firstT, freq) {


//snapshots
//button to add a new train
$("#submit-button").on("click", function () {
    event.preventDefault();

    //grabs user input
    train = $("#train").val().trim();
    destination = $("#destination").val().trim();
    firstTrain = $("#first-train").val().trim();
    frequency = $("#frequency").val().trim();

    //temporary object for pushing data
    var newTrain = {
        train,
        destination,
        firstTrain,
        frequency
    }
    //pushes into the firebase database
    database.ref().push(newTrain);
});

//firebase database push
database.ref().on("child_added", function (childSnapshot, prevChildKey) {
    console.log(childSnapshot);
    console.log(prevChildKey);

    //variable storage
    var NTtrain = childSnapshot.val().train;
    var NTdest = childSnapshot.val().destination;
    var NTfirst = childSnapshot.val().firstTrain;
    var NTfreq = childSnapshot.val().frequency;

    var trainMin;
    var trainNext;

    //timeconversion logic
    //conversion to make sure it doesn't conflict with current day
    var conversion = moment(NTfirst, "HH:mm").subtract(1, "days");
    console.log(conversion);

    // Difference between the times
    var timeDiff = moment().diff(moment(conversion), "minutes");

    // Time apart (remainder)
    var remainder = timeDiff % NTfreq;

    // Minutes until the next train
    var tMinutesTillTrain = NTfreq - remainder;
    trainMin = tMinutesTillTrain;

    // Next train arrival time
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    trainNext = moment(nextTrain).format("hh:mm");

    //console log to test value
    console.log(NTtrain);
    console.log(NTdest);
    console.log(NTfirst);
    console.log(NTfreq)

    //appends firebase data
    $("#train-table").append("<tr> <td>" + NTtrain +
        "</td> <td>" + NTdest +
        "</td> <td>" + NTfreq +
        "</td> <td>" + trainNext +
        "</td> <td>" + trainMin +
        "</td> </tr>");
    $('#train-table > tbody').empty();
}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});

