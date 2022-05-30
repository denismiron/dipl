import { Module } from '@nestjs/common';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { News } from  "./news.model"
import { FilesModule } from "../files/files.module";

@Module({
  controllers: [NewsController],
  providers: [NewsService],
  imports: [
    SequelizeModule.forFeature([News]),
    FilesModule
  ]
})
export class NewsModule {}
