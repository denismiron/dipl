import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { CompaniesService } from "./companies.service";
import { CreateCompanyDto } from "../companies/dto/create-companies.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Company } from "./companies.model";
import { Roles } from "../auth/roles-auth.decorator";
import { RolesGuard } from "../auth/roles.guard";


@ApiTags("Компании")

@Controller("companies")
export class CompaniesController {
  constructor(private companiesService: CompaniesService) {
  }

  @ApiOperation({summary:"Создание Компании"})
  @ApiResponse({status:200, type: Company })

  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() companyDto: CreateCompanyDto) {
    return this.companiesService.createCompany(companyDto);
  }

  @ApiOperation({summary:"Получение всех компаний"})
  @ApiResponse({status:200, type: [Company] })

  @Get()
  getAll() {
    return this.companiesService.getAllCompanies();
  }

  @ApiOperation({summary:"Изменение Компании"})
  @ApiResponse({status:200, type: Company })

  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Put()
  updateOneCompany(@Param('id')id:number,
                   @Body() companyDto: CreateCompanyDto,) {
    id:return this.companiesService.updateOneCompany(id, companyDto);
  }
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Delete()
  deleteOneCompany(@Param('id')id:number) {
    return { id: this.companiesService.deleteOneCompany(id) };
  }


}
