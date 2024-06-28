import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './entities/users.entity';
import { Product } from './entities/products.entity';
import { Order } from './entities/orders.entity';

@Controller('ecommerce')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('users')
  async getUsers() {
      return await this.appService.getUsers();
  };

  @HttpCode(201)
  @Post('users')
  async createUser(@Body() user: User) {
    return await this.appService.createUser(user);
  };

  @Get('products')
  async getProducts() {
    return await this.appService.getProducts();
  };

  @HttpCode(201)
  @Post('products')
  async createProduct(@Body() product: Product) {
    return await this.appService.createProduct(product);
  };

  @Get('orders')
  async getOrders() {
    return await this.appService.getOrders();
  };

  @HttpCode(201)
  @Post('orders')
  async createOrder(@Body() order: Order) {
    return await this.appService.createOrder(order);
  };

};
