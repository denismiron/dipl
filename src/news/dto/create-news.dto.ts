import { ApiProperty } from "@nestjs/swagger";

export class CreateNewsDto{
  @ApiProperty({example:'Друзья, напоминаем, что у нас вы можете заказать ланчи...', description:'Основное текстовое наполнение новости'})
  readonly description: string;

  @ApiProperty({example:'http://ссылка на cloudinary', description:'ссылка на url новости'})
  readonly imageRef: string;

  @ApiProperty({example:'Доставка ланчей по будням!', description:'Заголовок новости'})
  readonly title: string;

  @ApiProperty({example:'МЫ ЭТО СДЕЛАЛИ УРААААААААА!', description:'Подзаголовок новости'})
  readonly subTitle: string;
}
