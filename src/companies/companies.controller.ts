import { Body, Controller, Get, Post } from "@nestjs/common";
import { CompaniesService } from "./companies.service";
import { CreateCompanyDto } from "../companies/dto/create-companies.dto";

@Controller("companies")
export class CompaniesController {
  constructor(private companiesService: CompaniesService) {
  }
  @Post()
  create(@Body() companyDto: CreateCompanyDto) {
    return this.companiesService.createCompany(companyDto);
  }
  @Get()
  getAll(){
    return this.companiesService.getAllCompanies()
  }
}
