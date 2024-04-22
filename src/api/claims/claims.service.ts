import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Claim } from './claims.model';
import { CreateClaimDto } from './dto/create-claim.dto';

@Injectable()
export class ClaimsService {
    constructor(@InjectModel(Claim) private claimRepository: typeof Claim) {}

    async createClaim(dto: CreateClaimDto) {
        const claim = await this.claimRepository.create(dto)
        return claim;
    }

    async getAllClaims() {
        const claims = await this.claimRepository.findAll()
        return claims;
    }

    async getClaimByID(id: number) {
        const claim = await this.claimRepository.findOne({where: {id}})
        return claim;
    }

}
