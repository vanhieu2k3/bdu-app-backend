import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { SinhVien } from './entities/sinhvien.entity';
import { AuthModule } from './modules/auth.module';
import { SinhVienModule } from './modules/sinhvien.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './mongo-test/users.module';
import { CustomLogger } from './mongo-test/logger.service';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT, 10),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [SinhVien],
      synchronize: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    TypeOrmModule.forFeature([SinhVien]),
    AuthModule,
    SinhVienModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService, CustomLogger],
})
export class AppModule {}
