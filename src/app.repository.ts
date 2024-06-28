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

    async createUser(user: User) {
        return await this.userRepository.save(user);
    };

    async getOrders(): Promise<Order[]> {
        return await this.orderRepository.find();
    };

    async createOrder(order: Order) {
        const user = await this.userRepository.findOne({ where: { id: order.user.id } });
        if (!user) {
            throw new Error(`User with ID ${order.user.id} not found`);
        }

        const product = await this.productRepository.findOne({ where: { id: order.product.id } });
        if (!product) {
            throw new Error(`Product with ID ${order.product.id} not found`);
        }

        const newOrder = new Order();
        newOrder.user = user;
        newOrder.product = product;
        newOrder.cantidad = order.cantidad;
        newOrder.fecha = order.fecha;

        return await this.orderRepository.save(newOrder);
    };

    async getProducts(): Promise<Product[]> {
        return await this.productRepository.find();
    };

    async createProduct(product: Product) {
        return await this.productRepository.save(product);
    };

};