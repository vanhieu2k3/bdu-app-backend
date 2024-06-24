import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { LoginDTO } from 'src/dto/login.dto';
import { SinhVienService } from 'src/services/sinhvien.service';
import { ValidationPipe } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly sinhVienService: SinhVienService) {}

  @Post('login')
  async login(@Body(new ValidationPipe()) loginDTO: LoginDTO) {
    const user = await this.sinhVienService.validateUser(loginDTO);
    if (user) {
      return { message: 'Login successful', user };
    } else {
      throw new UnauthorizedException('Invalid credentials');
    }
  }
}
