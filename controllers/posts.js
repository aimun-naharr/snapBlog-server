import mongoose from "mongoose";
import PostMessage from "../models/posts.js";
import User from "../models/user.js";

export const getPosts = async (req, res) => {
        try {
                const posts = await PostMessage.find();
                res.status(200).json(posts);
        } catch (error) {
                res.status(400).json({ message: error.message });
        }
};

export const createPost = async (req, res) => {
        const post = req.body;

        if (req.userId) {
                const creator = await User.findOne({ _id: String(req.userId) });
                const newPost = new PostMessage({ ...post, creator });
                try {
                        await newPost.save();
                        res.status(201).json(newPost);
                } catch (error) {
                        res.status(409).json({ message: error.message });
                }
        }
};

export const updatePost = async (req, res) => {
        const { id: _id } = req.params;
        const post = req.body;
        if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).json({ message: "No post with that id" });
        try {
                const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new: true });
                res.status(200).json(updatedPost);
        } catch (error) {
                console.log(error);
        }
};

export const deletePost = async (req, res) => {
        const { id: _id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).json({ message: "No post with that id" });
        try {
                const response = await PostMessage.findByIdAndRemove(_id);
                res.status(200).send(response);
        } catch (error) {
                console.log(error);
        }
};
