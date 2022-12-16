import { Body, Controller, Get, Param, Patch, Post, ParseIntPipe, NotFoundException, Query } from '@nestjs/common';
import { get } from 'http';
import { CreateSalaryDto } from './createSalary';
import { SalaryService } from './salary.service';
import { UpdateSalaryDto } from './updateSalary.dto';

@Controller('salary')
export class SalaryController {
    constructor(private salaryService: SalaryService) { }

    @Post('create')
    create(@Body() createSalaryDto: CreateSalaryDto, id: number) {
        this.salaryService.create(id, createSalaryDto);
    }

    @Get('/:id')
    async findSalary(@Param('id') id: number) {
        const employee = await this.salaryService.findOne(id);
        return employee;

    }
    @Get('/:id')
    async findCompany(@Param('id') id: string) {
        const salary = await this.salaryService.findOne(parseInt(id));
        if (!salary) {
            throw new NotFoundException('Not found')
        }
        return salary;

    }
    @Get('')
    async findAll(@Query('bruto') bruto: number) {
        const salary = await this.salaryService.findAll(bruto);
        if (!salary) {
            throw new NotFoundException('Not found')
        }
        return salary
    }

    @Patch('/:id')
    update(@Param('id', ParseIntPipe) id: number, @Body() updateSalaryDto: UpdateSalaryDto) {
        return this.salaryService.update(+id, updateSalaryDto);
    }


}
