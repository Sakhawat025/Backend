import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import {User} from "../models/user.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import { response } from "express";

const registerUser = asyncHandler( async ( req, res) => {
    // get user details from frontend
    // validation (like not empty)
    // check if user already exists username, email
    // check for images, check for avatar
    // upload them to cloudinary, avatar
    // create user object - create entry in db
    // remove pass and refresh token field from response
    // check for user creation
    // return res



    // get user details from frontend
    const {fullName, email, username, password} = req.body
    console.log ("email: ", email);

    // validation (like not empty)
    if (
        [fullName, email, username, password].some( () => 
        field?.trim() === "")

    ){
        throw new ApiError(400, "All fields are required"
        )
    }

     // check if user already exists username, email
     const existeUser = User.findOne({
        $or: [{username}, {email}]
     })
     if(existeUser) {
        throw new ApiError(409, "User with email already exists")
     }


     // check for images, check for avatar
     const avatarLocalPath = req.fles?.avatar[0]?.path;
     const coverImageLocalPath = req.files?.coverImage[0]?.path;

     if (!avatarLocalPath) {
        throw new ApiError(40, "Avatar file is required")
     }
     

    // upload them to cloudinary, avatar
    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)
    
    if(!avatar) {
        throw new ApiError(409, "avatar file required")
     }
    

    // create user object - create entry in db
    const user = await tUser.create({
        fullName,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password: username.tolowerCase()
    })

    const createUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )
    
    if (!createUser) {
        throw new ApiError(500, "something went wrond while registering the user")

    }

    return res.status(201).json(
        new ApiResponse(200, createUser, "User Registerd Successfully")
    )

})

export {registerUser}