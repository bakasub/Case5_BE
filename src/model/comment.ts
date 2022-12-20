import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./user";
import {Blog} from "./blog";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn({type: "int"})
    public readonly id: number
    @Column({type: "varchar"})
    public content: string
    @ManyToOne(() => User, (user) => user.comments)
    public user: User;
    @ManyToOne(() => Blog, (blog) => blog.comments)
    public blog: Blog;
}