import bcrypt from "bcryptjs";
import User from "../models/user";
export const registerUser = async (req, res) => {
        try {
                const { firstName, lastName, email, password, confirmPassword } = req.body;
                if (password !== confirmPassword) return "password didn't match to confirm password";
                const salt = await bcrypt.genSalt();
                const hashPass = await bcrypt.hash(password, salt);
                const user = new User({ firstName, lastName, email, hashPass });
                const savedUser = await user.save();
                res.status(200).json(savedUser);
        } catch (error) {
                res.status(500).send({ message: "something went wrong" });
        }
};
