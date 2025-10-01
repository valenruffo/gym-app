import { 
    IsEmail, 
    IsInt, 
    IsString, 
    MinLength, 
    IsBoolean, 
    IsOptional, 
    IsNotEmpty} from "class-validator";

export class CreateUserDto {
    @IsString()
    name?: string;

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @MinLength(6)
    @IsNotEmpty()
    hash: string;

    @IsInt()
    age?: number;
}
