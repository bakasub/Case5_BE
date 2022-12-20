import {Router} from "express";
import CommentController from "../controller/comment-controller";

export const commentRouter = Router();
commentRouter.get('/all',CommentController.getAll)
commentRouter.get('/from-blog/:id',CommentController.getAllFromABlog)
commentRouter.post('/create',CommentController.createComment)
commentRouter.put('/edit',CommentController.editComment)
commentRouter.delete('/delete/:id',CommentController.removeComment)