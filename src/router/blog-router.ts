import {Router} from "express";
import BlogController from "../controller/blog-controller";

export const blogRouter = Router();
blogRouter.get('/all', BlogController.displayAll)
blogRouter.get('/one/:id',BlogController.displayABlog)
blogRouter.get('/search',BlogController.search)
blogRouter.post('/create', BlogController.createBlog)
blogRouter.put('/edit/:id',BlogController.editBlog)
blogRouter.delete('/delete/:id',BlogController.deleteABlog)