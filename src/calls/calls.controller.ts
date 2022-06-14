import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import {CallsService} from "./calls.service";

@ApiTags('Заказы(корзина)')
@Controller('calls')
export class CallsController {
  constructor(private callsService:CallsService) {
  }
  @Post()
  create(@Body() dto ){
    return this.callsService.createCall(dto)
  }
}
