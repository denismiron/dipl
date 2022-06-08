import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

interface NewsCreationAttrs{
  title: string;
  subTitle: string;
  imageRef: string;
  description: string;
}

@Table({tableName: 'news'})
export class News extends Model<News, NewsCreationAttrs>{
  @ApiProperty({example:'1', description:'идентификатор'})
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({example:'Доставка ланчей по будням!', description:'Заголовок новости'})
  @Column({ type: DataType.STRING, allowNull: true})
  title: string;

  @ApiProperty({example:'МЫ ЭТО СДЕЛАЛИ УРААААААААА!', description:'Подзаголовок новости'})
  @Column({ type: DataType.STRING, allowNull: true})
  subTitle: string;

  @ApiProperty({example:'http://ссылка на cloudinary', description:'ссылка на url новости'})
  @Column({ type: DataType.STRING, allowNull: true})
  imageRef: string;

  @ApiProperty({example:'Друзья, напоминаем, что у нас вы можете заказать ланчи...', description:'Основное текстовое наполнение новости'})
  @Column({ type: DataType.TEXT, allowNull: true})
  description: string;
}
