import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import { ConfigModule } from "@nestjs/config";
import { User } from "./users/users.model";
import { NewsModule } from './news/news.module';
import { DishesService } from './dishes/dishes.service';
import { DishesController } from './dishes/dishes.controller';
import { DishesModule } from './dishes/dishes.module';

@Module({
  controllers:[DishesController],
  providers:[DishesService],
  imports:[
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    SequelizeModule.forRoot({
    dialect: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    models: [User],
    autoLoadModels: true
  }), UsersModule, NewsModule, DishesModule,]
})
export class AppModule{

}
