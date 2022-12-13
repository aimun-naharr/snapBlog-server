import bcrypt from "bcryptjs";
import User from "../models/user.js";
import jwt from 'jsonwebtoken'
export const registerUser = async (req, res) => {
        try {
                const { firstName, lastName, email, password, confirmPassword } = req.body;
                const existingUser=await User.findOne({email: email})
                if(existingUser) return res.status(400).json({msg: 'User already exist'})
                if (password !== confirmPassword) return "password didn't match to confirm password";
                const salt = await bcrypt.genSalt();
                const hashPass = await bcrypt.hash(password, salt);
                const user = new User({ firstName, lastName, email, password: hashPass });
                const savedUser = await user.save();
                const token=jwt.sign({id: user._id}, process.env.JWT)
                res.status(200).json(savedUser, token);
        } catch (error) {
                res.status(500).send({ error: error.message });
        }
};

export const login = async (req, res) => {
          const { email, password } = req.body;
              
        try {
                const user = await User.findOne({email: email});
                if (!user) return res.staus(400).json({ msg: "User does not exist" });
                const isMatch = await bcrypt.compare(password, user.password);
                if (!isMatch) return res.staus(400).json({ msg: "Invalid credentials" });
                const token=jwt.sign({id: user._id}, process.env.JWT)
                res.status(200).json({token,user});
        } catch (error) {
                res.status(500).send({ error: error.message });
        }
};
