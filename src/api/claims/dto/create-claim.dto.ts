import {ApiProperty} from "@nestjs/swagger";
// import {IsEmail, IsString, Length} from "class-validator";

export class CreateClaimDto {

    @ApiProperty({example: 'ex-001', description: 'Номер заявки'})
    readonly number: string;

    @ApiProperty({example: '2011-01-26T13:51:50.417Z', description: 'Дата  и время получения заявки от клиента'})
    readonly date: Date;

    @ApiProperty({example: 'Рога и копыта', description: 'ННазвание фирмы клиента'})
    readonly contractor: string;

    @ApiProperty({example: 'Иванов Иван Иваныч', description: 'ФИО перевозчика'})
    readonly ownername: string;

    @ApiProperty({example: '+79000000000', description: 'Контактный телефон перевозчика'})
    readonly phone: string;

    @ApiProperty({example: 'добавочный', description: 'Комментарии'})
    readonly comment: string;

    @ApiProperty({example: 'https://ati.su/firms/12345/info', description: 'ATI код сети перевозчика'})
    readonly href: string;
}