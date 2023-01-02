import { ProductEntity } from './product.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class CartEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @ManyToMany(() => ProductEntity, (product) => product.carts)
  @JoinTable()
  products: ProductEntity[];
}
