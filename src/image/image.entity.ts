import { User } from "src/users/users.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Image{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    filename: string;

    @Column()
    path: string;

    @Column()
    mimetype: string;

    @OneToOne(() => User, (user) => user.image)
    @JoinColumn({name: "user_id"})
    user : User

    @Column({name: "user_id", nullable: true})
    userId: number;
}