import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Dish } from "../dishes/diches.model";


interface CallCreationAttrs{
  name: string;
  phone: string;
  menu: Array<string>;
}


@Table({tableName: 'calls', createdAt: false, updatedAt: false})
export class Call extends Model<Call, CallCreationAttrs> {
  @ApiProperty({ example: '1', description: 'идентификатор' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: 'Андрей', description: 'Имя человека' })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @ApiProperty({ example: '42683753', description: 'Номер телефонаа' })
  @Column({ type: DataType.STRING, allowNull: false })
  phone: string;

  @ApiProperty({ example: 'Ну там блюда какие-то наверное'})
  @Column({ type: DataType.ARRAY(DataType.TEXT), allowNull: false })
  menu: Array<string>;

}
