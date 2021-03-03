import { Contact } from './contact';

export class Phonebook {
  private static contacts: Contact[] = [];

  private constructor() {
    //empty
  }


  public static addContact(contact: Contact): void {
    if (contact) {
      const contactFound: Contact | undefined = Phonebook.contacts.find((x: Contact) => x.name === contact.name)
      if (contactFound === undefined) {
        Phonebook.contacts.push(contact)
      } else if (contactFound === contact) {
        throw new Error('Contact already exists!')
      }
    }
    else {
      throw new Error('Invalid contact!')
    }
  }

  public static removeContact(name: string): void {
    const contactFound: Contact | undefined = Phonebook.contacts.find((x: Contact) => x.name === name)
    if (!name) {
      throw new Error('Invalid name!')
    } else if (contactFound === undefined) {
      throw new Error('No such contact!')
    }
    else {
      Phonebook.contacts.splice(Phonebook.contacts.indexOf(contactFound), 1)
    }
  }

  public static updateContact(name: string, phone: string): void {
    const contactFound: Contact | undefined = Phonebook.contacts.find((x: Contact) => x.name === name)
    if (!name) {
      throw new Error('Invalid name!')
    } else if (contactFound === undefined) {
      throw new Error('No such contact!')
    }
    else {
      contactFound.name = name
      contactFound.phone = phone
    }
  }

  public static listAllContacts(): string {
    if (Phonebook.contacts.length === 0) {
      return 'No contacts.'
    } else {
      return `
All contacts:
${Phonebook.contacts.map((contact) => `${contact.name}: [${contact.phone}]`).join('\n')}`
    }
  }

  public static search(partialName: string): Contact[] {
    const contactFound = Phonebook.contacts.filter((x: Contact) => x.name.includes(partialName))
    if (!contactFound) {
      throw new Error(`No contacts include ${partialName}!`)
    } else {
      return contactFound
    }

  }
}
