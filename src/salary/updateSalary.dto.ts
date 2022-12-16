import { IsNumber, IsString, IsNotEmpty } from 'class-validator';

export class UpdateSalaryDto{
    
    @IsString()
    month: string;

    @IsNumber()
    year: number;

    @IsNumber()
    bruto: number;

     @IsNumber()
     employeesId: number;

}