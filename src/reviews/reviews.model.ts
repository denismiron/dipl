import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ReviewCreationAttrs{
  phone: string;
  message: string;
  adminMessage: string;
  name: string;
}

@Table({tableName: 'reviews'})
export class Review extends Model<Review, ReviewCreationAttrs>{
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;
  @Column({ type: DataType.STRING, unique: true, allowNull: false})
  phone: string;
  @Column({ type: DataType.TEXT, allowNull: false})
  message: string;
  @Column({ type: DataType.TEXT, allowNull: true})
  adminMessage: string;
  @Column({ type: DataType.STRING, allowNull: false})
  name: string;
}
