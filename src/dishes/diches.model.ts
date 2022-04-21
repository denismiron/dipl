// import { Column, DataType, Model, Table } from "sequelize-typescript";
//
// interface DishCreationAttrs{
//   name: string;
//   description: string;
//   imageRef: string;
//   weight: string;
//   price: string;
// }
//
// @Table({tableName: 'dishes'})
// export class Dish extends Model<Dish, DishCreationAttrs>{
//   @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
//   id: number;
//   @Column({ type: DataType.STRING, allowNull: false})
//   name: string;
//   @Column({ type: DataType.STRING, allowNull: false})
//   description: string;
//   @Column({ type: DataType.STRING, allowNull: false})
//   price: string;
//   @Column({ type: DataType.STRING, allowNull: false})
//   weight: string;
//   @Column({ type: DataType.STRING, allowNull: false})
//   imageRef: string;
// }
