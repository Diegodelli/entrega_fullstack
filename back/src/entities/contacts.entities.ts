import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import { User } from "./user.entitie";

@Entity("contacts")
export class Contacts {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  fullname: string;

  @Column({ unique: true, length: 50 })
  email: string;

  @Column({ length: 12 })
  telephone: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user)
  user: User;
}
