import { BadRequestException, Body, Controller, Get, NotFoundException, Param, Post, Req, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UsersService } from './users.service';
import * as bcrypt from 'bcrypt';
import { Observable, of } from 'rxjs';
import { fileURLToPath } from 'url';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';

export const storage = { storage: diskStorage({
    destination: './uploads/profileimages',
    filename: (req, file, cb) => {
        const filename: string = uuidv4();
        const extension: string = 'jpeg';

        //cb(null, '${filename}${extension}' )
        cb(null, filename)
    }
})}
@Controller('users')
export class UsersController {
    constructor(private userService: UsersService){

    }

    @Post('/create')
    async createUser(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string){
        const hashedPassword = await bcrypt.hash(password, 12);
        const user =  await this.userService.create(name, email, hashedPassword);
        return user;
        
    }
    @Get('/:id')
    async findUser(@Param('id') email: string){
        const user = await this.userService.findOne(email);
        if(!user){
            throw new NotFoundException('user not found')
        }
        return user;

    }
    
    @Post('upload')
    @UseInterceptors(FileInterceptor('file', storage))

    uploadFile(@UploadedFile() file): Observable<Object>{
        console.log(file);
        return of({imagePath: file.path})
        
    }

    
}
