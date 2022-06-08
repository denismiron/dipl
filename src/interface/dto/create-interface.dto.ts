import { ApiProperty } from "@nestjs/swagger";

export class CreateInterfaceDto{
  @ApiProperty({example:'SiteTitle', description:'ключик'})
  readonly key: string;

  @ApiProperty({example:'Обед-буфет:)', description:'Значение'})
  readonly value: string;
}
