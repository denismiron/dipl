import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Call } from "./calls.model";
import {CreateCallDto} from "./dto/create-call.dto"


@Injectable()
export class CallsService {
  constructor(@InjectModel(Call) private callRepository: typeof Call,){

  }
  async createCall(dto: CreateCallDto){
    try{
      const call = await this.callRepository.create(dto);
      return call;
    }catch(e){
      throw new HttpException('Произошла ошибка при добавлении звонка', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
  async takeCalls(){
    const calls = await this.callRepository.findAll()
    return calls;
  }
}
