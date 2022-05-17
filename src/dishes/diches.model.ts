import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Categories } from "../categories/categories.model";

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

   @ForeignKey(()=>Categories)
   @Column({type:DataType.INTEGER})
   categoryId: number;

   @BelongsTo(()=>Categories)
   category: Categories[];
 }
