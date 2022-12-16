import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/users.entity';
import { Repository } from 'typeorm';
import { Image } from './image.entity';
import { LocalFilesService } from './localFiles.servicee';

@Injectable()
export class ImageService {
  constructor(@InjectRepository(Image)
  private imageRepository: Repository<Image>,
    private localFilesService: LocalFilesService) {

  }
  async addAvatar(userId: number, fileData: LocalFileDto) {
    return await this.localFilesService.saveLocalFileData(fileData, userId);
  }
}
