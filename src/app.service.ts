import { Injectable } from '@nestjs/common';
import { AppRepository } from './app.repository';
import { User } from './entities/users.entity';
import { Product } from './entities/products.entity';
import { Order } from './entities/orders.entity';

@Injectable()
export class AppService {
  
  constructor(private appRepository: AppRepository){}
  
  async getUsers() {
    return await this.appRepository.getUsers();
  };
  
  async createUser(user: User) {
    return await this.appRepository.createUser(user);
  };
  
  async getProducts() {
    return await this.appRepository.getProducts();
  };
  
  async createProduct(product: Product) {
    return await this.appRepository.createProduct(product);
  };
  
  async getOrders() {
    return await this.appRepository.getOrders();
  };

  async createOrder(order: Order) {
    return await this.appRepository.createOrder(order);
  };

};
