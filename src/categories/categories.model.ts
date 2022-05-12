import { Column, DataType, Model, Table } from "sequelize-typescript";

interface CategoriesCreationAttrs{
  imageRef: string;
  name: string;
}

@Table({tableName: 'categories'})
export class Categories extends Model<Categories, CategoriesCreationAttrs>{
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;
  @Column({ type: DataType.STRING, allowNull: false})
  imageRef: string;
  @Column({ type: DataType.STRING, allowNull: true})
  name: string;
}
