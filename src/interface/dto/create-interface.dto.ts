import { ApiProperty } from "@nestjs/swagger";

export class CreateInterfaceDto{
  @ApiProperty({example:'SiteTitle', description:'ключик'})
  readonly key: string;

  @ApiProperty({example:'Обед-буфет:)', description:'Хранится строковое значение или ссылка на изображение.'})
  readonly value: string;
}
