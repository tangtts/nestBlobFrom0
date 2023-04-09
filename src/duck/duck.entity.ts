import { ObjectId } from 'mongoose';
import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn, UpdateDateColumn, VersionColumn } from 'typeorm';


@Entity()
export  class Duck {

  @ObjectIdColumn()
  _id:ObjectID

  @Column()
  name:String

  @Column()
  age:Number

  @CreateDateColumn()
  createAt:Date
}