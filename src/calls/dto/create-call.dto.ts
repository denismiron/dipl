import { ApiProperty } from "@nestjs/swagger";
import { Dish } from "../../dishes/diches.model";


export class CreateCallDto{
  @ApiProperty({ example: 'Андрей', description: 'Имя человека' })
  readonly name: string;

  @ApiProperty({ example: '42683753', description: 'Номер телефонаа' })
  readonly phone: string;

  @ApiProperty({ example: 'Ну там блюда какие-то наверное'})
  readonly menu: Dish;
}
