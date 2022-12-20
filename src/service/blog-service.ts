import {AppDataSource} from "../data-source";
import {Blog} from "../model/blog";

class BlogService {
    blogRepo: any

    constructor() {
        AppDataSource.initialize().then(async connection => {
            console.log('Fetched blog data')
            this.blogRepo = await connection.getRepository(Blog)
        })
    }

    getAll = async () => {
        let list = await this.blogRepo.query(`select *
                                              from blog`)
        return list
    }

    createBlog = async (blog) => {
        blog.createDate = new Date().toLocaleDateString().padStart(10, '0')
        blog = await this.blogRepo.save(blog)
        return blog;
    }

    editBlog = async (id, data) => {
        let editBlog = await this.blogRepo.update(id, data)
        return editBlog
    }

    deleteBlog = async (id) => {
        return await this.blogRepo.delete(id)
    }

    findABlog = async (targetId) => {
        let query = `select *
                     from blog
                     where id = '${targetId}'`
        let target = await this.blogRepo.query(query)
        return target
    }

    filterByKeyword = async (keyword) => {
        let list = await this.blogRepo.query(`select *
                                              from blog
                                              where title like '%${keyword}%'`)
        return list
    }
}

export default new BlogService()