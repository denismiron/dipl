import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Dish } from "./diches.model";
import { CreateDishDto } from "./dto/create-dish.dto";
import { FilesService } from "../files/files.service";
import { ImagesService } from "../images/images.service";


@Injectable()
export class DishesService {
  constructor(@InjectModel(Dish) private dishRepository: typeof Dish,
              private fileService: FilesService,
              private imagesService: ImagesService) {
  }

  async createDish(dto: CreateDishDto, imageRef: any) {
    if (imageRef) {
      const fileName = await this.fileService.createFile(imageRef);
      const uploadedUrl = await this.imagesService.uploadImage(fileName)
      const dish = await this.dishRepository.create({ ...dto, imageRef: uploadedUrl });
      return dish;
    } else {
      const dish = await this.dishRepository.create(dto);
      return dish;
    }
  }

  async getDishById(categoryId: number) {
    const dishes = await this.dishRepository.findAll({where: {categoryId}});
    return dishes;
  }

  async deleteOneDish(id:number){
    await this.checkIsExist(id);
    const dishToDelete = await this.dishRepository.findOne({
      where:{id:id},
    });
    await this.dishRepository.destroy({where:{id}});
    return dishToDelete.id;
  }

  async updateOneDish(id: number, dishDto: CreateDishDto, imageRef: any) {
    if (imageRef) {
      const fileName = await this.fileService.createFile(imageRef)
      const uploadedUrl = await this.imagesService.uploadImage(fileName)
      const [updateDish] = await this.dishRepository.update({ ...dishDto, imageRef: uploadedUrl }, {
        where: { id, }
      })
      return updateDish
    } else {
      const [updateDish] = await this.dishRepository.update(dishDto, {
        where: { id, }
      })
      return updateDish
    }
  }


  private async checkIsExist(id:number){
    const dish = await this.dishRepository.findOne({
      where:{id:id},
    });
    if(!dish){
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: `Dish with id ${id} not found`
      }, HttpStatus.NOT_FOUND)
    }
  }
}
