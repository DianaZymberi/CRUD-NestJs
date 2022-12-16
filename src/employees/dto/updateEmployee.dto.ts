import { IsDate, IsNumber, IsString} from "class-validator";
import { Column } from "typeorm";

export class UpdateEmployeeDto{
    
    @IsString()
    name: string;

    @Column()
    surname: string;

    @IsString()
    email: string;

    @IsString()
    password: string;

    @IsString()
    startedDate: Date;

    @IsNumber()
    companyId: number;
}
