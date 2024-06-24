import { IsString } from 'class-validator';

export class LoginDTO {
  @IsString()
  mssv: string;

  @IsString()
  password: string;
}
