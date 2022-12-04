const mongoose = require('mongoose');

const UnitSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        minLength:5
    },
    discrption:{
        type:String,
        required:true
    },
    location:[{country:{type:String, required:true}, city:{type:String, required:true}}],
    rate:{
        type:String,
        required:true
    },
    unitType:{type:String, required:true},
    numberofRates:{type:Number, required:true},
    pricePerNight:{type:Number, required:true},
    guestsNumber:{type:Number, required:true},
    Images:[{type:String, required:true}],
    advantages:[
        {
            title:{type:String,
                enum:['Wi-Fi','Bedroom','Kitchen'],
                required:true
            },
            image:{type:String, required:true}
        }
    ],
    host:{type:mongoose.Types.ObjectId, ref:'User'},
    catId:{type:mongoose.Types.ObjectId, ref:'Cat'}
});

const UnitModel = mongoose.model('Unit', UnitSchema);

module.exports = UnitModel;