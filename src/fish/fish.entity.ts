import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ObjectIdColumn,
  ObjectID,
} from "typeorm";

@Entity()
// 表明
export class Fish {
  //自增列
  @ObjectIdColumn()
  id: ObjectID;
  //普通列
  @Column({
  })
  name: string;
}
