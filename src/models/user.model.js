import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

// Define User Schema
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    fullName: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    avatar: {
        type: String,  // cloudinary url (like aws cloude)
        required: true
    },
    coverImage: {
        type: String,  // cloudinary url
    },
    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"   // Reference to Video model
        }
    ],
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    refreshtoken: {
        type: String  // Stores active refresh toke
    },

},
    {
        timestamps: true  // Automatically creates createdAt and updatedAt fields
    }
)


// Middleware: Hash password before saving if modified
userSchema.pre("save", async function (next) {
    if(!this.isModified("password"))  return next();

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

// Custom method: Compare entered password with hashed password
userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}


// Custom method: Generate short-lived Access Token
userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET, 
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

// Custom method: Generate long-lived Refresh Token
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET, 
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}



// Export User model
export const User = mongoose.model("User", userSchema)