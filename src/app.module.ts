import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FinancialController } from './financial/financial.controller';

@Module({
  imports: [],
  controllers: [AppController, FinancialController],
  providers: [AppService],
})
export class AppModule {}
