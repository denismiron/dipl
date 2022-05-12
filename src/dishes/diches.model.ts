import { Column, DataType, Model, Table } from "sequelize-typescript";
interface DishCreationAttrs{
  name: string;
  weight: string;
  imageRef: string;
  price: string;
  description: string;
 }

 @Table({tableName: 'dishes'})
 export class Dish extends Model<Dish, DishCreationAttrs>{
   @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
   id: number;
   @Column({ type: DataType.STRING, allowNull: false})
   name: string;
   @Column({ type: DataType.STRING, allowNull: true})
   weight: string;
   @Column({ type: DataType.STRING, allowNull: true})
   price: string;
   @Column({ type: DataType.STRING, allowNull: true})
   imageRef: string;
   @Column({ type: DataType.STRING, allowNull: true})
   description: string;
 }
