import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  OneToMany,
} from "typeorm";
import { hashSync } from "bcryptjs";
import { Contacts } from "./contacts.entities";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  fullname: string;

  @Column({ unique: true, length: 50 })
  email: string;

  @Column({ length: 150 })
  password: string;

  @Column({ length: 12 })
  telephone: string;

  @Column({ default: false })
  isAdm: boolean;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeUpdate()
  @BeforeInsert()
  hashPass() {
    this.password = hashSync(this.password, 10);
  }

  @OneToMany(() => Contacts, (contacts) => contacts.user, { nullable: true })
  contacts: Contacts[];
}
