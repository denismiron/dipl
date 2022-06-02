import { Injectable } from "@nestjs/common";
const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: 'bistro-obed-bufet',
  api_key: '629223456471373',
  api_secret: 'Dl6-R9zsY116vEn12eVdmB9vkIs'
});
@Injectable()
export class ImagesService {
  async uploadImage(imageRef: any){
    const uploadedName = await cloudinary.uploader.upload(`https://restarauntbistro-obed.herokuapp.com/${imageRef}`)
    return uploadedName.url
  }
}
