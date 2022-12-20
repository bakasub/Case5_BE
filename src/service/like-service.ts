import {AppDataSource} from "../data-source";
import {Like} from "../model/like";

class LikeService {
    likeRepo: any

    constructor() {
        AppDataSource.initialize().then(async connection => {
            console.log('Fetched like data')
            this.likeRepo = await connection.getRepository(Like)
        })
    }

    getAllFromABlog = async (id) => {
        let query = `select * from like where blogId = '${id}'`
        let list = await this.likeRepo.query(query)
        return list
    }

    getAllUserLike = async (id) => {
        let query = `select * from like where userId = '${id}'`
        let list = await this.likeRepo.query.query
        return list
    }

    addLike = async (data) => {
        return await this.likeRepo.save(data)
    }

    removeLike = async (id) => {
        return await this.likeRepo.delete(id)
    }
}

export default new LikeService()