import User from "../model/user.model.js";

export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const user =await user.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        const createUser = new User(
            {
                fullname,
                email,
                password
            }   
        )
       await createUser.save();
        res.status(200).json({ message: "User created successfully" });

    }
    catch (error) {
        console.log('Error:', error)
        res.status(404).json({ message: error.message });
    }
};

    