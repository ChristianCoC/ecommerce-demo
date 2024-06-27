import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('users')
  async getUsers() {
    return await this.appService.getUsers();
  };

  @Get('products')
  async getProducts() {
    return await this.appService.getProducts();
  };

  @Get('orders')
  async getOrders() {
    return await this.appService.getOrders();
  };
};
