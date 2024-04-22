import { Module } from '@nestjs/common';
import { ClaimsController } from './claims.controller';
import { ClaimsService } from './claims.service';
import { Claim } from './claims.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [ClaimsController],
  providers: [ClaimsService],
  imports: [SequelizeModule.forFeature([Claim])],
  exports: [
    ClaimsService,
  ]
})
export class ClaimsModule {}
