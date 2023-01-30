import {IsOptional, IsString} from "class-validator";

export class SignInDto {
    @IsString()
    @IsOptional()
    kakao?: string;

    @IsString()
    @IsOptional()
    fb?: string;

    @IsString()
    @IsOptional()
    apple?: string;
}