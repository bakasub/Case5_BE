import {Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./user";
import {Blog} from "./blog";

@Entity()
export class Like {
    @PrimaryGeneratedColumn()
    public readonly id;
    @Column()
    public userId: number;
    public user: User;
    @ManyToOne(() => Blog, (blog) => blog.likes)
    blog: Blog;
}



