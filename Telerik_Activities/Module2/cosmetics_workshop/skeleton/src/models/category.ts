import { Product } from './products/product';


export class Category {
  private readonly _name: string;
  private _products: Product[];
 

  public constructor(name: string) {
     if (name.length < 2 || name.length > 15){
       throw new Error('Invalid name!')
     }
     this._name = name
     if (!this._products){
       this._products = []
     } 
  }

  public get products(): Product[] {
    if (this._products) {
      return this._products
    } else {
      throw new Error('Invalid request!');
    }
  }


  public addProduct(product: Product): void {
    if (this._products && product) {
      this._products.push(product)
    } else {
      throw new Error('No such category!')
    }
  }

  public removeProduct(product: Product): void {
    if (product && this._products.includes(product)) {
      this._products.splice(this._products.lastIndexOf(product), 1)
    } else {
      throw new Error('No such product in this category!')
    }
  }

  public print(): string {
    if (this._products) {
     
      return `#Category: ${this._name}
${this._products.sort((a: Product, b: Product) => {

  // return p1.brand === p2.brand ?
  // (p2.price - p1.price) :
  // p1.brand.localeCompare(p2.brand);

    if (a.brand > b.brand) {
      return 1;
    } else if (a.brand < b.brand) {
      return -1;
    } else {
      return b.price - a.price;
    }
  }) .map((el) => el.print()).join(`\n`)}`

    } else {
      throw new Error('No such category!');
    }
  }

  // Do not remove this. It is used for the tests.
  protected set mockProductsData(value: Product[]) {
    this._products = value;
  }
}
