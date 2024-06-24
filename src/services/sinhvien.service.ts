import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginDTO } from 'src/dto/login.dto';
import { SinhVien } from 'src/entities/sinhvien.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SinhVienService {
  constructor(
    @InjectRepository(SinhVien)
    private sinhVienRepository: Repository<SinhVien>,
  ) {}

  async findAll(): Promise<SinhVien[]> {
    return this.sinhVienRepository.find();
  }

  async validateUser(loginDTO: LoginDTO): Promise<SinhVien | null> {
    const { mssv, password } = loginDTO;
    const user = await this.sinhVienRepository.findOne({ where: { mssv } });
    if (user && user.password === password) {
      return user;
    }
    throw new UnauthorizedException('Invalid information');
  }
}
