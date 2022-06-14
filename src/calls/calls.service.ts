import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Dish } from "../dishes/diches.model";
import { Call } from "./calls.model";


@Injectable()
export class CallsService {
  constructor(@InjectModel(Call) private callRepository: typeof Call,){

  }
  async createCall(dto){
    try{
      const call = await this.callRepository.create(dto);
      return call;
    }catch(e){
      throw new HttpException('Произошла ошибка при добавлении звонка', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }


}
