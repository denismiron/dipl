import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Dish } from "./diches.model";
import { CreateDishDto } from "./dto/create-dish.dto";
import { FilesService } from "../files/files.service";


@Injectable()
export class DishesService {
  constructor(@InjectModel(Dish) private dishRepository: typeof Dish,
              private fileService: FilesService) {

  }

  async createDish(dto: CreateDishDto, imageRef: any) {
    const fileName = await this.fileService.createFile(imageRef)
    const dish = await this.dishRepository.create({...dto, imageRef: fileName});
    return dish;
  }

  async getDishById(categoryId: number) {
    const dishes = await this.dishRepository.findAll({where: {categoryId}});
    return dishes;
  }
  async deleteOneDish(id:number){
    const dishToDelete = await this.dishRepository.findOne({
      where:{id:id},
    });
    await this.dishRepository.destroy({where:{id}});
    return dishToDelete.id;
  }
}
