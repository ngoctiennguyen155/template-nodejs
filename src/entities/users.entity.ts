import { IsNotEmpty } from "class-validator";
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";
import { User } from "@interfaces/users.interface";

@Entity()
export class UserEntity extends BaseEntity implements User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  @Unique(["email"])
  email: string;

  @Column()
  name: string;

  @Column()
  profile_pic: string;

  @Column()
  sdt: string;

  @Column()
  maNhanSu: string;

  @Column()
  chucVu: string;

  @Column()
  maChucVu: string;

  @Column()
  tenDonVi: string;

  @Column()
  maDonVi: string;

  @Column()
  userAd: string;

  @Column()
  role: string;

  @Column({ default: 0 })
  countPost: number;
  @Column({ default: 0 })
  countAccepted: number;
  @Column({ default: 0 })
  countRejected: number;
  @Column({ default: 0 })
  countProcessing: number;
  @Column({ default: 0, type: "float" })
  countSLA: number;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  @DeleteDateColumn()
  deletedAt: Date;
}
