import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SinhVien {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  mssv: string;

  @Column()
  password: string;
}
