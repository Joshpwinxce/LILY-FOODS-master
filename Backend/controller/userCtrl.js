const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const createUser = asyncHandler(async (req, res) => {
    const email = req.body.email;
    const findUser = await User.findOne({email:email});
    if (!findUser) {
            // create a new user

            const newUser = await User.create(req.body);
            res.json(newUser);
    }

    else{
        // user Already Exist
        throw new Error('User already exists');
        
    }
})


const loginUserCtrl = asyncHandler(async(req, res) =>{
    const {email, password} = req.body;
    
    // check if user exist 
    const findUser = await User.findOne({email});

    if(findUser && (await findUser .isPasswordMatched(password))) {
        res.json(findUser);
    }else{

        throw new Error('Invalid Credentials');
 
}

});

module.exports = {createUser, loginUserCtrl};



// const createUser = async (req, res) => {
//     const email = req.body.email;
//     try {
//         const findUser = await User.findOne({ email });

//         if (!findUser) {
//             // Create a new user
//             const newUser = await User.create(req.body);
//             res.json(newUser);
//         } else {
//             // User already exists
//             res.json({
//                 msg: "User already exists",
//                 success: false,
//             });
//         }
//     } catch (error) {
//         // Handle any errors that occurred during the process
//         console.error("Error in createUser:", error);
//         res.status(500).json({
//             msg: "Internal Server Error",
//             success: false,
//         });
//     }
// };
