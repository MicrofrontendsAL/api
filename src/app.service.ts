import { Injectable } from '@nestjs/common';
import { CartEntity } from './entities/cart.entity';
import { Repository } from 'typeorm';
import { ProductEntity } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(CartEntity)
    private readonly cartRepository: Repository<CartEntity>,
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  getAllProducts() {
    return this.productRepository.find();
  }

  getAllProductsInCart() {
    return this.cartRepository.find();
  }

  async addProductToCart(addProductToCartDto) {
    const cart: CartEntity = await this.cartRepository.findOne(
      addProductToCartDto.cartId,
    );
    const product: ProductEntity = await this.productRepository.findOne(
      addProductToCartDto.productId,
    );
    cart.products.push(product);
    return this.cartRepository.save(cart);
  }
}
