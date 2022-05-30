import { Column, DataType, Model, Table } from "sequelize-typescript";

interface NewsCreationAttrs{
  title: string;
  subTitle: string;
  imageRef: string;
  description: string;
}

@Table({tableName: 'news'})
export class News extends Model<News, NewsCreationAttrs>{
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;
  @Column({ type: DataType.STRING, allowNull: true})
  title: string;
  @Column({ type: DataType.STRING, allowNull: true})
  subTitle: string;
  @Column({ type: DataType.STRING, allowNull: true})
  imageRef: string;
  @Column({ type: DataType.TEXT, allowNull: true})
  description: string;
}
