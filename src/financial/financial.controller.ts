import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('financial')
export class FinancialController {
    @Get()
    findAll() {
        return 'Listagem';
    }

    @Post()
    create(@Body() data ){
        return data;
    }
}
