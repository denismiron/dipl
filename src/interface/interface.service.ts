import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Interface } from "./interface.model";
import { CreateInterfaceDto } from "./dto/create-interface.dto";

@Injectable()
export class InterfaceService {
  constructor(@InjectModel(Interface) private interfaceRepository: typeof Interface) {

  }

  async createInterface(dto: CreateInterfaceDto) {
    const interfaceToCheck = await this.interfaceRepository.findOne({
      where: { key: dto.key }
    });
    const value = dto.value
    if(!interfaceToCheck){
      const inter = await this.interfaceRepository.create(dto);
      return inter;
    }else{
      const interUpdate = this.interfaceRepository.update({value}, {
        where: { key:  dto.key}
      })
      return interUpdate
    }

  }

  async getFullInterface() {
    const inter = await this.interfaceRepository.findAll();
    return inter;
  }

  // async edit(dto: CreateInterfaceDto){
  //
  //    const inter = await this.interfaceRepository.findOrCreate({
  //      where:{}
  //    })
  //  }
}

