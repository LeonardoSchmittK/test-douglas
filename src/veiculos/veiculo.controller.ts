import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { VeiculosService } from './veiculos.service';

@Controller('veiculos')
export class VeiculoController {
  constructor(private readonly veiculoService: VeiculosService) {}

  @Post()
  create(@Body() CreateVeiculoDto: CreateVeiculoDto): string {
    return this.veiculoService.create(CreateVeiculoDto);
  }

  @Get()
  findAll(): string {
    return this.veiculoService.findAll();
  }
}
