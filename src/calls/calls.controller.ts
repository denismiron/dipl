import { Body, Controller, Post, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import {CallsService} from "./calls.service";
import {CreateCallDto} from "./dto/creare-call.dto";


@ApiTags("Заказы(корзина)")
@Controller("calls")
export class CallsController {
  constructor(private callsService:CallsService) {
  }
  @Get("/viewCalls")
  getCalls(){
    return this.callsService.takeCalls()
  }
  @Post("/order")
  create(@Body() dto: CreateCallDto ){
    return this.callsService.createCall(dto)
  }
}
