import { Injectable } from "@nestjs/common";
require('dotenv').config()

const cloudinary = require('cloudinary').v2;
@Injectable()
export class ImagesService {
  async uploadImage(imageRef: any){
    const uploadedName = await cloudinary.uploader.upload(`https://restarauntbistro-obed.herokuapp.com/${imageRef}`)
    return uploadedName.url
    // const image = await new Promise(resolve => imageRef.toBlob(resolve, 'image/png'));
    // let objJsonStr = JSON.stringify(imageRef);
    // let objJsonB64 = Buffer.from(objJsonStr).toString("base64");
    // const uploadedName = await cloudinary.uploader.upload(objJsonB64)
    // return uploadedName.url
  }
}
