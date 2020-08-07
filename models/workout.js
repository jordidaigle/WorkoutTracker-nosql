const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const schemaWorkout=new Schema({

    day: {
        type: Date,
        default: Date.now
    },

    exercises: [{
        
        type: {
            type: String,
            required: "Type of exercise is Required"
        },
        name: {
            type: String,
            trim: true,
            required: "Name is Required"
        },
        weight: {
            type: Number,
            required: "Weight is Required (even if 0)"
        },
        set: {
            type: Number,
            required: "Number of sets is Required"
        },
        reps: {
            type: Number,
            required: "Number of reps is Required"
        },
        duration: {
            type: Number,
            required: "Duration is Required"
        },
        distance: {
            type: Number,
            required: "Distance is Required"
        },
    }]
});

// I should also be able to track the name, type, weight, sets, reps, and duration of exercise.

const Workout=mongoose.model("Workout",schemaWorkout);

module.exports= Workout;