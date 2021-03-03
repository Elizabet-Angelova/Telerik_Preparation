import { GenderType } from '../common/gender-type';

export class Product {

  private readonly _price: number;

  private readonly _name: string;

  private readonly _brand: string;

  private readonly _gender: GenderType;

  public constructor(name: string, brand: string, price: number, gender: GenderType) {
    //throw { msg: 'Not implemented' };
    if (name.length >= 3 && name.length <= 10) {
      this._name = name
    } else {
      throw new Error('Invalid product name!')
    }
    if (price > 0) {
      this._price = price
    } else {
      throw new Error('Price can not be lower than 0!')
    }

    if (brand.length >= 2 && brand.length <= 10) {
      this._brand = brand
    } else {
      throw new Error('Invalid brend name!')
    }
    this._gender = gender
  }

 public get brand(): string {
   return this._brand
 }
  public get price(): number {
    return this._price;
  }

  public get name(): string {
    return this._name;
  }

  public print(): string {
    return `#${this._name} ${this._brand}\r\n #Price: \$${this._price}\r\n #Gender: ${this._gender}\r\n ===`
    //return `#${this.name} ${this.brand}\r\n #Price: \$${this.price}\r\n #Gender: ${this.gender}\r\n ===`;
  }
}
