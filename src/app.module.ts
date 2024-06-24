import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { SinhVien } from './entities/sinhvien.entity';
import { AuthModule } from './modules/auth.module';
import { SinhVienModule } from './modules/sinhvien.module';
import { AppController } from './app.controller';
import { SinhVienController } from './controllers/sinhvien.controller';
import { AppService } from './app.service';
import { SinhVienService } from './services/sinhvien.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [SinhVien],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([SinhVien]),
    AuthModule,
    SinhVienModule,
  ],
  controllers: [AppController, SinhVienController],
  providers: [AppService, SinhVienService],
})
export class AppModule {}
