import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Blog} from "./blog";
import {Comment} from "./comment";

@Entity()
export class User {
    @PrimaryGeneratedColumn({type: "int"})
    public readonly id: number
    @Column({type: "varchar"})
    public username: string
    @Column({type: "varchar"})
    public password: string
    @Column({type: "boolean", default: false})
    public readonly role: boolean
    @OneToMany(() => Blog, (blog) => blog.user)
    public blogs: Blog[];
    @OneToMany(() => Comment, (comment) => comment.user)
    public comments: Comment[];
}
