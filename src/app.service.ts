import { Injectable } from '@nestjs/common';
import { AppRepository } from './app.repository';

@Injectable()
export class AppService {
  constructor(private appRepository: AppRepository){}
  
  async getUsers() {
    return await this.appRepository.getUsers();
  };

  async getProducts() {
    return await this.appRepository.getProducts();
  };
  
  async getOrders() {
    return await this.appRepository.getOrders();
  };
};
