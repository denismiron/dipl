
import {IsEmail, IsString, Length} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({example:'Email', description:'должен быть строкой и почтой'})
  @IsString({message: 'Должно быть строкой'})
  @IsEmail({}, {message: "Некорректный email"})
  readonly email: string;

  @ApiProperty({example:'пароль', description:'должен быть правильным)'})
  @IsString({message: 'Должно быть строкой'})
  @Length(4, 16, {message: 'Не меньше 4 и не больше 16'})
  readonly password: string;
}
