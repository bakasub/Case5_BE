import { Request, Response} from "express";
import commentService from "../service/comment-service";

class CommentController {
    getAll = async (req: Request, res: Response) => {
        let list = await commentService.getAll()
        return res.status(200).json(list)
    }

    getAllFromABlog = async (req: Request, res: Response) => {
        let targetBlogId = +req.params.id
        let list = await commentService.getAllFromABlog(targetBlogId)
        return res.status(200).json(list)
    }

    createComment = async (req: Request, res: Response) => {
        let data = await commentService.createComment(req.body)
        return res.status(200).json(data)
    }

    editComment = async (req: Request, res: Response) => {
        let data = req.body
        await commentService.editComment(data)
        return res.status(200).json({message: "Comment edited"})
    }

    removeComment = async (req: Request, res: Response) => {
        let targetId = req.params.id
        await commentService.removeComment(targetId)
        return res.status(200).json({message: "Comment removed"})
    }
}

export default new CommentController()