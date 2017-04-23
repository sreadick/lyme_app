var CommonSymptom = require("./server/models/commonSymptom");

var data = [
    {name: "Headache", id: 1},
    {name: "Facial paralysis", id: 2},
    {name: "Jaw pain", id: 3},
    {name: "Stiff neck", id: 4},
    {name: "Swollen glands", id: 5},
    {name: "Heightened allergic sensitivities", id: 6},
    {name: "Malaise", id: 7},
    {name: "Chest pain", id: 8},
    {name: "Memory loss", id: 9},
    {name: "Depression", id: 10},
    {name: "Sound sensitivity", id: 11},
    {name: "Loss of appetite", id: 12}
];

function seedDB() {
    // remove common symptoms
    CommonSymptom.remove({}, function(err) {
        if (err) {
            console.log(err);
        } else {
            // add common symptoms
            data.forEach(function(seed) {
                CommonSymptom.create(seed, function(err, symptom) {
                    if (err) {
                        console.log(err);
                    }
                });
            });
        }
    });
}

module.exports = seedDB;
