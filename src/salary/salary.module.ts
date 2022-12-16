import { Module } from '@nestjs/common';
import { SalaryService } from './salary.service';
import { SalaryController } from './salary.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Salary } from './salary.entity';
import { Employees } from 'src/employees/employees.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Salary]), Employees],
  providers: [SalaryService],
  controllers: [SalaryController]
})
export class SalaryModule {}
