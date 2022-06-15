import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

interface CompanyCreationAttrs{
  imageRef: string;
  name: string;
  isVisable: boolean;
}

@Table({tableName: 'companies', createdAt: false, updatedAt: false})
export class Company extends Model<Company, CompanyCreationAttrs>{
  @ApiProperty({example:'1', description:'идентификатор'})
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;
  @ApiProperty({example:'http://ссылка на cloudinary', description:'ссылка на url компании'})
  @Column({ type: DataType.STRING, allowNull: true})
  imageRef: string;
  @ApiProperty({example:'шгугл', description:'компания основана в 1239843 году'})
  @Column({ type: DataType.STRING, allowNull: false})
  name: string;
  @ApiProperty({example:'false'})
  @Column({ type: DataType.STRING, allowNull: false})
  isVisable: boolean;
}
