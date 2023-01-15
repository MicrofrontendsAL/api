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
    let cart: CartEntity;
    try {
      cart = await this.cartRepository.find({
        where: {
          id: addProductToCartDto.cartId
      });
    } catch (error) {
      cart = new CartEntity();
      cart.id = addProductToCartDto.cartId;

      await this.cartRepository.save(cart);
    }
    const products: ProductEntity[] = await this.productRepository.find({
        where: {
            id: addProductToCartDto.productId,
        }
    });

    console.log("Product : " , cart, " add to cart : ", products);
    return await this.cartRepository.createQueryBuilder()
        .where('id = :id', { id: cart.id })
        .relation('products')
        .of(cart)
        .add(products);
  }
  }
}
