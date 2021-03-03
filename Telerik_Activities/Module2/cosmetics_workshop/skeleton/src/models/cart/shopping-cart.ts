import { Product } from '../products/product';

export class ShoppingCart {
  private _productList: Product[] = [];

  public get productList(): Product[] {
    if (this._productList){
      return this._productList
    }
  }

  public addProduct(product: Product): void {
     if(product){
       this._productList.push(product)
     }
  }

  public removeProduct(product: Product): void {
      if (product && this._productList.includes(product)){
        this._productList.splice(this._productList.lastIndexOf(product), 1)
      }
  }

  public containsProduct(product: Product): boolean {
     return this._productList.includes(product)
  }

  public totalPrice(): number {
    let sum = 0
    if (this.productList.length > 0){
      this.productList.map((el) => sum += el.price)
    }
       
      return sum
  }

}
