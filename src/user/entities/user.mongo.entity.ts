import {
  Entity,
  Column,
  Unique,
  UpdateDateColumn,
  ObjectIdColumn,
  CreateDateColumn,
  ManyToMany,
  JoinTable,
  OneToOne,
} from "typeorm";
import { ObjectId } from "mongoose";
// import { Role } from './role.mongo.entity';
// import { Common } from '@/shared/entities/common.entity';
export enum UserRole {
  ADMIN = "admin",
  EDITOR = "editor",
  GHOST = "ghost",
}
@Entity()
export class User {
  @ObjectIdColumn()
  id: ObjectId;
  // 昵称
  @Column("text")
  name: string;

  // @Unique('email', ['email'])
  @Column({ length: 200 })
  email: string;

  // 手机号

  @Column("text")
  phoneNumber: string;

  @Column()
  password: string;

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.GHOST,
  })
  role: UserRole;
}
