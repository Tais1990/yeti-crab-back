import { Module } from "@nestjs/common";
import {SequelizeModule} from '@nestjs/sequelize'
import { UsersModule } from './api/users/users.module';
import { User } from "./api/users/users.model";
import { Claim } from "./api/claims/claims.model";
import { ClaimsModule } from "./api/claims/claims.module";
import {ConfigModule} from "@nestjs/config";
import configuration from './config';

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
          load: [configuration],
        }),
        SequelizeModule.forRoot({
          dialect: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'postgres',
          password: 'Dtyz2006',
          database: 'yeticrab',
          models: [User, Claim],
          autoLoadModels: true
        }),
        UsersModule, ClaimsModule    
    ]

})
export class AppModule {}        

