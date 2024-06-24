import { Module } from '@nestjs/common';
import { AuthController } from 'src/controllers/auth.controller';
import { SinhVien } from 'src/entities/sinhvien.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SinhVienService } from 'src/services/sinhvien.service';

@Module({
  imports: [TypeOrmModule.forFeature([SinhVien])],
  controllers: [AuthController],
  providers: [SinhVienService],
})
export class AuthModule {}
