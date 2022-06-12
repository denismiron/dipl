import { ApiProperty } from "@nestjs/swagger";

export class UpdateReviewDto {
  @ApiProperty({example:'+22234564234', description:'номер телефона'})
  readonly phone: string;
  @ApiProperty({example:'Всё было здорово!', description:'Сообщение пользователя'})
  readonly message: string;
  @ApiProperty({example:'Спасибо за отзыв!', description:'Ответ администратора'})
  readonly adminMessage: string;
  @ApiProperty({example:'Гоша', description:'Имя пользователя'})
  readonly name: string;
}
