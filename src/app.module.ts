import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/users.entity';
import { Order } from './entities/orders.entity';
import { Product } from './entities/products.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'eco_db',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Jaimillo81.',
      entities: [User, Order, Product],
      synchronize: true,
      logging: true,
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
