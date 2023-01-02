export class AddProductToCartDto {
  constructor(
    public readonly productId: number,
    public readonly cartId: number,
  ) {}
}
