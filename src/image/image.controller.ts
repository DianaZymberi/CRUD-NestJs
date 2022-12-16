import { Controller, Post, Req, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Observable, of } from 'rxjs';
import { CurrentUserInterceptor } from 'src/auth/interceptors/current-user.interceptor';
import { ImageService } from './image.service';
import { LocalFilesInterceptor } from './localFiles.interceptors';

@Controller('image')
export class ImageController {
    constructor( private imageService: ImageService){}

    @Post('avatar')
    @UseInterceptors(LocalFilesInterceptor({
      fieldName: 'file',
      path: '/avatars'
    }))
    // @UseInterceptors(CurrentUserInterceptor)
    async addAvatar(@Req() request, @UploadedFile() file: Express.Multer.File) {
      return this.imageService.addAvatar(request.user.id, {
        path: file.path,
        filename: file.originalname,
        mimetype: file.mimetype
      });
    }

}
