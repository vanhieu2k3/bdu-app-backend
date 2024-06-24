import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SinhVien } from 'src/entities/sinhvien.entity';
import { SinhVienService } from 'src/services/sinhvien.service';

@Module({
  imports: [TypeOrmModule.forFeature([SinhVien])],
  providers: [SinhVienService],
  exports: [SinhVienService],
})
export class SinhVienModule {}
