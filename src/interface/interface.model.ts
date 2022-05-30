import { Column, DataType, Model, Table } from "sequelize-typescript";

interface InterfaceCreationAttrs{
  key: string;
  value: string;
}

@Table({tableName: 'interface', createdAt: false, updatedAt: false})
export class Interface extends Model<Interface, InterfaceCreationAttrs>{
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;
  @Column({ type: DataType.STRING, unique: true, allowNull: false})
  key: string;
  @Column({ type: DataType.STRING, allowNull: false})
  value: string;
}
