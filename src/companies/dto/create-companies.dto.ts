import { ApiProperty } from "@nestjs/swagger";

export class CreateCompanyDto{
  @ApiProperty({example:'шгугл', description:'компания основана в 1239843 году'})
  readonly name: string;

  @ApiProperty({example:'http://ссылка на cloudinary', description:'ссылка на url компании'})
  readonly imageRef: string;

  @ApiProperty({example:'false'})
  readonly isVisable: boolean;
}
