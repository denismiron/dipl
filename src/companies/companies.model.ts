import { Column, DataType, Model, Table } from "sequelize-typescript";

interface CompanyCreationAttrs{
  imageRef: string;
  name: string;
  isVisable: string;
}

@Table({tableName: 'companies'})
export class Company extends Model<Company, CompanyCreationAttrs>{
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;
  @Column({ type: DataType.STRING, allowNull: true})
  imageRef: string;
  @Column({ type: DataType.STRING, allowNull: false})
  name: string;
  @Column({ type: DataType.STRING, allowNull: false})
  isVisable: string;
}
