import {BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";


interface ClaimsCreationAttrs {
    number: string;
    date: Date;
    // TODO попробовать сделать справочник
    contractor: string;
    ownername: string;
    phone: string;
    comment: string;
    href: string;
    status:ClaimStatus;

}

enum ClaimStatus {
    NEW = "NEW",
    INWORK = "INWORK",
    COMPLETED = "COMPLETED"
  }
  

@Table({tableName: 'claims'})
export class Claim extends Model<Claim, ClaimsCreationAttrs> {
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    //TODO покапать в сторону автозаполнения
    @ApiProperty({example: 'ex-001', description: 'Номер заявки'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    number: string;

    @ApiProperty({example: '2011-01-26T13:51:50.417Z', description: 'Дата  и время получения заявки от клиента'})
    @Column({type: DataType.DATE, unique: false, allowNull: false})
    date: Date;

    //TODO посомтреть в сторону справочика
    @ApiProperty({example: 'Рога и копыта', description: 'Название фирмы клиента'})
    @Column({type: DataType.STRING, unique: false, allowNull: false})
    contractor: string;

    @ApiProperty({example: 'Иванов Иван Иваныч', description: 'ФИО перевозчика'})
    @Column({type: DataType.STRING, unique: false, allowNull: false})
    ownername: string;

    @ApiProperty({example: '+79000000000', description: 'Контактный телефон перевозчика'})
    @Column({type: DataType.STRING, unique: false, allowNull: false})
    phone: string;

    @ApiProperty({example: 'добавочный', description: 'Комментарии'})
    @Column({type: DataType.STRING, unique: false, allowNull: false})
    comment: string;

    @ApiProperty({example: 'https://ati.su/firms/12345/info', description: 'ATI код сети перевозчика'})
    @Column({type: DataType.STRING, unique: false, allowNull: false})
    href: string;

    @ApiProperty({example: 'NEW', description: 'Статус заявки'})
    @Column({type: DataType.ENUM(...Object.values(ClaimStatus)), defaultValue: ClaimStatus.NEW,  unique: false, allowNull: false})
    status:ClaimStatus;


    

//     @ApiProperty({example: 'true', description: 'Забанен или нет'})
//     @Column({type: DataType.BOOLEAN, defaultValue: false})
//     banned: boolean;

//     @ApiProperty({example: 'За хулиганство', description: 'Причина блокировки'})
//     @Column({type: DataType.STRING, allowNull: true})
//     banReason: string;

//     @BelongsToMany(() => Role, () => UserRoles)
//     roles: Role[];

//     @HasMany(() => Post)
//     posts: Post[];
}