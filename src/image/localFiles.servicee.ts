import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Image } from './image.entity';

@Injectable()
export class LocalFilesService {
    constructor(
        @InjectRepository(Image)
        private localFilesRepository: Repository<Image>,
    ) { }

    async saveLocalFileData(fileData: LocalFileDto, userId: number){
        const newFile = this.localFilesRepository.create({ ...fileData, userId });
        return await this.localFilesRepository.save(newFile);
}
}
