import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSalaryDto{
    
    @IsString()
    month: string;

    @IsNumber()
    year: number;

    @IsNumber()
    bruto: number;
    
    @IsNumber()
    @IsNotEmpty()
    employeesId: number;


}