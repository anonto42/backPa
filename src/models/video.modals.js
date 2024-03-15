import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoModal = new mongoose.Schema({
    videoFile:{
        type:String,
        required:true
    },thembnail:{
        type:String,
        required:true
    },titel:{
        type:String,
        required:true
    },description:{
        type:String,
        required:true
    },duration:{
        type:Number,
        required:true
    },views:{
        type:Number,
        default:0
    },isPublished:{
        type:Boolean,
        default:true
    },owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true});

videoModal.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model("Video",videoModal);