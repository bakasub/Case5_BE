import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./user";
import {Comment} from "./comment";
import {Like} from "./like";

@Entity()
export class Blog {
    @PrimaryGeneratedColumn({type: "int"})
    public readonly id: number;
    @Column({type: "varchar"})
    public title: string;
    @Column({type: "varchar"})
    public content: string;
    @Column({type: "varchar"})
    public createDate: string;
    @Column({type: "varchar"})
    public imageDir: string;
    @ManyToOne(() => User, (user) => user.blogs)
    public user: User;
    @OneToMany(() => Comment, (comment) => comment.blog)
    public comments: Comment[];
    @OneToMany(()=>Like,(like)=>like.blog)
    public likes: Like[];
}
