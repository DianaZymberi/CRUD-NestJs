import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './company.entity';
import { createCompanyDto } from './dto/createCompany.dto';

@Injectable()
export class CompanyService {
    constructor(@InjectRepository(Company) private readonly repo: Repository<Company>) { }

    create(createCompanyDto: createCompanyDto) {
        const company = this.repo.create(createCompanyDto);
        return this.repo.save(company)
    }

    async findOne(id: number) {
        if (!id) {
            throw new NotFoundException('company not found');
        }
        return this.repo.findOne(
            { where: { id } }
        );
    }
    async findAll(name: string) {
        if (!name) {
            return null;
        }
        return this.repo.find(
            { where: { name } }
        );
    }
    async update(id: number, attrs: Partial<Company>) {
        const company = await this.findOne(id);
        if (!id) {
            return null;
        }
        Object.assign(company, attrs);
        return this.repo.save(company)
    }

    async remove(id: number) {
        const company = await this.findOne(id);
        if (!company) {
            throw new NotFoundException('company not found');
        }
        return this.repo.remove(company);
    }

}
