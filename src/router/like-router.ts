import {Router} from "express";
import LikeController from "../controller/like-controller";

export const likeRouter = Router()
likeRouter.get('/blog/:id',LikeController.getAllFromABlog)
likeRouter.get('/user/:id', LikeController.getAllUserLike)
likeRouter.post('/add',LikeController.addLike)
likeRouter.delete('/delete/:id',LikeController.removeLike)
