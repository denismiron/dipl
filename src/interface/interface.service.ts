import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Interface } from "./interface.model";
import { CreateInterfaceDto } from "./dto/create-interface.dto";

@Injectable()
export class InterfaceService {
  constructor(@InjectModel(Interface) private interfaceRepository: typeof Interface) {

  }

  async createInterface(dto: CreateInterfaceDto) {
    const inter = await this.interfaceRepository.create(dto);
    return inter;
  }

  async getFullInterface() {
    const inter = await this.interfaceRepository.findAll();
    return inter;
  }
}
