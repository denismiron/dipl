import { ApiProperty } from "@nestjs/swagger";

export class CreateDishDto{
  @ApiProperty({example:'Канапе с семгой', description:'Название блюда'})
  readonly name: string;

  @ApiProperty({example:'6', description:'Вес блюда'})
  readonly weight: string;

  @ApiProperty({example:'http://res.cloudinary.com/bistro-obed-bufet/image/upload/v1654358799/r690z4wvg75l6v1gpjbn.png',
    description:'Приходит файл — получется ссылка на изображение на cloudinary'})
  readonly imageRef: string;

  @ApiProperty({example:'15', description:'Цена блюда'})
  readonly price: string;

  @ApiProperty({example:'Самое лучшее блюдо там огурцы есть помидоры лук', description:'Описание блюда'})
  readonly description: string;

  @ApiProperty({example:'2', description:'идентификатор категории к которму относится блюдо (идентификатор категории должен существовать)'})
  readonly categoryId: number;
}
