import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { CreateClaimDto } from './dto/create-claim.dto';
import { ClaimsService } from './claims.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Claim } from './claims.model';

@ApiTags('Заявки')
@Controller('claims')
export class ClaimsController {
    constructor (private claimService: ClaimsService){}

    @ApiOperation({summary: 'Создание заявки'})
    @ApiResponse({status: 200, type: Claim})
    @Post()
    create(@Body() claimDto: CreateClaimDto) {
        return this.claimService.createClaim(claimDto);
    }

    @ApiOperation({summary: 'Получить всех заявок'})
    @ApiResponse({status: 200, type: [Claim]})
    @Get()
    getAll() {
        return this.claimService.getAllClaims();
    }

    @ApiOperation({summary: 'Получить заявку по ID'})
    @ApiResponse({status: 200, type: Claim})
    @Get('/:id')
    getByID(@Param('id') id: number) {
        return this.claimService.getClaimByID(id)
    }
}
