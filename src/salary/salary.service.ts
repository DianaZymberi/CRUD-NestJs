import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSalaryDto } from './createSalary';
import { Salary } from './salary.entity';
import { UpdateSalaryDto } from './updateSalary.dto';
import { Employees } from 'src/employees/employees.entity';

@Injectable()
export class SalaryService {
    constructor(@InjectRepository(Salary) private repo: Repository<Salary>) { }

    async create(id: number, createSalaryDto: CreateSalaryDto) {        
        const salary1 = await this.repo.findOne({ where: { id }, relations: ['employee'] })
        const emloyeeDate = salary1?.employee.startedDate.getDate();
         const startedMonth = salary1?.employee.startedDate.getMonth();
         const date = new Date();
         date.setMonth(startedMonth);
         const startedMonth1 = date.toLocaleString('en-US', { month: 'long' });
        //console.log(date.toLocaleString('en-US', { month: 'long' }))
         if(startedMonth1 == createSalaryDto.month && emloyeeDate > 15){
        // if (emloyeeDate > 15) {
           createSalaryDto.bruto = createSalaryDto.bruto  / 2 ;
        // } 
           
            const salary = this.repo.create(createSalaryDto);
            return this.repo.save(salary);           

}}

    async findOne(id: number) {
        if (!id) {
            return null;
        }
        return this.repo.findOne(
            { where: { id } }
        );
    }
    async findAll(bruto: number) {
        if (!bruto) {
            return null;
        }
        return this.repo.find(
            { where: { bruto } }
        );
    }

    async update(id: number, updateSalaryDto: UpdateSalaryDto) {
        const salary = await this.findOne(id);
        if (!id) {
            return null;
        }
        const newSalary = this.repo.create(updateSalaryDto);
        return this.repo.save(newSalary);
    }

}

