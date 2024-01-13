const User = require('../models/userModel');

const createUser = async (req, res) => {
    const email = req.body.email;
    const findUser = await User.findOne({email});
    if (!findUser) {
            // create a new user

            const newUser = await User.create(req.body);
            res.json(newUser);
    }

    else{
        // user Already Exist
        res.json({
            msg:"User already exists",
            success: false,
        })
        
    }
};

module.exports = {createUser};

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
