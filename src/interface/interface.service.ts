import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Interface } from "./interface.model";
import { CreateInterfaceDto } from "./dto/create-interface.dto";
import { FilesService } from "../files/files.service";
import { ImagesService } from "../images/images.service";

@Injectable()
export class InterfaceService {
  constructor(@InjectModel(Interface) private interfaceRepository: typeof Interface,
              private fileService: FilesService,
              private imagesService: ImagesService){

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

  async createInterfaceImage(value: any, dto: CreateInterfaceDto) {
    const interfaceToCheck = await this.interfaceRepository.findOne({
      where: { key: dto.key }
    });
    if (!interfaceToCheck) {
      const fileName = await this.fileService.createFile(value);
      const uploadedUrl = await this.imagesService.uploadImage(fileName);
      const createdInterface = await this.interfaceRepository.create({ key: dto.key, value: uploadedUrl });
      return createdInterface
    } else {
      const fileName = await this.fileService.createFile(value);
      const uploadedUrl = await this.imagesService.uploadImage(fileName);
      const updatedInterface = this.interfaceRepository.update({value:uploadedUrl}, {
        where: { key:  dto.key}
      })
      return updatedInterface
    }
  }

}

