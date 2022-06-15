import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Dish } from "../dishes/diches.model";
import { ApiProperty } from "@nestjs/swagger";

interface CategoriesCreationAttrs{
  imageRef: string;
  name: string;
  description: string;
}

@Table({tableName: 'categories',createdAt: false, updatedAt: false})
export class Categories extends Model<Categories, CategoriesCreationAttrs>{
  @ApiProperty({example:'1', description:'идентификатор'})
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({example:'http://res.cloudinary.com/bistro-obed-bufet/image/upload/v1654357962/qimg24hcz0fgkm1fa6xf.jpg',
    description:'Приходит файл — получется ссылка на изображение на cloudinary'})
  @Column({ type: DataType.STRING, allowNull: true})
  imageRef: string;

  @ApiProperty({example:'Обеды', description:'Название категории'})
  @Column({ type: DataType.STRING, allowNull: true})
  name: string;

  @ApiProperty({example:'Обед ура ура ура ура', description:'Описание категории'})
  @Column({ type: DataType.STRING, allowNull: true})
  description: string;

  @HasMany(()=>Dish)
  dishes: Dish[]
}
