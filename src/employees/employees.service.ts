import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Salary } from 'src/salary/salary.entity';
import { Repository } from 'typeorm';
import { Employees } from './employees.entity';
import { CreateEmployeeDto } from './dto/createEmployee.dto';

@Injectable()
export class EmployeesService {
    constructor(@InjectRepository(Employees) private repo: Repository<Employees>) { }

    create(createEmployeeDto: CreateEmployeeDto) {

        const employee = this.repo.create(createEmployeeDto);

        return this.repo.save(employee)
    }

    async findOne(id: number) {
        if (!id) {
            throw new NotFoundException('company not found');
        }
        return this.repo.findOne(
            { where: { id } }
        );
    }
    // async findOneEmp(id: number) {
    //     if (!id) {
    //         return null;
    //     }
    //     const user = await this.repo.findOne(
    //         { where: { id }, relations: ['salary'] }
    //     );

    //     const date = new Date()
    //     date.setDate(15);

    //     if (new Date(user?.startedDate) > date) {
    //         user.salary = (user?.salary[0]?.bruto / 2) as any
    //     } else {
    //         user.salary = (user?.salary[0]?.bruto) as any
    //     }

    //     return user;
    // }
    async findAll(name: string) {
        if (!name) {
            return null;
        }
        return this.repo.findOne(
            { where: { name } }
        );
    }
    async update(id: number, attrs: Partial<Employees>) {
        const employee = await this.findOne(id);
        if (!id) {
            return null;
        }
        Object.assign(employee, attrs);
        return this.repo.save(employee)
    }

    async remove(id: number) {
        const employee = await this.findOne(id);
        if (!employee) {
            throw new NotFoundException('employee not found');
        }
        return this.repo.remove(employee);
    }

}