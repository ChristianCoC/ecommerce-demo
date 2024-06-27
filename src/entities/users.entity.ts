import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./orders.entity";


@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nombre: string;
  @Column()
  email: string;
  // Relación uno a muchos con Order
  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];
  // ... otros campos relevantes
}

