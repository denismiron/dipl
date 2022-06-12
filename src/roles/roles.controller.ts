import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {RolesService} from "./roles.service";
import {CreateRoleDto} from "./dto/create-role.dto";
import { ApiExcludeEndpoint, ApiTags } from "@nestjs/swagger";

@Controller('roles')
export class RolesController {
  constructor(private roleService: RolesService) {}

  @ApiExcludeEndpoint()
  @Post()
  create(@Body() dto: CreateRoleDto) {
    return this.roleService.createRole(dto);
  }

  @ApiExcludeEndpoint()
  @Get('/:value')
  getByValue(@Param('value') value: string) {
    return this.roleService.getRoleByValue(value);
  }
}
