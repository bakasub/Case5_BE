import {Request, Response} from "express";
import likeService from "../service/like-service";

class LikeController {
    getAllFromABlog = async (req: Request, res: Response) => {
        let targetBlogId = +req.params.id
        let list = await likeService.getAllFromABlog(targetBlogId)
        return res.status(200).json(list)
    }

    getAllUserLike = async (req: Request, res: Response) => {
        let targetUserId = +req.params.id
        let list = await likeService.getAllUserLike(targetUserId)
        return res.status(200).json(list)
    }

    addLike = async (req:Request, res: Response) => {
        let like = await likeService.addLike(req.body)
        return res.status(200).json(like)
    }

    removeLike = async (req: Request, res: Response) => {
        await likeService.removeLike(req.params.id)
        return res.status(200).json({message: "Removed like"})
    }
}

export default new LikeController()