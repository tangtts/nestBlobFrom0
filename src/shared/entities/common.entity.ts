import { ObjectId } from 'mongoose';
import { Column, CreateDateColumn, ObjectID, ObjectIdColumn, UpdateDateColumn, VersionColumn } from 'typeorm';
export abstract class Common {

  @ObjectIdColumn()
  _id:ObjectID

  @CreateDateColumn()
  createAt:Date

  @UpdateDateColumn()
  updateAt:Date

  @Column({
    default:false,
    select:false
  })
  isDelete:boolean

  @VersionColumn({
    select:false
  })
  version:number
}