import { Controller, Get } from '@nestjs/common';
import { SinhVien } from 'src/entities/sinhvien.entity';
import { SinhVienService } from 'src/services/sinhvien.service';

@Controller('sinhvien')
export class SinhVienController {
  constructor(private readonly sinhVienService: SinhVienService) {}

  @Get()
  async getAllSinhVien(): Promise<SinhVien[]> {
    return await this.sinhVienService.findAll();
  }
}
