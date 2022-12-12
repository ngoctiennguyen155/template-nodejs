import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Tree,
  TreeChildren,
  TreeParent,
} from "typeorm";

@Entity()
@Tree("closure-table")
export class PostEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  editable: string;

  @Column()
  tenBieuMau: string;

  @Column()
  idBieuMau: string;

  @Column()
  deadline: Date;

  @Column()
  sdt: string;

  @TreeChildren()
  children: PostEntity[];

  @TreeParent()
  ref_id: PostEntity;

  @Column()
  ref_maDeXuat: number;

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
