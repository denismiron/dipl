import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Categories } from "../categories/categories.model";
import { ApiProperty, ApiTags } from "@nestjs/swagger";

interface DishCreationAttrs{
  name: string;
  weight: string;
  imageRef: string;
  price: string;
  description: string;
  categoryId: number;
 }


 @Table({tableName: 'dishes', createdAt: false, updatedAt: false})
 export class Dish extends Model<Dish, DishCreationAttrs>{
  @ApiProperty({example:'1', description:'идентификатор'})
   @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
   id: number;

  @ApiProperty({example:'Канапе с семгой', description:'Название блюда'})
   @Column({ type: DataType.STRING, allowNull: false})
   name: string;

  @ApiProperty({example:'6', description:'Вес блюда'})
   @Column({ type: DataType.STRING, allowNull: true})
   weight: string;

  @ApiProperty({example:'15', description:'Цена блюда'})
   @Column({ type: DataType.STRING, allowNull: true})
   price: string;

  @ApiProperty({example:'http://res.cloudinary.com/bistro-obed-bufet/image/upload/v1654358799/r690z4wvg75l6v1gpjbn.png',
    description:'Приходит файл — получется ссылка на изображение на cloudinary'})
   @Column({ type: DataType.STRING, allowNull: true})
   imageRef: string;

  @ApiProperty({example:'Самое лучшее блюдо там огурцы есть пидоморы лук', description:'Описание блюда'})
   @Column({ type: DataType.STRING, allowNull: true})
   description: string;

  @ApiProperty({example:'2', description:'идентификатор категории к которму относится блюдо (идентификатор категории должен существовать)'})
   @ForeignKey(()=>Categories)
   @Column({type:DataType.INTEGER})
   categoryId: number;

   @BelongsTo(()=>Categories)
   category: Categories[];
 }
