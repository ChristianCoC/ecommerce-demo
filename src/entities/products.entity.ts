import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Order } from "./orders.entity"; // Asegúrate de importar la entidad Order

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nombre: string;
  @Column("decimal")
  precio: number;
  // Relación uno a muchos con Order
  @OneToMany(() => Order, (order) => order.product)
  orders: Order[];
  // ... otros campos relevantes
}