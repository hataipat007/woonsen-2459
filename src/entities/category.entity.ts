import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity({ name: 'Category' })
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @ManyToOne(() => User, (user) => user.id)
  user: User;

  @Column({ type: 'enum', enum: ['income', 'expense'] })
  type: 'income' | 'expense';
}