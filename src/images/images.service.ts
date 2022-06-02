import { Injectable } from "@nestjs/common";
const cloudinary = require('cloudinary').v2;

@Injectable()
export class ImagesService {
  async uploadImage(imageRef: any){
    const uploadedName = await cloudinary.uploader.upload(`https://restarauntbistro-obed.herokuapp.com/+${imageRef}`)
    return uploadedName.url
  }
}
