import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./users.entity"; // Asegúrate de importar la entidad User
import { Product } from "./products.entity"; // Asegúrate de importar la entidad Product

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;
  // Relación muchos a uno con User
  @ManyToOne(() => User, (user) => user.orders)
  user: User;
  // Relación muchos a uno con Product
  @ManyToOne(() => Product, (product) => product.orders)
  product: Product;
  @Column()
  cantidad: number;
  @Column("date")
  fecha: Date;
  // ... otros campos relevantes
}