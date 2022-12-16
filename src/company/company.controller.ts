import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Query } from '@nestjs/common';
import { CompanyService } from './company.service';
import { createCompanyDto } from './dto/createCompany.dto';
import { UpdateCompany } from './dto/updateCompany.dto';

@Controller('company')
export class CompanyController {
    constructor(private companyService: CompanyService) { }
    @Post('/create')
    createCompany(@Body() createCompanyDto: createCompanyDto) {
        this.companyService.create(createCompanyDto)
    }

    @Get('/:id')
    async findCompany(@Param('id') id: string) {
        const Company = await this.companyService.findOne(parseInt(id));
        if (!Company) {
            throw new NotFoundException('company not found')
        }
        return Company;
    }

    @Get('')
    async findAll(@Query('name') name: string) {
        const company = await this.companyService.findAll(name);
        if (!company) {
            throw new NotFoundException('Companies with that name not found')
        }
        return company
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body: UpdateCompany) {
        return this.companyService.update(parseInt(id), body);
    }

    @Delete('/:id')
    removeCompany(@Param('id') id: string) {
        return this.companyService.remove(parseInt(id));
    }
}
