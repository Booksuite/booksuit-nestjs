import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Query,
} from '@nestjs/common'

import { PaginationQueryDTO } from '@/common/dto/PaginationRequest.dto'

import { ServiceCreateDTO } from './dtos/ServiceCreate.dto'
import { ServiceSearchQueryDTO } from './dtos/serviceQuerySearch.dto'
import { ServiceService } from './service.service'

@Controller('service/:companyId')
export class SericeController {
    constructor(private serviceService: ServiceService) {}

    @Post('create')
    create(@Body() experienceData: ServiceCreateDTO) {
        return this.serviceService.create(experienceData)
    }

    @Get(':id')
    getById(@Param('id') id: string) {
        return this.serviceService.getById(id)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() data: ServiceCreateDTO) {
        return this.serviceService.update(id, data)
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.serviceService.delete(id)
    }

    @Post('searchServices')
    async searchServices(
        @Param('companyId') companyId: string,
        @Query() queryParams: ServiceSearchQueryDTO,
    ) {
        const pagination: PaginationQueryDTO = {
            itemsPerPage: parseInt(queryParams.itemsPerPage),
            page: parseInt(queryParams.page),
        }

        return await this.serviceService.searchServices(
            companyId,
            pagination,
            queryParams,
        )
    }
}
