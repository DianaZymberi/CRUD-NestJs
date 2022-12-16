import { Injectable } from "@nestjs/common";
import { Company } from "src/company/company.entity";
import { Image } from "src/image/image.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;


    @OneToMany(() => Company, (company) => company.user )
    company : Company[]

    @OneToOne(() => Image, (image) => image.user )
    @JoinColumn({name: 'image_id'})
    image : Image

    @Column({name: "image_id", nullable: true})
    imageId: number


    
}