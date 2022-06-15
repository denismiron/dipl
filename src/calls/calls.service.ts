import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Call } from "./calls.model";
import {CreateCallDto} from "./dto/create-call.dto"
import { MailsService } from "../../restarauntbistro-obed/src/mails/mails.service";


@Injectable()
export class CallsService {
  constructor(@InjectModel(Call) private callRepository: typeof Call,
              private mailsService: MailsService){

  }

  async createCall(dto: CreateCallDto){
    try{
      const mail = await this.mailsService.sendMail()
      return mail;
    }catch(e){
      throw new HttpException('Произошла ошибка при добавлении звонка', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async takeCalls(){
    const calls = await this.callRepository.findAll()
    return calls;
  }
}
