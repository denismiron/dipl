// import { Column, DataType, Model, Table } from "sequelize-typescript";
//
// interface NewsCreationAttrs{
//   name: string;
//   description: string;
//   imageRef: string;
//   title: string;
//   subTitle: string;
// }
//
// @Table({tableName: 'news'})
// export class News extends Model<News, NewsCreationAttrs>{
//   @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
//   id: number;
//   @Column({ type: DataType.STRING, unique: true, allowNull: false})
//   title: string;
//   @Column({ type: DataType.STRING, allowNull: false})
//   subTitle: string;
//   @Column({ type: DataType.STRING, allowNull: false})
//   imageRef: string;
//   @Column({ type: DataType.STRING, allowNull: false})
//   description: string;
// }
