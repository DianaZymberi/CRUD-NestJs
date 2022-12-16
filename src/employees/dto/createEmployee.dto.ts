import { IsDate, IsNotEmpty, IsNumber, IsString} from "class-validator";
import { Column } from "typeorm";

export class CreateEmployeeDto{
    
    @IsString()
    name: string;

    @Column()
    surname: string;

    @IsString()
    email: string;

    @IsString()
    password: string;

    @IsString()
    @IsNotEmpty()
    startedDate: Date;
    
    @IsNumber()
    @IsNotEmpty()
    companyId: number;

   
}