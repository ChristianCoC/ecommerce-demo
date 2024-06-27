import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/users.entity";
import { Order } from "./entities/orders.entity";
import { Product } from "./entities/products.entity";
import { Repository } from "typeorm";

@Injectable()
export class AppRepository{
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Order) private readonly orderRepository: Repository<Order>,
    @InjectRepository(Product) private readonly productRepository: Repository<Product>){}
  
    async getUsers(): Promise<User[]> {
      return await this.userRepository.find();
    };

    async getOrders(): Promise<Order[]> {
        return await this.orderRepository.find();
    };

    async getProducts(): Promise<Product[]> {
        return await this.productRepository.find();
    };
};