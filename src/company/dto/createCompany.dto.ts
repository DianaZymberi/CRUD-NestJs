import { IsNotEmpty, IsNumber, IsString} from "class-validator";

export class createCompanyDto{
    
    @IsString()
    name: string;

    @IsString()
    location: string;

    @IsString()
    email: string;

    @IsNumber()
    phoneNumber: number;

    @IsNumber()
    employeeNumber: number;

    @IsNumber()
    @IsNotEmpty()
    userId: number;





}