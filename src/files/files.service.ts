import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import * as fs from 'fs';
import * as path from 'path';
import * as uuid from 'uuid';

@Injectable()
export class FilesService {
  async createFile(file): Promise<string>{
    try{
      const fileName = uuid.v4() + '.jpg';
      const filePath = path.resolve(__dirname, '..', 'static')
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, {recursive: true})
      }
      fs.writeFileSync(path.join(filePath, fileName), file.buffer)
      return fileName;
    }catch (e){
      throw new HttpException('Произошла ошибка', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async deleteFile(fileName){
    try{
      fs.unlink(`..static/${fileName}`, function(err){
        if (err) {
          console.log(err);
        } else {
          console.log("Файл удалён");
        }
      });
    }catch (e){
      throw new HttpException('Произошла ошибка', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
