import { Module } from '@nestjs/common';
import { VeiculoController } from './veiculo.controller';
import { VeiculosService } from './veiculos.service';

@Module({
  controllers: [VeiculoController],
  providers: [VeiculosService],
})
export class VeiculosModule {}
