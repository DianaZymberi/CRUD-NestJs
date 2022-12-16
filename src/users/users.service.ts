import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ) {
    }

    create(name: string, email: string, password: string){
        const user  = this.userRepository.create({name, email, password});
        return this.userRepository.save(user)
    }

    async findOneById(id: number) {
        if (!id) {
            return null;
        }
        return this.userRepository.findOne(
            { where: { id } }
        );
    }
   

    
    async findOne(email: string) {
        if (!email) {
            return null;
        }
        return this.userRepository.findOne(
            { where: { email } }
        );
    }
   
    
}
