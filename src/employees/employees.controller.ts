import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/createEmployee.dto';
import { UpdateEmployeeDto } from './dto/updateEmployee.dto';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {
    constructor(private employeeService: EmployeesService) { }


    @Post('/create')
    createEmpoloyee(@Body() createEmployeeDto: CreateEmployeeDto) {

        this.employeeService.create(createEmployeeDto)

    }

    @Get('/:id')
    async findEmployee(@Param('id') id: number) {
        const employee = await this.employeeService.findOne(id);
        if (!employee) {
            throw new NotFoundException('employee not found')
        }
        return employee;

    }
    @Get()
    async findAll(@Query('name') name: string) {
        const employee = await this.employeeService.findAll(name);
        if (!employee) {
            throw new NotFoundException('employees with these info are not found');
        }
        return employee;
    }

    @Patch('/:id')
    update(@Param('id') id: string, @Body() body: UpdateEmployeeDto) {
        return this.employeeService.update(parseInt(id), body);
    }

    @Delete('/:id')
    removeEmployee(@Param('id') id: string) {
        return this.employeeService.remove(parseInt(id));
    }


}
