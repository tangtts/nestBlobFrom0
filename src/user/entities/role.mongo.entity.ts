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
import { Common } from "src/shared/entities/common.entity";



@Entity()
export class Role extends Common{
  // 昵称
  @Column("text")
  name: string;


 

  @Column()
  permissions: object;

}
