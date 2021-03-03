import moment from 'moment';

export class Contact {

  private _name: string;
  private _phone: string;
  private history: string[] = [];

  constructor(name: string, phone: string) {
    this.name = name
    this.phone = phone
  }

  public get name(): string {
    return this._name
  }

  public get phone(): string {
    return this._phone
  }

  public set name(value: string) {
    if (value && value.length >= 3 && value.length <= 25) {
      this._name = value
    } else {
      throw new Error(`Invalid name!`)
    }
  }

  public set phone(value: string) {
    if (/[0]\d{3}[ -]\d{3}[ -]\d{3}/g.test(value)) {
      this._phone = value
    } else {
      throw new Error(`Invalid phone number!`)
    }
  }

  public call(): void {
    this.history.push(`${new Date()}Call: Duration: ${(Math.floor(Math.random() * 15) + 1) * 10} sec.`)
  }

  public message(msg: string): void {
    if (msg) {
      this.history.push(`${new Date()}Message: (${msg}).`)
    } else {
      throw new Error(`Invalid message!`);
    }
  }

  public viewHistoryLog(): void {
    if (this.history.length !== 0) {
      console.log(`
${this._name}'s call log:
${this.history.reverse().join('\n')}`)
    } else {
      console.log('No entries')
    }

  }
}
