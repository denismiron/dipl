import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

interface ReviewCreationAttrs{
  phone: string;
  message: string;
  adminMessage: string;
  name: string;
}

@Table({tableName: 'reviews'})
export class Review extends Model<Review, ReviewCreationAttrs>{
  @ApiProperty({example:'1', description:'идентификатор'})
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;
  @ApiProperty({example:'+22234564234', description:'номер телефона'})
  @Column({ type: DataType.STRING, unique: true, allowNull: false})
  phone: string;
  @ApiProperty({example:'Всё было здорово!', description:'Сообщение пользователя'})
  @Column({ type: DataType.TEXT, allowNull: false})
  message: string;
  @ApiProperty({example:'Гоша', description:'Имя пользователя'})
  @Column({ type: DataType.STRING, allowNull: false})
  name: string;
  @ApiProperty({example:'Спасибо за отзыв!', description:'Ответ администратора'})
  @Column({ type: DataType.TEXT, allowNull: true})
  adminMessage: string;
}
