import mongoose from "mongoose";

const {Schema} = mongoose;

const playerSchema = new Schema({
    username:{type:String, requiered:true, unique:true},
    password:{type:String, requiered:true},
    firstname:String,
    lastname:String,
    emailAddress:{type:String,requiered:true, unique:true},
    profileImage: {type: String, data: Buffer},
    score: {type:Number},
    comments:[
        {type:mongoose.Types.ObjectId, requiered:true, ref:"Comment"}
    ]
}, {timestamps: true})

const Player = mongoose.model("Player", playerSchema);

export default Player;