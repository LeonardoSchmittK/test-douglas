import { Injectable } from '@nestjs/common';
import { CreateVeiculoDto } from './dto/create-veiculo.dto';

@Injectable()
export class VeiculosService {
  private readonly veiculos: CreateVeiculoDto[] = [];

  create(veiculo: CreateVeiculoDto): string {
    this.veiculos.push(veiculo);
    return 'Essa ação adiciona um veículo';
  }

  findAll(): string {
    return `Essa ação retorna todos os veículos: ${JSON.stringify(this.veiculos)}`;
  }
}
