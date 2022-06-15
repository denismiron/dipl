import { ApiProperty } from "@nestjs/swagger";

export class CreateCategoriesDto{
  @ApiProperty({example:'Обеды', description:'Название категории'})
  readonly name: string;

  @ApiProperty({example:'http://res.cloudinary.com/bistro-obed-bufet/image/upload/v1654357962/qimg24hcz0fgkm1fa6xf.jpg',
    description:'Приходит файл — получется ссылка на изображение на cloudinary'})
  readonly imageRef: string;

  @ApiProperty({example:'Обед ура ура ура ура', description:'Описание категории'})
  readonly description: string;
}
