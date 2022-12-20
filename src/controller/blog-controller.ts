import {Request, Response} from "express";
import blogService from "../service/blog-service";

class BlogController {
    displayAll = async (req: Request, res: Response) => {
        let list = await blogService.getAll()
        return res.status(200).json(list)
    }

    createBlog = async (req: Request, res: Response) => {
        let blog = await blogService.createBlog(req.body)
        return res.status(200).json(blog)
    }

    editBlog = async (req: Request, res: Response) => {
        let blogId = +req.params.id;
        let data = req.body;
        data.createDate = new Date().toLocaleDateString().padStart(10, '0')
        await blogService.editBlog({id: blogId}, data)
        return res.status(200).json({message : "Edit success"})
    }

    displayABlog = async (req: Request, res: Response) => {
        let targetId = +req.params.id
        let target = await blogService.findABlog(targetId)
        if (target === null) {
            return res.status(200).json({
                message: 'No blog exist with said id'
            })
        } else {
            return res.status(200).json(target)
        }
    }

    deleteABlog = async (req: Request, res: Response) => {
        let targetId = +req.params.id
        await blogService.deleteBlog(targetId)
        return res.status(200).json({message: "Deleted"})
    }

    search = async (req: Request, res: Response) => {
        let keyword = req.body
        let result = await blogService.filterByKeyword(keyword.title)
        return res.status(200).json(result)
    }
}

export default new BlogController()