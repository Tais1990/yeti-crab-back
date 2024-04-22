import {ApiProperty} from "@nestjs/swagger";
// import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {

    @ApiProperty({example: 'Иванов иВан Иванович', description: 'Имя'})
    // @IsString({message: 'Должно быть строкой'})
    // @Length(1, 100000, {message: 'Имя ддолжно содеражть хотя бы 1 букву'})
    readonly name: string;

    @ApiProperty({example: 'user@mail.ru', description: 'Почта'})
    // @IsString({message: 'Должно быть строкой'})
    // @IsEmail({}, {message: "Некорректный email"})
    readonly email: string;

    @ApiProperty({example: '12345', description: 'пароль'})
    // @IsString({message: 'Должно быть строкой'})
    // @Length(4, 16, {message: 'Не меньше 4 и не больше 16'})
    readonly password: string;
}