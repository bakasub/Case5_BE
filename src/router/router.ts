import {Router} from "express";
import {userRouter} from "./user-router";
import {blogRouter} from "./blog-router";
import {commentRouter} from "./comment-router"
import {likeRouter} from "./like-router";

export const router = Router();
router.use('/user',userRouter)
router.use('/blog',blogRouter)
router.use('/comment',commentRouter)
router.use('/like',likeRouter)