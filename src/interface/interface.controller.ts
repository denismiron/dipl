import { Body, Controller, Get, Param, Post, Put, UploadedFile, UseInterceptors } from "@nestjs/common";
import { CreateInterfaceDto } from "./dto/create-interface.dto";
import { InterfaceService } from "./interface.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import {Interface} from "./interface.model";
import { FileInterceptor } from "@nestjs/platform-express";


@ApiTags("Настройки интерфейса")
@Controller("interfaceSettings")
export class InterfaceController {
  constructor(private interfaceService: InterfaceService) {
  }

  @ApiOperation({summary:"Получение всех интерфейсов"})
  @ApiResponse({status:200, type: Interface})

  @Get()
  getAll(){
    return this.interfaceService.getFullInterface()
  }

  @ApiOperation({summary:"Создание/изменение интерфейса без картинки."})
  @ApiResponse({status:200, type: Interface})

  @Post('/edit')
  edit(@Body() interfaceDto: CreateInterfaceDto) {
    return this.interfaceService.createInterface(interfaceDto);
  }



  @ApiOperation({summary:"Создание/изменение интерфейса С КАРТИНКОЙ."})
  @ApiResponse({status:200, type: Interface})

  @Put('/edit-image')
  @UseInterceptors(FileInterceptor("value"))
  editImage(@Body() interfaceDto: CreateInterfaceDto,
            @UploadedFile() value) {
    return this.interfaceService.createInterfaceImage(value, interfaceDto);
  }


}
