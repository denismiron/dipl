import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateInterfaceDto } from "./dto/create-interface.dto";
import { InterfaceService } from "./interface.service";

@Controller("interface")
export class InterfaceController {
  constructor(private interfaceService: InterfaceService) {
  }

  @Post()
  create(@Body() interfaceDto: CreateInterfaceDto) {
    return this.interfaceService.createInterface(interfaceDto);
  }

  @Get()
  getAll(){
    return this.interfaceService.getFullInterface()
  }


}
