import { Module } from '@nestjs/common';
import { VeiculosModule } from './veiculos/veiculos.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [VeiculosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
