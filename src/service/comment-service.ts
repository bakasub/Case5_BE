import {AppDataSource} from "../data-source";
import {Comment} from "../model/comment";


class CommentService {
    commentRepo: any

    constructor() {
        AppDataSource.initialize().then(async connection => {
            console.log('Fetched comment data')
            this.commentRepo = await connection.getRepository(Comment)
        })
    }

    getAll = async () => {
        let query = `select *
                     from comment`
        let list = await this.commentRepo.query(query)
        return list
    }

    getAllFromABlog = async (id) => {
        let query = `select *
                     from comment
                     where blogId = '${id}'`
        let list = await this.commentRepo.query(query)
        return list
    }

    createComment = async (data) => {
        data = await this.commentRepo.save(data)
        return data
    }

    editComment = async (data) => {
        let editComment = await this.commentRepo.update(data.id, data.payload)
        return editComment
    }

    removeComment = async (id) => {
        return await this.commentRepo.delete(id)
    }
}

export default new CommentService()