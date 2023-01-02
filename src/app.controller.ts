import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AddProductToCartDto } from './dto/add-product-to-cart.dto';

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/all-products')
  getAllProducts() {
    return this.appService.getAllProducts();
  }

  @Get('/all-products-in-cart')
  getAllProductsInCart() {
    return this.appService.getAllProductsInCart();
  }

  @Post('/add-product-to-cart')
  addProductToCart(@Body() addProductToCartDto: AddProductToCartDto) {
    return this.appService.addProductToCart(addProductToCartDto);
  }
}
