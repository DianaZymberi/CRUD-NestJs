import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';
import { ImageController } from './image.controller';
import { Image } from './image.entity';
import { ImageService } from './image.service';
import { LocalFilesService } from './localFiles.servicee';

@Module({
  imports: [TypeOrmModule.forFeature([Image]), UsersModule],
  controllers: [ImageController],
  providers: [ImageService, LocalFilesService],
  exports: [ImageService]
})
export class ImageModule {}
