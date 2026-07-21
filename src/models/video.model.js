import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

// Define Video Schema
const videoSchema = new Schema(
    {
        vedioFile: {
            type: String,  // cloudinary ursl
            required: true
        },
        thumbnail: {
            type: String,  // cloudinary ursl
            required: true
        },
        title: {
            type: String,  
            required: true
        },
        description: {
            type: String,  
            required: true
        },
        duration: {
            type: Number,  // cloudlnary url
            required: true
        },
        views: {
            type: Number,  
            default: 0
        },
        isPulished: {
            type: Boolean,
            required: true
        },
        owner:{
            type: Schema.Types.ObjectId,
            ref: "User"
        }

    },
    {
        timestamps: true
    }
)

// Add aggregate pagination plugin for advanced video queries
videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongose.model("Video", videoSchema)