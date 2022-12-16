import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/users.entity';
import { UsersModule } from './users/users.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { CompanyModule } from './company/company.module';
import { Company } from './company/company.entity';
import { EmployeesModule } from './employees/employees.module';
import { Employees } from './employees/employees.entity';
import { SalaryModule } from './salary/salary.module';
import { Salary } from './salary/salary.entity';
import { ImageModule } from './image/image.module';
import { Image } from './image/image.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),    
    TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3308,
        username: 'root',
        password: '',
        database: 'diana',
        entities: [User, Company, Employees, Salary, Image],
        synchronize: true,
        autoLoadEntities: true
    }),
  UsersModule,
  AuthModule,
  CompanyModule,
  EmployeesModule,
  SalaryModule,
  ImageModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService]
})
export class AppModule {}
