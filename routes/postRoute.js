import express from 'express'
import { createPost, deletePost, getPosts, updatePost } from '../controllers/posts.js'
import { auth } from '../middlewares/auth.js'
const router=express.Router()

router.get('/', getPosts)
router.post('/',auth, createPost)
router.patch('/:id',auth, updatePost)
router.delete('/:id',auth, deletePost)

export default router