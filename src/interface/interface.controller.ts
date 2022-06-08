import { Body, Controller, Get, Post, Put } from "@nestjs/common";
import { CreateInterfaceDto } from "./dto/create-interface.dto";
import { InterfaceService } from "./interface.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import {Interface} from "./interface.model";

@ApiTags("Настройки интерфейса")
@Controller("interface")
export class InterfaceController {
  constructor(private interfaceService: InterfaceService) {
  }

  @ApiOperation({summary:"Создание Интерфейса"})
  @ApiResponse({status:200, type: Interface})
  @Post()
  create(@Body() interfaceDto: CreateInterfaceDto) {
    return this.interfaceService.createInterface(interfaceDto);
  }

  @ApiOperation({summary:"Получение всех интерфейсов"})
  @ApiResponse({status:200, type: Interface})
  @Get()
  getAll(){
    return this.interfaceService.getFullInterface()
  }

  // @Put('/edit')
  // edit(@Body() interfaceDto: CreateInterfaceDto){
  //   return this.interfaceService.edit(interfaceDto)
  // }

}
