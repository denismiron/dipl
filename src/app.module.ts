import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { ConfigModule } from "@nestjs/config";
import { Review } from "./reviews/reviews.model";
import { Interface } from "./interface/interface.model";
import { News } from "./news/news.model";
import { Company } from "./companies/companies.model";
import { Categories } from "./categories/categories.model";
import { Dish } from "./dishes/diches.model";
import { NewsModule } from "./news/news.module";
import { ReviewsModule } from "./reviews/reviews.module";
import { InterfaceModule } from "./interface/interface.module";
import { DishesModule } from "./dishes/dishes.module";
import { CompaniesModule } from "./companies/companies.module";
import { CategoriesModule } from "./categories/categories.module";
import { FilesModule } from "./files/files.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ImagesModule } from './images/images.module';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';
import * as path from "path";
const cloudinary = require('cloudinary').v2;

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, "static")
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      ssl: true,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      },
      models: [Review, News, Interface, Dish, Company, Categories],
      autoLoadModels: true
    }),
    ReviewsModule,
    NewsModule,
    InterfaceModule,
    DishesModule,
    CompaniesModule,
    CategoriesModule,
    FilesModule,
    ImagesModule,
    RolesModule,
    UsersModule
  ]
})
export class AppModule {

}
