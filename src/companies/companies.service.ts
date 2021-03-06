import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Company } from "./companies.model";
import { CreateCompanyDto } from "../companies/dto/create-companies.dto";


@Injectable()
export class CompaniesService {
  constructor(@InjectModel(Company) private companyRepository: typeof Company) {
  }
  async createCompany(dto: CreateCompanyDto) {
    const company = await this.companyRepository.create(dto);
    return company;
  }
  async getAllCompanies() {
    const companies = await this.companyRepository.findAll();
    return companies;
  }
  async deleteOneCompany(id: number) {
    const companyToDelete = await this.companyRepository.findOne({
      where: { id: id },
    });
    await this.companyRepository.destroy({ where: { id } });
    return companyToDelete.id;
  }

  async updateOneCompany(id: number, dto: CreateCompanyDto) {
      const [updateCompany] = await this.companyRepository.update(dto, {
        where: { id, }
      })
      return updateCompany
    }
}
