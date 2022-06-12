import {Body, Controller, Post} from '@nestjs/common';

import {CreateUserDto} from "../users/dto/create-user.dto";
import {AuthService} from "./auth.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

import { User } from "../users/users.model";

@ApiTags("Авторизация")
@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) {
  }
  @ApiOperation({summary:"Авторизация"})
  @Post('/login')
  login(@Body() userDto: CreateUserDto) {
    return this.authService.login(userDto)
  }

  @Post('/registration')
  registration(@Body() userDto: CreateUserDto) {
    return this.authService.registration(userDto)
  }
}
