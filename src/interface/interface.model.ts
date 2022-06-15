import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

interface InterfaceCreationAttrs{
  key: string;
  value: string;
}

@Table({tableName: 'interface', createdAt: false, updatedAt: false})
export class Interface extends Model<Interface, InterfaceCreationAttrs>{
  @ApiProperty({example:'1', description:'идентификатор'})
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({example:'SiteTitle', description:'ключик'})
  @Column({ type: DataType.STRING, unique: true, allowNull: false})
  key: string;

  @ApiProperty({example:'Обед-буфет:)', description:'Значение'})
  @Column({ type: DataType.STRING, allowNull: false})
  value: string;
}
