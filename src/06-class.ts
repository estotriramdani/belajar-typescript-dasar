class UserClass {
  public name: string;

  constructor(name: string, public age: number) {
    this.name = name;
  }

  setName(newName: string): void {
    this.name = newName;
  }

  getName = (): string => {
    return this.name;
  };
}

class Admin extends UserClass {
  public read: boolean = true;
  public write: boolean = true;
  public phone: string;
  private _email: string = '';

  static roleName: string = 'Admin';

  static sayHi(): string {
    return 'Hai!';
  }

  constructor(phone: string, name: string, age: number) {
    super(name, age);
    this.phone = phone;
  }

  getAccessRole(): { read: boolean; write: boolean } {
    return {
      read: this.read,
      write: this.write,
    };
  }

  set email(newEmail: string) {
    this._email = newEmail;
  }

  get email(): string {
    return this._email;
  }
}

let admin = new Admin('0896572885153', 'Esto', 21);
admin.email = 'estolagi@gmail.com';
console.log(admin.email);
console.log(Admin.roleName);
console.log(Admin.sayHi());
