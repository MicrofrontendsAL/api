import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { CartEntity } from './entities/cart.entity';
import { ProductEntity } from './entities/product.entity';

export class DatabaseConfiguration implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    return {
      type: 'postgres',
      host: '172.28.0.2', // Adress ip de du compteneur docker postgres
      port: 5433,
      username: 'postgres',
      password: 'postgres',
      database: 'ouitrain_bdd',
      entities: [CartEntity, ProductEntity],
      logging: false,
      synchronize: true,
    };
  }
}
