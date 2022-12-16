import { IsString, IsNumber } from "class-validator";

export class UpdateCompany{
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
    userId: number;
}