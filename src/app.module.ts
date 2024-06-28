import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/users.entity';
import { Order } from './entities/orders.entity';
import { Product } from './entities/products.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppRepository } from './app.repository';

@Module({
  imports: [ TypeOrmModule.forFeature([User, Order, Product]),
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
  controllers: [AppController],
  providers: [AppService, AppRepository],
})
export class AppModule { }
