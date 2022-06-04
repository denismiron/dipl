import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Dish } from "../dishes/diches.model";

interface CategoriesCreationAttrs{
  imageRef: string;
  name: string;
  description: string;
}

@Table({tableName: 'categories',createdAt: false, updatedAt: false})
export class Categories extends Model<Categories, CategoriesCreationAttrs>{

  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;
  @Column({ type: DataType.STRING, allowNull: true})
  imageRef: string;
  @Column({ type: DataType.STRING, allowNull: true})
  name: string;
  @Column({ type: DataType.STRING, allowNull: true})
  description: string;
  @HasMany(()=>Dish)
  dishes: Dish[]
}
